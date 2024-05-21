const BASE_URL = process.env.BASE_URL;

export async function getLotteryData(type: string) {
  const res = await fetch(`${BASE_URL}${type}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
