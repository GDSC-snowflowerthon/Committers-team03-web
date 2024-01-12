import React from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import SearchBar from '@/components/SearchBar/SearchBar';
import {FollowFriend} from '@/components/Follow/FollowFriend';

export default function Follow() {
  return (
    <PageLayout title={'Follow'}>
      <SearchBar
        placeholder={'Enter your GitHub ID'}
        value={''}
        title={'친구 등록'}
      />
      <FollowFriend />
    </PageLayout>
  );
}
