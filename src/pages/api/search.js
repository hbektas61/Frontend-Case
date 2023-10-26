import { BASE_URL } from '@/configs/base';

export async function fetchSearchResults(query) {
  if (query.trim() === "") return [];

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get?name=${query}`);
    const data = await response.json();
    
    return data || [];
  } catch (error) {
    console.error("Arama sonuçları alınırken hata:", error);

    return [];
  }
}
