import styled from 'styled-components';
import { newAttackProps } from '@/interfaces/attack';
import theme from '@/theme';

export const StatusContainer = styled.div<newAttackProps>`
  width: 260px;
  height: 104px;
  border-radius: 20px;
  background: ${(props) => (props.newAttack ? '#90C9F6' : '#FFFFFF')};
  background-size: 260px 104px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px; // Adjust padding as needed
  box-sizing: border-box;
  font-size: 16px; // Adjust font size as needed
  color: ${theme.colors.textMain};
  text-align: center;
  margin-bottom: 10px;
`;