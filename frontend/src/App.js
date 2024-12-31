import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import RegisterPage from './pages/RegisterPage';

//protected user pages
import UserCartDetailsPage from './pages/user/UserCartDetailsPage';
import UserOrderDetailsPage from './pages/user/UserOrderDetailsPage';
import UserOrdersPage from './pages/user/UserOrdersPage';
import UserProfilePage from './pages/user/UserProfilePage';
import ProtectedRoutesComponent from './components/ProtectedRoutesComponent';
import RouteWithUserComponent from './components/user/RouteWithUserComponent';

//protected admin pages
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage';
import AdminChatsPage from './pages/admin/AdminChatsPage';
import AdminCreateProductPage from './pages/admin/AdminCreateProductPage';
import AdminEditProductPage from './pages/admin/AdminEditProductPage';
import AdminEditUserPage from './pages/admin/AdminEditUserPage';
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminUsersPage from './pages/admin/AdminUsersPage';

//
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ScrollToTop from "./utils/ScrollToTop";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route element={<RouteWithUserComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/productlist" element={<ProductListPage />} />
          <Route path="/productlist/:pageNumParam" element={<ProductListPage />} />
          <Route path="/productdetails/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element="Page not exist 404" />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* user pages */}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="user" element={<UserProfilePage />} />
          <Route path="user/myorder" element={<UserOrdersPage />} />
          <Route path="user/cartdetails" element={<UserCartDetailsPage />} />
          <Route path="user/orderdetails/:id" element={<UserOrderDetailsPage />} />
        </Route>

        {/* admin pages */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="admin/users" element={<AdminUsersPage />} />
          <Route path="admin/analytics" element={<AdminAnalyticsPage />} />
          <Route path="admin/createproduct" element={<AdminCreateProductPage />} />
          <Route path="admin/edit-product/:id" element={<AdminEditProductPage />} />
          <Route path="admin/edituser" element={<AdminEditUserPage />} />
          <Route path="admin/chats" element={<AdminChatsPage />} />
          <Route path="admin/orderdetails/:id" element={<AdminOrderDetailsPage />} />
          <Route path="admin/orders" element={<AdminOrdersPage />} />
          <Route path="admin/products" element={<AdminProductsPage />} />
        </Route>


      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
