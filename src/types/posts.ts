interface Post {
  body: string
  id: number
  title: string
  userId: number
}

type Posts = Array<Post>

export { type Posts, type Post }
