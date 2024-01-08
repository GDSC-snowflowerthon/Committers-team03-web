import styled from 'styled-components';

export const Wrapper = styled.div`
 margin-top: 3rem;
  max-width: 440px;
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
    background-color: #ffffff;
    border-radius: 50%;
    margin-top: 2rem;
`;

export const ProfileName = styled.div`
    font-size: 14px;
    margin-top: 1rem;
    margin-right: 0.5rem;
`;

export const ProfileRank = styled.div`
    font-size: 14px;
    margin-top: 1rem;
   
`;

export const Container = styled.div`
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;