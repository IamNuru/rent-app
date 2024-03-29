import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Properties from "./pages/properties/Properties";
import SingleBlogPost from "./pages/blog/components/SingleBlogPost";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import Page404 from "./pages/erro-pages/Page404";
import DashboardLayout from "./layouts/dashboard";
import Dashboard from "./pages/dashboard/Dashboard";
import User from "./pages/dashboard/User";
import DashboardPosts from './pages/dashboard/Blog';
import AppLayout from "./layouts/app";
import PropertiesList from "./pages/dashboard/PropertiesList";
import ContactUs from "./pages/ContactUs";
import SingleProperty from "./pages/properties/components/SingleProperty";
import Notifications from "./pages/auth/Notifications";
import Messages from "./pages/auth/Messages";
import Tenant from "./pages/dashboard/Tenants";
import MakeRequest from './pages/request/MakeRequest'
import Profile from "./pages/profile/Profile";
import Requests from "./pages/request/Requests";
import PrivateRoute from "./components/routes/PrivateRoute";
import CreatePost from "./pages/dashboard/CreatePost";
import AddProperty from "./pages/dashboard/AddProperty";
import SingleRequest from "./pages/request/SingleRequest";
import ChatBox from "./pages/chat/ChatBox";
import EditProperty from "./pages/dashboard/EditProperty";
import AddTenant from "./pages/dashboard/AddTenant";
import EditTenant from "./pages/dashboard/EditTenant";
import EditPost from "./pages/dashboard/EditPost";
import Page403 from "./pages/erro-pages/Page403";
import RoleBasedRoutes from "./components/routes/RoleBasedRoutes";
import SearchPage from "./pages/SearchPage";
import CreatePropertyCategory from "./pages/dashboard/CreatePropertyCategory";

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
          <Route path="/request/:id/:slug" element={<SingleRequest />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/property/:id/:slug" element={<SingleProperty />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/search" element={<SearchPage />} />

          <Route element={<PrivateRoute />} >
            <Route path="/chat/:id" element={<ChatBox />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/make-request" element={<MakeRequest />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
        {/* protected Routes */}
        <Route element={<PrivateRoute />} >

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route element={<RoleBasedRoutes allowedRoles={['admin', 'owner']} />}>
              <Route path="tenants" element={<Tenant />} />
              <Route path="properties" element={<PropertiesList />} />
              <Route path="add-property" element={<AddProperty />} />
              <Route path="edit-property/:id" element={<EditProperty />} />
              <Route path="add-tenant" element={<AddTenant />} />
              <Route path="edit-tenant/:id" element={<EditTenant />} />
              <Route path="edit-post/:id/:slug" element={<EditPost />} />
              <Route path="add-category" element={<CreatePropertyCategory />} />
            </Route>
            <Route path="" element={<Dashboard />} />
            <Route path="app" element={<Dashboard />} />
            <Route path="users" element={<User />} />
            <Route path="posts" element={<DashboardPosts />} />
            <Route path="create-post" element={<CreatePost />} />
          </Route>
        </Route>



        <Route element={<AppLayout />}>
          <Route path="/not-allowed" element={<Page403 />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
