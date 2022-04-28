import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import ListHotel from './components/ListHotel/ListHotel';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div className="wrapper_all">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/listHotel" element={<ListHotel />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}



export default App;
