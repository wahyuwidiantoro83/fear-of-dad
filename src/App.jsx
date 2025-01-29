import { Route, Routes } from "react-router-dom";
import LoginView from "./pages/auth/LoginView";
import HomeView from "./pages/store/HomeView";
import RegisterView from "./pages/auth/RegisterView";
import ProductDetailView from "./pages/store/ProductDetailView";
import CartView from "./pages/store/CartView";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<HomeView />} />
      <Route path={"/product"} element={<ProductDetailView />} />
      <Route path={"/auth/login"} element={<LoginView />} />
      <Route path={"/auth/register"} element={<RegisterView />} />
      <Route path={"/cart"} element={<CartView />} />
    </Routes>
  );
}

export default App;
