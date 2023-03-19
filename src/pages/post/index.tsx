import { useEffect, useState } from 'react';
import { Post } from './model';
import { postService } from './service';

function PostPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    postService.getPosts(1).then((res) => {
      if (res.isSuccess) {
        setPosts(res.data);
      }
    });
  }, []);

  return (
    <div className="p-4">
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p className="whitespace-pre-wrap">{post.body}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default PostPage;
