export interface ModalProps {
    isOpen: boolean;
    onClose: (event?: React.MouseEvent) => void;
    children: React.ReactNode;
    modalTitle: string;
    imageType?: 'SmallModal' | 'Modal' ;
  }

  // imageType을 위한 인터페이스 정의
export interface ModalContentProps {
    imageType?: 'SmallModal' | 'Modal' ;
  }
  
  // show 프로퍼티를 갖는 ModalWrapperProps 인터페이스를 정의
  export interface ModalWrapperProps {
    show: boolean;
  }

  export interface ModalButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }