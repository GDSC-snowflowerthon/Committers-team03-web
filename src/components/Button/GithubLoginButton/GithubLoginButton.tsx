import React from 'react';
import Button from '../Button'; // Adjust the import path as needed
import GithubLoginButtonImg from '@/assets/Button/GithubLoginButton.png';
import * as S from './style';
import {GithubButtonProps} from '@/interfaces/button';

export default function GithubLoginButton(props: GithubButtonProps) {
  return (
    <S.GithubButtonWrapper>
      <Button
        {...props}
        type="button"
        width={300}
        height={50}
        background={GithubLoginButtonImg}
      />
    </S.GithubButtonWrapper>
  );
}
