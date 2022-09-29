import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import SingleBlogPost from "./pages/blog/components/SingleBlogPost";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container } from "@mui/material";
const AppRoutes = () => {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Container disableGutters={!isMediumScreen}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id/:slug" element={<SingleBlogPost />} />
      </Routes>
    </Container>
  );
};

export default AppRoutes;
