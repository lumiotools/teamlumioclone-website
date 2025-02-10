export const sendHistory = async (
  history: object[],
  mode: string,
  availableVoiceSeconds?: number
) => {
  await fetch("/api/history", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      history,
      mode,
      ...(mode === "voice" && { availableVoiceSeconds }),
    }),
  });
};
