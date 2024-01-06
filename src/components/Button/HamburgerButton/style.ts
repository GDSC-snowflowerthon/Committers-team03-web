import styled from 'styled-components';

export const HamburgerButtonWrapper = styled.div`
    background-size: 40px 40px;
    background-repeat: no-repeat;
    background-size: contain;
    width: 40px;  // 버튼 크기 조정
    height: 40px; // 버튼 크기 조정
    border: none;
    cursor: pointer;
    position: absolute;
    top: 25px;    // 상단에서의 위치
    right: 25px;   // 좌측에서의 위치
    z-index: 2;
    background-color: transparent;
`;