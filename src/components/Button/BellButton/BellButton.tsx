import React from 'react';
import Button from '../Button'; // Adjust the import path as needed
import BellButtonImg from '@/assets/Button/BellButton.png';
import * as S from './style'

export default function BellButton(props) {
    return(
        <S.BellButtonWrapper>
            <Button
                {...props}
                type="button"
                width={40}
                height={40}
                background={BellButtonImg}
                padding={0}
                margin={0}
            />
        </S.BellButtonWrapper>
    )
    
}