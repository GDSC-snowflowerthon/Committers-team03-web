export interface SnowmanSceneProps {
    height?: string; // height prop은 선택적이며, 문자열 타입입니다.
  }

  // Snowman 컴포넌트에 전달할 props 타입을 정의합니다.
export interface SnowmanProps {
    yPosition?: number; // yPosition은 숫자 타입입니다.
  }


export interface SnowmanCustomId {
  snowId: number; // 눈 아이템 ID
  hatId: number; // 모자 아이템 ID
  decoId: number; // 장식 아이템 ID
}