import styled from 'styled-components';
import theme from '@/theme';

type ButtonStyleProps = {
    backgroundColor?: string;
    background?: string;
    width: number;
    height: number;
    margin?: string;
    dark?: boolean;
    padding?: string;
    borderRadius?: string;
  };

export const GithubButtonWrapper = styled.div`
    background-size: 50px 50px;
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 5rem;
    width: 300px;  // 버튼 크기 조정
    height: 50px; // 버튼 크기 조정
    border: none;
    cursor: pointer;
   
    z-index: 2;
    background-color: transparent;
`;

export const Button = styled.button<ButtonStyleProps>`
  background: ${(props) => props.background && `url(${props.background})`};
  background-color: ${(props) => props.backgroundColor};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  margin: ${(props) => `${props.margin}`};
  padding: ${(props) => (props.padding ? `${props.padding}` : 0)};
  border-radius : ${(props) => props.borderRadius};
  height: ${(props) => `${props.height}`};
  outline: none;
  border: none;
  z-index: 2;
  box-shadow: none;
  color: ${theme.colors.textMain};
  cursor: ${(props) => (props.disabled || props.dark ? 'cursor' : 'pointer')};
  filter: ${(props) => (props.disabled || props.dark) && 'brightness(0.7)'};
`;
