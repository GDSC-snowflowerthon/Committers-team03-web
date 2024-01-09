import styled from 'styled-components';
export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  max-height: 932px;
  min-height: 850px;
  //overflow-y: hidden;
  overflow-x: hidden;
  font-family: 'Pretendard';
`;

export const Wrapper = styled.div`
  max-width: 430px;
  max-height: 932px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Pretendard';
  position: relative;
`;