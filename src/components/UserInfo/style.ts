import theme from '@/theme';
import { styled } from 'styled-components';

export const Container = styled.div`
    position: absolute;
    width: 160px;
    height: 132px;
    background-size: 160px 132px;
    top: 35px;
    left: 20px;
    z-index: 2;
`;

export const WhiteWrapper = styled.div`
    width: 160px;
    height: 30px;
    background-size: 160px 30px;
    align-items: center;
    text-align: center;
    background: #FFFFFF;
    border-radius: 12px;
    font-size: 16px;
    margin-bottom: 4px;
    line-height: 1.8;
    font-weight: 400;
    color: ${theme.colors.textMain};
`;

export const ButtonRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  height: 30px;
  margin: 0 auto; 
`;