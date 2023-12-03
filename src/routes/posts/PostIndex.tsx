import { useEffect, useReducer } from "react";
import { NavLink } from "react-router-dom";

const PostIndex: React.FC = () => {
  const reducer = (_prev: any, action: {data: any}) => action.data;
  const [articles, articleDataDispatch] = useReducer(reducer, [1]);

  useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/`).then( res => {
      return res.json();
    }).then( data => {
      articleDataDispatch({data});
    });
  }, []);

  return <>
    <ul>
      {
        articles.map( (article: any) => {
          return (
            <li key={`article-${article.id}`}>
              <NavLink to={`/posts/${article.id}`}>
                {`Article No. ${article.id}`}
              </NavLink>
            </li>
          );
        })
      }
    </ul> 
  </>
}

export default PostIndex;
