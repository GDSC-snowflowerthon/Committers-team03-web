import styled, { css, keyframes } from 'styled-components';
import { ModalContentProps, ModalWrapperProps} from '@/interfaces/modal';
import theme from '@/theme';

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// ModalWrapper 컴포넌트에 ModalWrapperProps 타입을 적용하여 show 프로퍼티를 사용할 수 있도록 했습니다.
export const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => props.modalType === 'SlideUpModal' ? '0' : '100%'};
  height: ${(props) => props.modalType === 'SlideUpModal' ? '0' : '100%'};
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 999;
  background-color: ${(props) => props.modalType !== 'SlideUpModal' ? 'rgba(156, 195, 249, 0.5)' : 'transparent'};
`;


const getModalSize = (
  modalType?: 'SmallModal' | 'Modal' | 'SlideUpModal' ,
) => {
  switch (modalType) {
    case 'SmallModal':
      return {width: '300px', height: '300px', backgroundSize: '300px 300px'};
    case 'Modal':
      return {width: '300px', height: '600px', backgroundSize: '300px 600px'};
    case 'SlideUpModal':
      return {width: '100vw', height: '600px', backgroundSize: '100vw 600px'};
    default:
      return {width: '300px', height: '600px', backgroundSize: '300px 600px'}; // 기본값
  }
};

// 아래에서 위로 올라가는 애니메이션 정의
// 세로 모드용 애니메이션
export const slideUpAnimationPortrait = keyframes`
  from { transform: translate(-50%, 100%); }
  to { transform: translate(-50%, 0%); }
`;

// 가로 모드용 애니메이션
export const slideUpAnimationLandscape = keyframes`
  from { transform: translate(-50%, 100%); }
  to { transform: translate(-50%, -3%); }
`;

export const ModalContent = styled.div<ModalContentProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.modalColor};
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  padding: 15px;
  ${({modalType}) => {
    const {width, height, backgroundSize} = getModalSize(modalType);
    if (modalType === 'SlideUpModal') {
      return css`
        width: ${width};
        height: ${height};
        background-size: ${backgroundSize};
        animation: ${slideUpAnimationPortrait} 0.5s ease-out forwards;
        border-radius: 40px;
        max-width: 430px;
        /* 모바일 기기에서 가로 모드일 때만 애니메이션 적용 */
        @media screen and (max-width: 768px) and (orientation: landscape) {
          animation: ${slideUpAnimationLandscape} 0.5s ease-out forwards;
        }
      `;
    } else {
      return css`
        width: ${width};
        height: ${height};
        background-size: ${backgroundSize};
        border-radius: 20px;
      `;
    }
  }}
  bottom: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.colors.textMain};
  font-size: 20px;
  overflow-y: auto;
`;

export const ModalInnerContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;

`;

export const ModalTitle = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  color: ${theme.colors.textMain};
  font-size: 20px;
  overflow-y: auto;
  white-space: pre;
  overflow: hidden;
`;