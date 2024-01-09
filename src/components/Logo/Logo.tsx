import React from 'react';
import LogoImg from '@/assets/Logo/Kidari.png';
import * as S from './style';
import {LogoProps} from '@/interfaces/logo';

export default function Logo(props: LogoProps) {
  return (
    <S.AnimatedObjectWrapper>
      <S.Logo {...props} width={300} height={130} background={LogoImg} />;
    </S.AnimatedObjectWrapper>
  )
}
