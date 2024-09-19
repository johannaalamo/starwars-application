import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (searchValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  const [inputValue, setInputValue] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearchChange(inputValue);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, onSearchChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <TextField
      label="Search Characters"
      variant="outlined"
      value={inputValue}
      onChange={handleInputChange}
      fullWidth
      autoFocus
      aria-label="search characters"
      style={{ marginBottom: "20px"}}
    />
  );
};

export default SearchBar;
