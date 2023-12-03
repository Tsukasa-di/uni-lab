import { NavLink, Outlet } from "react-router-dom";

const Root: React.FC = () => {
  const linkActive = ( {isActive}: {isActive: boolean} ) => isActive ? {color: 'blue'} : undefined;

  return (
    <>
      <ul>
        <li>
          <NavLink to="/" style={linkActive}>Home</NavLink>
          <NavLink to="/about" style={linkActive}>About</NavLink>
          <NavLink to="/posts" style={linkActive}>Posts</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  )
}

export default Root
