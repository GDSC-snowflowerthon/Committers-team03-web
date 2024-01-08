import {Route, Routes} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from '@/pages/Home/Home'
import Custom from './pages/Custom/Custom';
import Ranking from './pages/Ranking/Ranking';
import Follow from './pages/Follow/Follow';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { GlobalStyle } from './style';
import { useBackgroundTheme } from './hooks/useBackgroundTheme';

export default function Router() {
  const backgroundColor = useBackgroundTheme();

  return (
    <>
      <ScrollToTop />
      <GlobalStyle backgroundColor={backgroundColor} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/:nickname" element={<Home />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/follow" element={<Follow />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
