import React from 'react';
import LogoImg from '@/assets/Logo/Logo.png';
import * as S from './style';
import {LogoProps} from '@/interfaces/logo';

export default function Logo(props: LogoProps) {
  return <S.Logo {...props} width={300} height={260} background={LogoImg} />;
}
