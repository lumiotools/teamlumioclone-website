export const sendHistory = async (history: object[], mode: string) => {
  await fetch("/api/history", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      history,
      mode,
    }),
  });
};
