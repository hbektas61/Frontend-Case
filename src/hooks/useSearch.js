import { useState } from 'react';
import { fetchSearchResults } from '../pages/api/search';
import { debounce } from '../utils/debounce';

export function useSearch() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const fetchSearchResultsDebounced = debounce(async (query) => {
        const results = await fetchSearchResults(query);
        setSearchResults(results);
    }, 300);

    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value);
        fetchSearchResultsDebounced(e.target.value);
    };

    return {
        searchValue,
        setSearchValue,
        searchResults,
        handleSearchInputChange,
        fetchSearchResultsDebounced
    };
}
