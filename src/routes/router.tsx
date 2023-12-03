import Home from "./home/App"
import About from "./about/App"
import Posts from "./posts/App"
import { loader as postsLoader } from "./posts/PostIndex"
import { loader as postLoader } from "./post/App"
import Post from "./post/App"
import ErrorPage from "./errorPage/App"
import Root from './Root'
import { createBrowserRouter } from "react-router-dom"
import PostIndex from "./posts/PostIndex"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: 'about',
        element: <About />
      }, {
        path: 'posts',
        element: <Posts />,
        children: [
          {
            index: true,
            element: <PostIndex />,
            loader: postsLoader
          }, {
            path: ':postId',
            element: <Post />,
            loader: postLoader,
            errorElement: <ErrorPage />,
          }
        ]
      }
    ]
  }
])
