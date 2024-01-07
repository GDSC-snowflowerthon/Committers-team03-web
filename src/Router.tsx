import {Route, Routes} from 'react-router-dom';
import Home from '@/pages/Home/Home'
import Custom from './pages/Custom/Custom';
export default function Router() {
 
  return (
    <>
      <Routes>
        <Route path="/:nickname" element={<Home />} />
        <Route path="/custom" element={<Custom />} />
      </Routes>
    </>
  );
}
