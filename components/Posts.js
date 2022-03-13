import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Post from './Post'
import { db } from '../firebase'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs)
        }
      ),
    [db]
  )

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          img={post.data().image}
          userImg={post.data().profileImage}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
