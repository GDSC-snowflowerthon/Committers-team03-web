import { styled } from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
position: fixed;
top: 0;
background-color: #FFF;
z-index: 999;
`;

export const Overlay = styled.div<{ $show: boolean }>`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(156, 195, 249, 0.5);
display: ${({ $show }) => ($show ? "block" : "none")};
`;

export const MainSection = styled.div<{ $isOpenProps: boolean }>`
top: 0px;
width: 270px;
height: 100vh;
max-height: 932px;
right: -50px;
position: absolute;
display: flex;
border-radius: 0 20px 20px 0;
flex-direction: column;
align-items: center;
background-color: #3181F4;
z-index: 1000;
transform: translateX(${(props) => (props.$isOpenProps ? "0" : "100%")});
visibility: ${(props) => (props.$isOpenProps ? "visible" : "hidden")};
transition: transform 0.5s ease-in-out, visibility 0.5s ease-in-out;
`;

export const MenuItem = styled.div`
    cursor: pointer;
    position: relative; // 밑줄을 정확하게 위치시키기 위해 필요
    padding: 10px;
    padding-bottom: 15px; // 텍스트와 밑줄 사이의 간격 조정
    text-align: center;
    margin-top: 20px;
    margin-left: 20px;
    font-size: 20px;
    &::after {
        content: '';
        position: absolute;
        left: -15px; // 밑줄을 왼쪽으로 더 길게
        right: -10px; // 밑줄을 오른쪽으로 더 길게
        bottom: 5px; // 텍스트 아래 위치 조정
        height: 2px; // 밑줄 두께
        background-color: black; // 밑줄 색상
    }
`;

// 메뉴 아이템 영역
export const MenuList = styled.div`
display: flex;
flex-direction: column;
list-style-type: none;
position: absolute;
margin-top: 130px;
`;