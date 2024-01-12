import styled, { keyframes } from 'styled-components';
import theme from '@/theme';
export const Wrapper = styled.div`
 margin-top: 2rem;
  max-width: 430px;
  max-height: 932px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Pretendard';
  position: relative;
`;

export const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
`;

export const ProfileName = styled.div`
    font-size: 14px;
    margin-top: 1rem;
    margin-right: 0.5rem;
    color: ${theme.colors.textMain};
    position: absolute;
`;

export const ProfileRank = styled.div`
    font-size: 14px;
    margin-top: 1rem;
    color: ${theme.colors.textMain};
    position: absolute;
    width: 300px;
    text-align: center;
`;

export const Container = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

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