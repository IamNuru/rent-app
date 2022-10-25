import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Properties from "./pages/properties/Properties";
import SingleBlogPost from "./pages/blog/components/SingleBlogPost";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import Page404 from "./pages/Page404";
import DashboardLayout from "./layouts/dashboard";
import Dashboard from "./pages/dashboard/Dashboard";
import User from "./pages/dashboard/User";
import DashboardPosts from './pages/dashboard/Blog';
import AppLayout from "./layouts/app";
import PropertiesList from "./pages/dashboard/PropertiesList";
import ContactUs from "./pages/ContactUs";
import SingleProperty from "./pages/properties/components/SearchProperties"

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/post/:id/:slug" element={<SingleBlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/property/:id/:slug" element={<SingleProperty />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="app" element={<Dashboard />} />
          <Route path="users" element={<User />} />
          <Route path="properties" element={<PropertiesList />} />
          <Route path="posts" element={<DashboardPosts />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
