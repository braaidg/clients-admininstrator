export async function getClients() {
  const url = import.meta.env.VITE_API_URL;

  const response = await fetch(url);
  const results = await response.json();

  return results;
}

export async function addClient(data) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}
