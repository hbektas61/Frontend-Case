export async function fetchSearchResults(query) {
    if (query.trim() === "") return [];

    try {
        const response = await fetch(`http://localhost:3002/api/get?name=${query}`);
        const data = await response.json();
        return data || [];
    } catch (error) {
        console.error("Arama sonuçları alınırken hata:", error);
        return [];
    }
}
