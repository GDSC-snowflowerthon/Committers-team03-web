import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { myState } from '../atoms/userState';

const useIsMyHome = () => {
  const { nickname: urlNickname } = useParams<{ nickname: string }>();
  const user = useRecoilValue(myState);

  // 현재 사용자의 nickname과 URL의 nickname이 같으면 내 홈, 다르면 다른 사람의 홈
  return user.nickname === urlNickname; //true이면 내 홈, false이면 다른 사람의 홈
};

export default useIsMyHome;
