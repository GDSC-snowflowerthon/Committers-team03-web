import { attackMessagesProps } from '@/interfaces/attack';
import * as S from './style'

export default function MessageWrapper({ newAttack, nickname, time }: attackMessagesProps) {

  return (
    <S.StatusContainer newAttack={newAttack}>
      <S.TextWrapper>
        <S.TextLine>{`[${time}]`}</S.TextLine>
        <S.TextLine>{nickname}님께 공격을 받았습니다!</S.TextLine>
      </S.TextWrapper>
    </S.StatusContainer>
  );
}
