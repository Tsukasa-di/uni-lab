import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const Post: React.FC = () => {
  console.log('Call Single Post.');
  const { postId } = useParams<{ postId: string }>();

  return <>
    <h2>Single Post {postId}</h2>
    <NavLink to="/posts">
      一覧へ戻る
    </NavLink>
  </>
}

export default Post;
