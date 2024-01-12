import React, {useState} from 'react';
import * as S from './style';
import {SearchBarProps} from '@/interfaces/search';
import {useRecoilState} from 'recoil';
import {otherUserState} from '@/atoms/userState';
import axios from 'axios';

const SearchBar: React.FC<SearchBarProps> = ({placeholder, title}) => {
  const [inputValue, setInputValue] = useState('');
  const [, setSearchResult] = useRecoilState(otherUserState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = async () => {
    try {
      // Get the access token
      const tokenResponse = await axios.get('https://kidari.site/api/v1/univ', {
        withCredentials: true,
      });
      const accessToken = tokenResponse.data.accessToken;

      if (title === '학교 등록') {
        const response = await axios.post(
          'https://kidari.site/api/v1/univ',
          {
            univName: inputValue,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
        const data = response.data;
        console.log(data);
        setSearchResult((prev) => ({
          ...prev,
          univName: data.data.univName,
          totalHeight: data.data.totalHeight,
          isRegistered: data.data.isRegistered,
        }));
      } else {
        // Set the Authorization header for the GET request
        axios.defaults.headers.common['Authorization'] =
          `Bearer ${accessToken}`;

        const response = await axios.get(
          'https://kidari.site/api/v1/buddy/search',
        );
        const data = response.data;
        console.log(data);
        setSearchResult((prev) => ({
          ...prev,
          nickname: data.nickname,
          snowmanHeight: data.snowmanHeight,
          isFollowed: data.isFollowed,
        }));
      }
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
