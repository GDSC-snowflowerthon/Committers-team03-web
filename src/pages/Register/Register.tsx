import React from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import SearchBar from '@/components/SearchBar/SearchBar';
import {RegisterUniv} from '@/components/RegisterUniv/RegisterUniv';

export default function Register() {
  return (
    <PageLayout title={'Registration'}>
      <SearchBar
        placeholder={'Enter the University Name'}
        value={''}
        title={'학교 등록'}
      />
      <RegisterUniv />
    </PageLayout>
  );
}
