import React from 'react';
import { AnimatedObjectWrapper } from './style'; // 스타일 파일의 경로를 확인하세요

export default function AnimatedObjects({ backgroundImageUrl }) {
  return (
    <AnimatedObjectWrapper background={backgroundImageUrl} />
  );
}
