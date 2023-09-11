import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContextProvider from "./contexts/ContextProvider";
<<<<<<< HEAD
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
=======
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";
import Cart from "./pages/Cart";
import Layout from "./layout/Layout";
import ProductDetail from "./components/Product/ProductDetail";
import Error404 from "./pages/Error404";
>>>>>>> FE

function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<ProductList />}></Route>
          <Route path="/product" element={<ProductDetail/>}></Route>
=======
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<Error404 />} />
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:productName" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-tracking" element={<OrderTracking />} />
          </Route>
>>>>>>> FE
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
