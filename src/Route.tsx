import Home from "./routes/home/App";
import About from "./routes/about/App";
import Posts from "./routes/posts/App";
import Post from "./routes/post/App";
import Nomatch from "./routes/nomatch/App";
import { Route, Routes, NavLink } from "react-router-dom";
import PostIndex from "./routes/posts/PostIndex";
import Search from "./routes/search/App";

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
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </>
  )
}

export default App
