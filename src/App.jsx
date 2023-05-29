
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";

import "./reset.css";
import "./common.css";
import Splide from "./components/splide/SplideSlider";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list/:id" element={<ListPage />} />
        {/* <Route path="/components/Header/Splide.jsx" element={<Splide/>}/> */}
      </Routes>
      
    </div>
  );
};



export default App;
