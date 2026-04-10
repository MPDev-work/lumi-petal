import { HashRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './page/IndexPage.jsx';
import Explore from './page/Explore.jsx';
import Brand from './page/Brand.jsx';
import FreeDelivery from './page/FreeDelivery.jsx';
import Categroy from './page/Categroy.jsx';
import Bag from './page/Bag.jsx';
import Notification from './page/NotificationPage.jsx';
import PhkaMainPage from './page/PkhaMainPage.jsx';
import ShopAll from './page/ShopAll.jsx';
import Skin1004MainPage from './page/Skin1004MainPage.jsx';
import WeyoungMainPage from './page/WeyoungMainPage.jsx';
import Navbar from './components/Navbar.jsx';
import FooterBar from './components/FooterBar.jsx';
import Ads from './components/Ads.jsx';
import NewNavBar from './components/NewNavBar.jsx';

function App() {
  return (
    <HashRouter>
      <Navbar />
      {/* <Ads /> */}
      <Routes>
        {/* Changed path from "/index" to "/" to make it the landing page */}
        <Route path="/" element={<IndexPage />} />

        <Route path="/category" element={<Categroy />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/freeDelivery" element={<FreeDelivery />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/phka" element={<PhkaMainPage />} />
        <Route path="/shopAll" element={<ShopAll />} />
        <Route path="/skin1004" element={<Skin1004MainPage />} />
        <Route path="/weyoung" element={<WeyoungMainPage />} />
      </Routes>
      <FooterBar />
    </HashRouter>
  );
}

export default App;
