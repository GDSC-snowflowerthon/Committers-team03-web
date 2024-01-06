import React from 'react';
import Button from '../Button'; // Adjust the import path as needed
import HamburgerButtonImg from '@/assets/Button/HamburgerButton.png';
import * as S from './style'
import {HamburgerButtonProps} from "@/interfaces/button"


export default function HamburgerButton(props: HamburgerButtonProps) {
    return(
        <S.HamburgerButtonWrapper>
            <Button
                {...props}
                type="button"
                width={40}
                height={40}
                background={HamburgerButtonImg}
            />
        </S.HamburgerButtonWrapper>
    )
}