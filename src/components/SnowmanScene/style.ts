// style.js 또는 SnowmanScene의 스타일 정의 파일
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { SnowmanSceneProps } from '@/interfaces/snowman'; 

// Canvas 스타일을 조정하는 SnowmanCanvas 컴포넌트
export const SnowmanCanvas = styled(Canvas)`
  width: 100%; // 컨테이너의 너비에 맞춰서 100%
  height: 100%; // 컨테이너의 높이에 맞춰서 100%
`;

export const Container = styled.div`
  width: 100%;
  background-color: transparent;
`;

export const Wrapper = styled.div<SnowmanSceneProps>`
  width: 100%; // 너비를 300px로 설정
  height: ${(props) => props.height || '500px'}; // props에서 height 값을 사용하거나 기본값으로 '500px'를 설정합니다.
  background-size: cover; // 배경 이미지 사이즈 조정 (필요에 따라)
`;
