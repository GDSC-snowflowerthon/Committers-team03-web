import {Route, Routes} from 'react-router-dom';
import Home from '@/pages/Home/Home'
import Custom from './pages/Custom/Custom';
import Ranking from './pages/Ranking/Ranking';
import Follow from './pages/Follow/Follow';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
export default function Router() {

  return (
    <>
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
