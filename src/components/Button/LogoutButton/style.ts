import theme from '@/theme';
import styled from 'styled-components';

export const LogoutButtonWrapper = styled.div`
    background-size: 120px 44px;
    background-repeat: no-repeat;
    background-size: contain;
    width: 120px;  // 버튼 크기 조정
    height: 44px; // 버튼 크기 조정
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: 25px;    // 상단에서의 위치
    right: 40px;   // 좌측에서의 위치
    z-index: 2;
    background-color: transparent;
`;

// 메뉴 아이템 영역
export const ButtonText = styled.div`
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${theme.colors.white};
`;