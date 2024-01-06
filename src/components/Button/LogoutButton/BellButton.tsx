import React from 'react';
import Button from '../Button'; // Adjust the import path as needed
import BellButtonImg from '@/assets/Button/BellButton.png';
import * as S from './style'
import {BellButtonProps} from "@/interfaces/button"

export default function BellButton(props: BellButtonProps) {
    return(
        <S.BellButtonWrapper>
            <Button
                {...props}
                type="button"
                width={40}
                height={40}
                background={BellButtonImg}
            />
        </S.BellButtonWrapper>
    )
    
}