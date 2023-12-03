import { NavLink, useLoaderData } from "react-router-dom";
import { type Posts } from "../../types/posts";

export async function loader() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const posts = await response.json()
  return posts
}

const PostIndex: React.FC = () => {
  const posts = useLoaderData() as Posts

  return <>
    <ul>
      {posts.map( post => {
        return (
          <li key={`post id-${String(post.id)}`}>
            <NavLink to={`/posts/${post.id}`}>
              {String(post.id)}
            </NavLink>
          </li>
        )
      })}
    </ul>
  </>
}

export default PostIndex;
