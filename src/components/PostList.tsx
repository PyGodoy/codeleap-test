import React from 'react';
import { Post } from '@/types/post';
import PostCard from './PostCard';

interface PostListProps {
  posts: Post[];
  isLoading: boolean;
  onEdit: (post: Post) => void;
  onDelete: (post: Post) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, isLoading, onEdit, onDelete }) => {
  if (isLoading) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        Loading posts...
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No posts yet. Be the first to post!
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default PostList;
