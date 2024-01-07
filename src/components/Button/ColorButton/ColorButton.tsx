import React from 'react';
import { useRecoilState } from 'recoil';
import { snowmanDecorationState } from '@/atoms/snowmanDecorationState';
import { Button } from './style';
import { ColorButtonProps } from '@/interfaces/decoration';
// 섹션별 컬러 매핑
const bodyColorToNumberMap = {
  '#FFFFFF': 1,
  '#FFBA7A': 2,
  '#A3FF82': 3,
  '#1E90FF': 4,
  '#FF77F1': 5,
};

const scarfColorToNumberMap = {
  '#1E90FF': 1,
  '#FF7777': 2,
  '#FFBA7A': 3,
  '#A3FF82': 4,
  '#FF77F1': 5,
};

const hatColorToNumberMap = {
  '#1E90FF': 1,
  '#FF7777': 2,
  '#FFBA7A': 3,
  '#A3FF82': 4,
  '#FF77F1': 5,
};

export const ColorButton: React.FC<ColorButtonProps> = ({ color, part }) => {
  const [decoration, setDecoration] = useRecoilState(snowmanDecorationState);

  // 현재 선택된 컬러와 매핑된 숫자를 결정합니다.
  const isSelected = decoration[part].color === color;
  const colorNumberMap = part === 'body' ? bodyColorToNumberMap
                       : part === 'scarf' ? scarfColorToNumberMap
                       : hatColorToNumberMap;

  const handleClick = () => {
    // 상태를 업데이트하고, 서버에 보낼 숫자를 로깅합니다.
    const colorNumber = colorNumberMap[color];
    console.log(`${part} color number for server:`, colorNumber);

    setDecoration({
      ...decoration,
      [part]: { color: color, number: colorNumber },
    });
  };

  return <Button color={color} isSelected={isSelected} onClick={handleClick} />;
};
