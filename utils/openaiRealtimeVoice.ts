import { RefObject } from "react";
import { sendHistory } from "./reportHistory";

export const startRealtimeSession = async (
  pc: RTCPeerConnection,
  dataChannelRef: RefObject<RTCDataChannel | null>,
  conversationHistoryRef: RefObject<object[]> // Track conversation history
) => {
  try {
    // Fetch ephemeral key
    const tokenResponse = await fetch("/api/voice");

    const data = await tokenResponse.json();
    if (!data.success) {
      throw new Error(data.message);
    }
    const EPHEMERAL_KEY = data.data.voiceToken;

    // Set up to play remote audio from the model
    const audioEl = document.createElement("audio");
    audioEl.autoplay = true;
    pc.ontrack = (e) => (audioEl.srcObject = e.streams[0]);

    // Add local audio track (microphone)
    const ms = await navigator.mediaDevices.getUserMedia({ audio: true });
    const [audioTrack] = ms.getTracks();
    pc.addTrack(audioTrack, ms);

    // Set up data channel for event handling
    const dc = pc.createDataChannel("oai-events");
    dataChannelRef.current = dc; // Store data channel reference externally

    // Ensure history is empty before starting a new session
    conversationHistoryRef.current = [];

    dc.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        if (data.type === "response.audio_transcript.done") {
          console.log("AI: ", data.transcript);
          conversationHistoryRef.current?.push({
            role: "assistant",
            content: data.transcript,
          }); // Store in history
        } else if (
          data.type === "conversation.item.input_audio_transcription.completed"
        ) {
          console.log("User: ", data.transcript);
          conversationHistoryRef.current?.push({
            role: "user",
            content: data.transcript,
          });
        }
      } catch (error) {
        console.error("Error processing DataChannel message:", error);
      }
    };

    dc.onopen = () => {
      // Fire an event of type conversation.item.create
      const createEvent = {
        type: "response.create",
        response: {},
      };
      dc.send(JSON.stringify(createEvent));
    };

    // Start session with SDP offer
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);

    const baseUrl = "https://api.openai.com/v1/realtime";
    const model = "gpt-4o-realtime-preview";
    const sdpResponse = await fetch(`${baseUrl}?model=${model}`, {
      method: "POST",
      body: offer.sdp,
      headers: {
        Authorization: `Bearer ${EPHEMERAL_KEY}`,
        "Content-Type": "application/sdp",
      },
    });

    if (!sdpResponse.ok) throw new Error("Failed to exchange SDP");

    const answer: RTCSessionDescriptionInit = {
      type: "answer",
      sdp: await sdpResponse.text(),
    };
    await pc.setRemoteDescription(answer);

    console.log("Realtime session started successfully.");
  } catch (error) {
    console.error("Error starting realtime session:", error);
    pc.close();
  }
};

export const stopRealtimeSession = async (
  pc: RTCPeerConnection,
  dataChannelRef: RefObject<RTCDataChannel | null>,
  conversationHistoryRef: RefObject<object[]>, // Retrieve stored conversation history
  availableVoiceSeconds: number = 0
) => {
  try {
    if (!pc || pc.connectionState === "closed") {
      console.warn("RTCPeerConnection is already closed.");
      return;
    }

    // Stop media tracks
    pc.getSenders().forEach((sender) => sender.track?.stop());

    // Close the data channel if it exists
    if (dataChannelRef.current) {
      dataChannelRef.current.close();
      dataChannelRef.current = null;
    }

    // Stop audio playback and release resources
    const audioEl = document.querySelector("audio");
    if (audioEl) {
      audioEl.pause();
      if (audioEl.srcObject) {
        (audioEl.srcObject as MediaStream)
          .getTracks()
          .forEach((track) => track.stop());
        audioEl.srcObject = null;
      }
    }

    // Close peer connection
    pc.ontrack = null;
    pc.onicecandidate = null;
    pc.oniceconnectionstatechange = null;
    pc.close();

    console.log("Realtime session stopped and resources released.");

    // Send conversation history to API
    if (
      conversationHistoryRef.current &&
      conversationHistoryRef.current.length > 0
    ) {
      await sendHistory(conversationHistoryRef.current, "voice", availableVoiceSeconds);

      // Clear history after sending
      conversationHistoryRef.current = [];
    }
  } catch (error) {
    console.error("Error stopping realtime session:", error);
  }
};
