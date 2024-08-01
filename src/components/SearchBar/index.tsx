import React, { useState } from 'react';

type SearchHandler = (query: string) => void;

interface SearchBarProps {
  onSearch: SearchHandler;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>(''); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    const newValue = event.target.value; 
    setQuery(newValue);
    onSearch(newValue); 
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Buscar música..."
    />
  );
};

export default SearchBar;
