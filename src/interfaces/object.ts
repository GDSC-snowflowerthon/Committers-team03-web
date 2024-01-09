export interface AnimatedObjectsProps {
    backgroundImageUrl: string;
  }

  // AnimatedObjectsProps 인터페이스 정의
export interface AnimatedObjectsProps {
  backgroundImageUrl: string;
  topPosition?: number;
}

// Background 스타일 컴포넌트에도 타입을 정의
export interface BackgroundProps {
  height: number;
}