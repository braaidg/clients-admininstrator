export async function getClients() {
  const url = import.meta.env.VITE_API_URL;

  const response = await fetch(url);
  const results = await response.json();

  return results;
}
