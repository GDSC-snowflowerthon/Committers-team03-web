import styled, { keyframes } from 'styled-components';
import theme from '@/theme';

type LogoStyleProps = {
  backgroundColor?: string;
  background?: string;
  width: number;
  height: number;
  margin?: string;
  dark?: boolean;
  padding?: string;
  borderRadius?: string;
};

export const Logo = styled.img<LogoStyleProps>`
  background: ${(props) => props.background && `url(${props.background})`} no-repeat;
  background-color: ${(props) => props.backgroundColor};
  background-size: 300px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  /* margin: ${(props) => `${props.margin}`}; */
  margin-top: 10rem;
  padding: ${(props) => (props.padding ? `${props.padding}` : 0)};
  border-radius : ${(props) => props.borderRadius};
  height: ${(props) => `${props.height}`};
  outline: none;
  border: #90C9F6;
  z-index: 2;
  box-shadow: none;
  color: ${theme.colors.textMain};
`

const moveUpDown = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
`;

// AnimatedObjectWrapper 스타일 컴포넌트
export const AnimatedObjectWrapper = styled.div`
  z-index: 1;
  animation: ${moveUpDown} 2s ease-in-out infinite;
`;