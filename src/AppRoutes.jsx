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

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id/:slug" element={<SingleBlogPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="app" element={<Dashboard />} />
          <Route path="users" element={<User />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
