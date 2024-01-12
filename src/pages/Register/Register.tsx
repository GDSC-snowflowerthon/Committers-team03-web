import React from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import SearchBar from '@/components/SearchBar/SearchBar';
import {RegisterUniv} from '@/components/RegisterUniv/RegisterUniv';

export default function Register() {
  return (
    <PageLayout title={'학교 등록'}>
      <SearchBar
        placeholder={'학교명을 입력하세요'}
        value={''}
        title={'학교 등록'}
      />
      <RegisterUniv />
    </PageLayout>
  );
}
