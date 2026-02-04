import React from 'react';
import { Trash2, Edit3 } from 'lucide-react';
import { Post } from '@/types/post';
import { useUser } from '@/context/UserContext';
import { formatDistanceToNow } from 'date-fns';

interface PostCardProps {
  post: Post;
  onEdit: (post: Post) => void;
  onDelete: (post: Post) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onEdit, onDelete }) => {
  const { username } = useUser();
  const isOwner = username === post.username;

  const timeAgo = formatDistanceToNow(new Date(post.created_datetime), { addSuffix: true });

  return (
    <div className="post-card">
      <div className="post-header flex items-center justify-between">
        <h3 className="font-bold text-lg truncate pr-4">{post.title}</h3>
        
        {isOwner && (
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => onDelete(post)}
              className="hover:opacity-80 transition-opacity"
              aria-label="Delete post"
            >
              <Trash2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => onEdit(post)}
              className="hover:opacity-80 transition-opacity"
              aria-label="Edit post"
            >
              <Edit3 className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <span className="font-medium">@{post.username}</span>
          <span>{timeAgo}</span>
        </div>
        
        <p className="text-foreground whitespace-pre-wrap break-words">
          {post.content}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
