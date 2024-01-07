import styled from 'styled-components';

export const ColorSelectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5개의 컬럼으로 구성된 그리드
  grid-gap: 10px; // 그리드 갭
`;

export const SectionTitle = styled.div`
  color: #4F5861;
  font-family: Pretendard, sans-serif; // 폰트가 로컬에 없을 경우 sans-serif를 대체 폰트로 사용합니다.
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 5px;
`;

export const ColorSection = styled.div`
    margin-bottom: 10px;

`;

export const Container = styled.div`
    top: 70px;
    position: absolute;
`;