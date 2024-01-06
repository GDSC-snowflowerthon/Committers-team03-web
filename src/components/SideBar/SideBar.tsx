import React, { useMemo } from "react";
import * as S from './style'
import { useNavigate } from "react-router-dom";
import { SideBarProps } from "@/interfaces/sideBar";

const SideBar: React.FC<SideBarProps> = ({ onCloseClick, isOpen }) => {
    const navigate = useNavigate();

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
            </S.MainSection>
        </S.Container>
    );
};

export default SideBar;
