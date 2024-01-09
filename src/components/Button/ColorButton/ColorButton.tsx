import React from 'react';
import { useRecoilState } from 'recoil';
import { Button } from './style';
import { ColorButtonProps } from '@/interfaces/decoration';
import { myState } from '@/atoms/userState';
// 섹션별 컬러 매핑
const bodyColorToNumberMap = {
  1: '#FFFFFF',
  2: '#FFBA7A',
  3: '#A3FF82',
  4: '#1E90FF',
  5: '#FF77F1',
};

const scarfColorToNumberMap = {
  1: '#1E90FF',
  2: '#FF7777',
  3: '#FFBA7A',
  4: '#A3FF82',
  5: '#FF77F1',
};

const hatColorToNumberMap = {
  1: '#1E90FF',
  2: '#FF7777',
  3: '#FFBA7A',
  4: '#A3FF82',
  5: '#FF77F1',
};

export const ColorButton: React.FC<ColorButtonProps> = ({ color, part }) => {
  const [decoration, setDecoration] = useRecoilState(myState);

  let colorNumberMap;
  switch (part) {
    case 'snowId':
      colorNumberMap = bodyColorToNumberMap;
      break;
    case 'decoId':
      colorNumberMap = scarfColorToNumberMap;
      break;
    case 'hatId':
      colorNumberMap = hatColorToNumberMap;
      break;
    default:
      colorNumberMap = {}; // 기본값
  }

  // 현재 선택된 컬러와 매핑된 숫자를 결정합니다.
  const isSelected = colorNumberMap[decoration[part]] === color;

  const handleClick = () => {
    // 상태를 업데이트하고, 서버에 보낼 숫자를 로깅합니다.
    const colorNumber = Object.keys(colorNumberMap).find(key => colorNumberMap[key] === color);
    console.log(`${part} color number for server:`, colorNumber);

    setDecoration({
      ...decoration,
      [part]: colorNumber,
    });
  };
  console.log(`color:${color}`)
  return <Button color={color} isSelected={isSelected} onClick={handleClick} />;
};
