import { NavLink, useLoaderData } from "react-router-dom";
import { type Post } from "../../types/posts";

export async function loader({params}: {params: any}) {
  console.log(params)
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  )
  if (!response.ok) throw Error('This Page is Not Found.')
  const post = await response.json()
  return post
}

const Post: React.FC = () => {
  console.log('Call Single Post.')
  const post = useLoaderData() as Post

  return <>
    <h2>Single Post {post.id}</h2>
    <p>ID: {post.id}</p>
    <p>TITLE: {post.title}</p>
    <p>BODY: {post.body}</p>
    <NavLink to="/posts">
      一覧へ戻る
    </NavLink>
  </>
}

export default Post;
