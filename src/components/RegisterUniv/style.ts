
import { styled } from "styled-components";
import theme from '@/theme';
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.white};
  width: 85%;
  height: 45px;
  padding: 8px;
  border-radius: 12px;
  outline: none;
  margin-top: 2rem;
`;

export const UnivText = styled.div`
  font-size: 14px;
  color: ${theme.colors.textMain};
  padding-left: 2rem;
`;



export const Text = styled.div`
  font-size: 14px;
  color: ${theme.colors.textMain};
  

`;

export const RegisterButton = styled.button`
  width: 60px;
  height: 35px;
  color: ${theme.colors.white};
  border-radius: 12px;
  font-weight: 500;
  background-color: ${props => props.onClick ? '#7E9ECC' : '#3181F4'};
  // 지금은 false로 지정되어 있어서 색깔은 고정됨, 나중에 onClick이 true가 되면 색깔이 바뀜
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  margin-right: 0.5rem;
  cursor: pointer;
`;