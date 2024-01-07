// style.js 또는 SnowmanScene의 스타일 정의 파일
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

// Canvas 스타일을 조정하는 SnowmanCanvas 컴포넌트
export const SnowmanCanvas = styled(Canvas)`
  width: 100%; // 컨테이너의 너비에 맞춰서 100%
  height: 100%; // 컨테이너의 높이에 맞춰서 100%
`;

export const Container = styled.div`
  width: 100%;
  background-color: #90C9F6;
`;

export const Wrapper = styled.div`
  width: 300px; // 너비를 300px로 설정
  height: 500px; // 높이를 400px로 설정
  background-size: cover; // 배경 이미지 사이즈 조정 (필요에 따라)
`;
