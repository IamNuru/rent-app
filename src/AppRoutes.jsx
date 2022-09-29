import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import SingleBlogPost from './pages/blog/components/SingleBlogPost'


const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/blog" element={<Blog />} /> 
            <Route path="/post/:id/:slug" element={<SingleBlogPost />} /> 
        </Routes>
    )
}

export default AppRoutes;