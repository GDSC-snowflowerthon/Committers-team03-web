import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 최상단으로 스크롤을 이동시킬 경로 목록
    const topScrollRoutes = ['/', '/custom', '/ranking', '/follow', '/register'];

    if (topScrollRoutes.includes(pathname)) {
      // 지정된 경로 중 하나일 경우, 페이지 최상단으로 스크롤
      window.scrollTo(0, 0);
    } else {
      // 그 외의 경우, 페이지 최하단으로 스크롤
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [pathname]);

  return null;
}
