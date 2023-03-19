import { useEffect, useState } from 'react';
import Accordion from '../../components/layout/Accordion';
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
        <Accordion title={post.title} key={post.id}>
          <p className="whitespace-pre-wrap">{post.body}</p>
        </Accordion>
      ))}
    </div>
  );
}

export default PostPage;
