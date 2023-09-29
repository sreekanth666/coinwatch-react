import './App.css';
import Banner from './Components/Banner';
import CryptoSearch from './Components/CryptoSearch';
import Navbar from './Components/Navbar';
import PopularCrypto from './Components/PopularCrypto';
import Footer from './Components/FooterSection.jsx';
import requests from './request'

function App() {
  return (
    <div>
      <Navbar />
      <Banner fetchDetailsBanner = {requests.fetch4ForBanner} />
      <PopularCrypto fetchPopular = {requests.fetch24hrChange} />
      <CryptoSearch />
      <Footer />
    </div>
  );
}

export default App;
