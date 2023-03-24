import { useEffect, useState } from 'react';
import Accordion from '../../components/common/Accordion';
import { Post } from './model';
import { postService } from './service';

function PostPage() {
  const [selectedPost, setSelectedPost] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    postService.getPosts(selectedPost).then((res) => {
      if (res.isSuccess) {
        setPosts(res.data);
      }
    });
  }, [selectedPost]);

  return (
    <div className="p-4">
      <button onClick={() => setSelectedPost(2)}>click</button>
      {posts.map((post) => (
        <Accordion title={post.title} key={post.id}>
          <p className="whitespace-pre-wrap">{post.body}</p>
        </Accordion>
      ))}
    </div>
  );
}

export default PostPage;
