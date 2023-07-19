import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderHistory from "./pages/OrderHistory";
import BackPage from "./pages/BackPage";
import OrderDetail from "./pages/OrderDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderHistory />} />
        <Route path="/backPage" element={<BackPage />} />
        <Route path="/orderDetail/:id" element={<OrderDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
