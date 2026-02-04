import { Post, PostsResponse, CreatePostData, UpdatePostData } from '@/types/post';

const API_BASE_URL = 'https://dev.codeleap.co.uk/careers/';

export const postsApi = {
  getPosts: async (): Promise<PostsResponse> => {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json();
  },

  createPost: async (data: CreatePostData): Promise<Post> => {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to create post');
    }
    return response.json();
  },

  updatePost: async (id: number, data: UpdatePostData): Promise<Post> => {
    const response = await fetch(`${API_BASE_URL}${id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to update post');
    }
    return response.json();
  },

  deletePost: async (id: number): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}${id}/`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete post');
    }
  },
};
