import { Route, Routes } from "react-router-dom";
import LoginView from "./pages/auth/LoginView";
import HomeView from "./pages/store/HomeView";
import RegisterView from "./pages/auth/RegisterView";
import ProductDetailView from "./pages/store/ProductDetailView";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<HomeView />} />
      <Route path={"/product"} element={<ProductDetailView />} />
      <Route path={"/login"} element={<LoginView />} />
      <Route path={"/signup"} element={<RegisterView />} />
    </Routes>
  );
}

export default App;
