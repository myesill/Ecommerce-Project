import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <div>
        <PageContainer>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Product/:id" element={<Detail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </PageContainer>
      </div>
    </>
  );
}

export default App;
