import styled from 'styled-components';

export const SnowmanContainer = styled.div`
    position: absolute;
    width: 200px;
    height: 400px;
    top: -10px; /* 또는 적절한 값으로 조정 */

    @media (min-height: 800px) {
        /* 세로 길이가 800px 이상인 화면에 대한 스타일 */
        top: 0px; /* 또는 적절한 값으로 조정 */
    }

    /* 필요하다면 더 많은 미디어 쿼리를 추가할 수 있습니다. */
`;
