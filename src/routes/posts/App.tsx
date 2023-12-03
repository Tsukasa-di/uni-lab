import { Outlet } from "react-router";

const Posts: React.FC = () => {
  console.log('Call Posts.');

  return <>
    <h2>Posts</h2>
    <Outlet />
  </>
}

export default Posts;
