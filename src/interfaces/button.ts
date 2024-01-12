export interface ButtonProps {
    //onClick?(): void;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    route?: string;
    children?: React.ReactNode;
    width: number;
    height: number;
    margin?: string;
    padding?: string;
    background?: string;
    disabled?: boolean;
    dark?: boolean;
    type?: string;
    socialType?: string;
    backgroundColor?: string;
    borderRadius?: string;
  }
  
  export interface HamburgerButtonProps extends Partial<ButtonProps> {
  }

  export interface BellButtonProps extends Partial<ButtonProps> {
  }

  export interface HomeButtonProps extends Partial<ButtonProps> {
  }

  export interface LogoutButtonProps extends Partial<ButtonProps> {
  }

  export interface CustomCompleteButtonProps extends Partial<ButtonProps> {
  }
  export interface GithubButtonProps extends Partial<ButtonProps>{
  }