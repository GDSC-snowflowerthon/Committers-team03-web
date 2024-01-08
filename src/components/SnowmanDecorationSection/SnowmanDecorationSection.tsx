import React from 'react';
import { ColorButton } from '../Button/ColorButton/ColorButton';
import * as S from './style'; // 스타일 파일에서 SectionTitle 컴포넌트를 가져옵니다.

// 각 섹션별 컬러 배열
const bodyColors = ['#FFFFFF', '#FFBA7A', '#A3FF82', '#1E90FF', '#FF77F1'];
const scarfColors = ['#1E90FF', '#FF7777', '#FFBA7A', '#A3FF82', '#FF77F1'];
const hatColors = ['#1E90FF', '#FF7777', '#FFBA7A', '#A3FF82', '#FF77F1'];

export const SnowmanDecorationSection: React.FC = () => {
    return (
        <S.Container>
            <S.SectionTitle>눈덩이 꾸미기</S.SectionTitle>
            <S.ColorSection>
            {bodyColors.map((color) => (
                <ColorButton key={color} color={color} part="body" />
            ))}
            </S.ColorSection>
    
            <S.SectionTitle>목도리 꾸미기</S.SectionTitle>
            <S.ColorSection>
            {scarfColors.map((color) => (
                <ColorButton key={color} color={color} part="scarf" />
            ))}
            </S.ColorSection>
    
            <S.SectionTitle>모자 꾸미기</S.SectionTitle>
            <S.ColorSection>
            {hatColors.map((color) => (
                <ColorButton key={color} color={color} part="hat" />
            ))}
            </S.ColorSection>
        </S.Container>
    );
};