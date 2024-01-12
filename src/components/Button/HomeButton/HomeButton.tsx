import React from 'react';
import Button from '../Button'; // Adjust the import path as needed
import HomeButtonImg from '@/assets/Button/HomeButton.png';
import * as S from './style'
import {HomeButtonProps} from "@/interfaces/button"


export default function HomeButton(props: HomeButtonProps) {
    return(
        <S.HomeButtonWrapper>
            <Button
                {...props}
                type="button"
                width={30}
                height={30}
                background={HomeButtonImg}
            />
        </S.HomeButtonWrapper>
    )
}