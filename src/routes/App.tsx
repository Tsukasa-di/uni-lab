import Home from "./home/App";
import About from "./about/App";
import Posts from "./posts/App";
import Post from "./post/App";
import ErrorPage from "./errorPage/App"
import { Route, Routes, NavLink } from "react-router-dom";
import PostIndex from "./posts/PostIndex";
import Search from "./search/App";

const App: React.FC = () => {
  const linkActive = ( {isActive}: {isActive: boolean} ) => isActive ? {color: 'blue'} : undefined;
  
  return (
    <>
      <nav>
        <NavLink to="/" style={linkActive}>Home</NavLink>
        <NavLink to="/about" style={linkActive}>About</NavLink>
        <NavLink to="/search" style={linkActive}>Search</NavLink>
        <NavLink to="/posts" style={linkActive}>Posts</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostIndex />} />
          <Route path=":postId" element={<Post />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
