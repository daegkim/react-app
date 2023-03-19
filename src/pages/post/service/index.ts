import axios from 'axios';
import { Post } from '../model';

type ServiceResult<T> = ServiceSuccessResult<T> | ServiceFailResult;

interface ServiceSuccessResult<T> {
  isSuccess: true;
  data: T;
}

interface ServiceFailResult {
  isSuccess: false;
  error: {
    message: string;
  };
}

class PostService {
  async getPosts(userId: number) {
    let result: ServiceResult<Post[]>;

    try {
      const response = await axios.get<Post[]>(
        'https://jsonplaceholder.typicode.com/posts'
      );

      result = {
        isSuccess: true,
        data: response.data.filter((post) => post.userId === userId),
      };
    } catch (error: any) {
      result = {
        isSuccess: false,
        error: {
          message: error.message,
        },
      };
    }

    return result;
  }
}

export const postService = new PostService();
