export interface ModalProps {
    isOpen: boolean;
    onClose: (event?: React.MouseEvent) => void;
    children: React.ReactNode;
    modalTitle: string;
    modalType?: 'SmallModal' | 'Modal' | 'CustomModal' | 'RankingModal'; // Add 'SlideUpModal' or other modal types as needed
    modalColor?: string;
  }

  export interface ModalContentProps extends Partial<ModalProps> {
  }

  
  // show 프로퍼티를 갖는 ModalWrapperProps 인터페이스를 정의
  export interface ModalWrapperProps {
    show: boolean;
    modalType?: 'SmallModal' | 'Modal' | 'CustomModal' | 'RankingModal'; // Add 'SlideUpModal' or other modal types as needed
  }

  export interface ModalButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }