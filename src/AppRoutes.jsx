import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Properties from "./pages/properties/Properties";
import SingleBlogPost from "./pages/blog/components/SingleBlogPost";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container } from "@mui/material";
const AppRoutes = () => {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id/:slug" element={<SingleBlogPost />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
