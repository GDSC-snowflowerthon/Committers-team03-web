import styled from 'styled-components';
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
  background: ${(props) => props.background && `url(${props.background})`};
  background-color: ${(props) => props.backgroundColor};
  background-size: cover;
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
  border: none;
  z-index: 2;
  box-shadow: none;
  color: ${theme.colors.textMain};
`