
import { styled } from "styled-components";
import theme from '@/theme';
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  width: 85%;
  height: 45px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 12px;
  outline: none;
  margin-top: 2rem;
`;

export const Text = styled.div`
  font-size: 14px;
  color: ${theme.colors.textMain};

`;

export const RegisterButton = styled.button<{ clicked: boolean }>`
  width: 60px;
  height: 35px;
  color: ${theme.colors.white};
  border-radius: 12px;
  font-weight: 600;
  background-color: ${props => props.clicked ? '#7E9ECC' : '#3181F4'};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
`;