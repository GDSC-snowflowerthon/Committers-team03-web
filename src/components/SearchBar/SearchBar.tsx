import React, {useState} from 'react';
import * as S from './style';
import {SearchBarProps} from '@/interfaces/search';
import {useRecoilState} from 'recoil';
import {univState} from '@/atoms/univState';
import {instance} from '@/apis/axios';
// import {buddyState} from '@/atoms/buddyState';
import {searchState} from '@/atoms/searchState';

const SearchBar: React.FC<SearchBarProps> = ({placeholder, title}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [, setSearchResult] = useRecoilState(univState);
  const [, setSearchBuddyResult] = useRecoilState(searchState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = async () => {
    try {
      if (title === '학교 등록') {
        const response = await instance.get(
          `/api/v1/univ?univName=${inputValue}`,
        );
        const data = response?.data?.data;
        console.log(data);
        setSearchResult((prev) => ({
          ...prev,
          univName: data?.univName,
          totalHeight: data?.totalHeight,
          isRegistered: data?.isRegistered,
        }));
      } else {
        const response = await instance.get('/api/v1/buddy/search');
        const data = response?.data?.data;
        console.log(data);
        setSearchBuddyResult({
          nickname: data?.nickname,
          snowmanHeight: data?.snowmanHeight,
          isFollowed: data?.isFollowed,
        });
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
