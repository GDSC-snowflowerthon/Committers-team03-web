import React, {useState} from 'react';
import * as S from './style';
import {SearchBarProps} from '@/interfaces/search';

const SearchBar: React.FC<SearchBarProps> = ({placeholder}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <S.Container>
      <S.Label htmlFor="searchInput">
        <S.Input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
        <S.SearchIcon />
      </S.Label>
    </S.Container>
  );
};

export default SearchBar;
