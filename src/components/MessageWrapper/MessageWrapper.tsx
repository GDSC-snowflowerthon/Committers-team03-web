import { attackMessagesProps } from '@/interfaces/attack';
import * as S from './style'

export default function MessageWrapper({ newAttack, nickname, time }: attackMessagesProps) {

  return (
    <S.StatusContainer newAttack={newAttack}>
      <div>
        <div>{`[${time}]`}</div>
        <div>{nickname}님께 공격을 받았습니다!</div>
      </div>
    </S.StatusContainer>
  );
}
