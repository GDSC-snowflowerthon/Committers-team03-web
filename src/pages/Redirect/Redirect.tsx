import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyData } from '@/apis/myHome';
import { MyState } from '@/interfaces/userState';
import { useQuery } from '@tanstack/react-query';

export default function Redirect() {
  const navigate = useNavigate();


  const queryDetails = {
    queryKey: ["myData"],
    queryFn: () => getMyData(),
    retry: 1, // 실패시 재호출 횟수
  };
  
  const queryResult = useQuery<MyState>(queryDetails);

  useEffect(() => {
    if(queryResult?.data?.nickname) {
      const redirectOtherNickname = localStorage.getItem("redirectOtherNickname");
      if (redirectOtherNickname) {
        navigate(`/home/${redirectOtherNickname}`);
      } else {
        navigate(`/home/${queryResult?.data?.nickname}`);
      }
      localStorage.removeItem("redirectOtherNickname");
    }
  }, []);

  return <>Login...</>;
}
