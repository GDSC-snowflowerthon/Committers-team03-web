import React from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import SearchBar from '@/components/SearchBar/SearchBar';
import {FollowFriend} from '@/components/Follow/FollowFriend';

export default function Follow() {
  return (
    <PageLayout title={'친구 추가'}>
      <SearchBar placeholder={'깃허브 아이디를 입력하세요'} value={''} />
      <FollowFriend />
    </PageLayout>
  );
}
