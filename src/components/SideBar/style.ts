import { styled } from "styled-components";
import theme from '@/theme';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
position: fixed;
top: 0;
background-color: #FFF;
z-index: 9999;
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
right: 0px;
position: absolute;
display: flex;
border-radius: 40px 0 0 40px;
flex-direction: column;
align-items: center;
background-color: #3499FE;
z-index: 1000;
transform: translateX(${(props) => (props.$isOpenProps ? "80%" : "200%")});
visibility: ${(props) => (props.$isOpenProps ? "visible" : "hidden")};
transition: transform 0.5s ease-in-out, visibility 0.5s ease-in-out;
`;

export const NicknameWrapper = styled.div`
    cursor: pointer;
    position: relative; // 밑줄을 정확하게 위치시키기 위해 필요
    padding-bottom: 15px; // 텍스트와 밑줄 사이의 간격 조정
    margin-top: 40px;
    font-size: 24px;
    color: ${theme.colors.white};
    font-weight: 400;
    white-space: pre-line;
    line-height: 1.5;
    width: 200px;
`;

export const MenuItem = styled.div`
    cursor: pointer;
    position: relative; // 밑줄을 정확하게 위치시키기 위해 필요
    padding-bottom: 15px; // 텍스트와 밑줄 사이의 간격 조정
    margin-top: 50px;
    margin-left: -30px;
    font-size: 24px;
    color: ${theme.colors.white};
    font-weight: 400;
    white-space: pre-line;
    line-height: 1.3;
`;

// 메뉴 아이템 영역
export const MenuList = styled.div`
display: flex;
flex-direction: column;
list-style-type: none;
position: absolute;
margin-top: 160px;
`;

