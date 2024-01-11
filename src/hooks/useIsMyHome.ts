import {useParams} from 'react-router-dom';
import {useRecoilValue} from 'recoil';
import { myState } from '../atoms/userState';

export default function useIsMyHome() {
  const {urlNickname} = useParams(); // 누구의 홈인지? url상의 닉네임
  const {nickname} = useRecoilValue(myState); // 자신의 닉네임
  const isMyHome = (urlNickname) === nickname; // 지금 위치가 나의 홈인지?
  return {urlNickname, nickname, isMyHome};
}
