import theme from '@/theme';
import styled from 'styled-components';

export const CustomCompleteButtonWrapper = styled.div`
    background-size: 60px 38px;
    background-repeat: no-repeat;
    background-size: contain;
    width: 60px;  // 버튼 크기 조정
    height: 38px; // 버튼 크기 조정
    border: none;
    cursor: pointer;
    position: absolute;
    top: 22px;    // 상단에서의 위치
    right: 36px;   // 좌측에서의 위치
    z-index: 2;
    background-color: transparent;
`;

export const ButtonText = styled.div`
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${theme.colors.white};
`;