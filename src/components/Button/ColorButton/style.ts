import styled, { css } from 'styled-components';

export const Button = styled.button<{ color: string; isSelected: boolean }>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: ${(props) => (props.isSelected ? '4px solid #3181F4' : '4px solid #CCF3FF')};
  cursor: pointer;
  margin: 10px;

  // 선택된 버튼의 border 색을 변경합니다.
  ${(props) =>
    props.isSelected &&
    css`
      border-color: #3181F4; // 선택된 경우 검은색 border를 사용합니다.
    `}
`;
