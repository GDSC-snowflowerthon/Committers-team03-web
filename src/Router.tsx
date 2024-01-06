import {Route, Routes} from 'react-router-dom';
import Home from '@/pages/Home/Home'
export default function Router() {
 
  return (
    <>
      <Routes>
        <Route path="/:nickname" element={<Home />} />
      </Routes>
    </>
  );
}
