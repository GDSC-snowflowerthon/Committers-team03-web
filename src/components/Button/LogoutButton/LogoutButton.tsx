import React from 'react';
import Button from '../Button'; // Adjust the import path as needed
import * as S from './style'
import {LogoutButtonProps} from "@/interfaces/button"
import { useNavigate } from 'react-router-dom';

export default function LogoutButton(props: LogoutButtonProps) {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/")
    }
    return(
        <S.LogoutButtonWrapper>
            <Button
                {...props}
                type="button"
                width={120}
                height={44}
                backgroundColor={`#3181F4`}
                borderRadius={`12px`}
                onClick={() => handleLogout()}
            >
                <S.ButtonText>Logout</S.ButtonText>
            </Button>
        </S.LogoutButtonWrapper>
    )
    
}