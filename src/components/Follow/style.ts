
import { styled } from "styled-components";
import theme from '@/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color:${theme.colors.white};
  margin-right: 8px;
  width: 380px;
  height: 45px;
  padding: 8px;
  border-radius: 10px;
  outline: none;
  margin-top: 2rem;
`;

export const Text = styled.div`
  font-size: 14px;
  color: ${theme.colors.textMain};

`;

export const Profile = styled.div`

  font-size: 14px;
  color: ${theme.colors.textMain};
  cursor: pointer;
`;

export const RegisterButton = styled.button<{ clicked: boolean }>`
  width: 60px;
  height: 35px;
  color: ${theme.colors.white};
  font-size: 12px;
  border-radius: 4px;
  background-color: ${props => props.clicked ? `${theme.colors.unFollow}` : `${theme.colors.follow}`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
`;