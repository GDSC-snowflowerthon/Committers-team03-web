import {Route, Routes} from 'react-router-dom';
import Home from '@/pages/Home/Home'
import Custom from './pages/Custom/Custom';
import Ranking from './pages/Ranking/Ranking';
import Follow from './pages/Follow/Follow';
import Register from './pages/Register/Register';
export default function Router() {

  return (
    <>
      <Routes>
        <Route path="/:nickname" element={<Home />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/follow" element={<Follow />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
