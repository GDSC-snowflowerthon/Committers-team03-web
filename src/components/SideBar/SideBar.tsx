import React, { useMemo } from "react";
import * as S from './style'
import { useNavigate } from "react-router-dom";
import { SideBarProps } from "@/interfaces/sideBar";
import LogoutButton from "../Button/LogoutButton/LogoutButton";

const SideBar: React.FC<SideBarProps> = ({ onCloseClick, isOpen }) => {
    const navigate = useNavigate();
    const dummyName = 'minseong0324'; //TODO: 서버에서 데이터 받은 걸로 바뀌야함. home에서 props로

    const handleMenuClick = (path: string) => {
        navigate(path);
        onCloseClick();
    };

    const menuItems = useMemo(
        () => [
            { menuName: "랭킹", path: "/ranking" },
            { menuName: "친구추가", path: "/follow" },
            { menuName: "눈사람 꾸미기", path: "/custom" },
            { menuName: "학교 등록", path: "/register" },
        ],
        []
    );


    return (
        <S.Container>
            {isOpen && (
                <S.Overlay $show={isOpen} onClick={onCloseClick} />
            )}            
            <S.MainSection $isOpenProps={isOpen}>
                <S.NicknameWrapper>
                    {`안녕하세요 :) \n ${dummyName} 님`}
                </S.NicknameWrapper>
                <S.MenuList>
                    {menuItems.map((menu) => (
                        <S.MenuItem
                            key={menu.path}
                            onClick={() => handleMenuClick(menu.path)}
                        >
                            {menu.menuName}
                        </S.MenuItem>
                    ))}
                </S.MenuList>
                <LogoutButton />
            </S.MainSection>
        </S.Container>
    );
};

export default SideBar;
