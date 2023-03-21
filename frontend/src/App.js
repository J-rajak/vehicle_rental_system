import { BrowserRouter, Routes, Route } from "react-router-dom"

// components
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

// user components
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

// Publicly available pages
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrderPage from "./pages/user/UserOrderPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import ScrollToTop from "./utils/ScrollToTop";


function App() {
  return (

    <BrowserRouter>
    <ScrollToTop />
      <HeaderComponent />
      <Routes>

        <Route element={<RoutesWithUserChatComponent />}>

          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element="page not exists 404" />
        </Route>

          {/*user protected routes */}
          <Route element={<ProtectedRoutesComponent admin={false} />}>
            <Route path="/user" element={<UserProfilePage />} />
            <Route path="/user/my-orders" element={<UserOrderPage />} />
            <Route path="/user/order-details" element={<UserOrderDetailsPage />} />
            <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          </Route>



        {/* admin protected routes: */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/order-details" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/edit-users" element={<AdminEditUserPage />} />
          <Route path="/admin/edit-product" element={<AdminEditProductPage />} />
          <Route path="/admin/create-new-product" element={<AdminCreateProductPage />} />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
        </Route>


      </Routes>

      <FooterComponent />
    </BrowserRouter>

  );
}

export default App;
