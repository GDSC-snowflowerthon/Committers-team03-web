import React, {useState} from 'react';
import * as S from './style';
import {SearchBarProps} from '@/interfaces/search';
import {useRecoilState} from 'recoil';
import {otherUserState} from '@/atoms/userState';

const SearchBar: React.FC<SearchBarProps> = ({placeholder}) => {
  const [inputValue, setInputValue] = useState('');
  const [, setSearchResult] = useRecoilState(otherUserState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch('api/v1/buddy/search');
      const data = await response.json();
      console.log(data);
      setSearchResult((prev) => ({
        ...prev,
        nickname: data.nickname,
        snowmanHeight: data.snowmanHeight,
        isFollowed: data.isFollowed,
      }));
    } catch (error) {
      console.error(error);
    }
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
        <S.SearchIcon onClick={handleSearch} />
      </S.Label>
    </S.Container>
  );
};

export default SearchBar;
