import React, { useState } from 'react';
import { Post } from '@/types/post';
import { postsApi } from '@/services/api';

interface DeleteModalProps {
  post: Post;
  onClose: () => void;
  onDeleted: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ post, onClose, onDeleted }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await postsApi.deletePost(post.id);
      onDeleted();
      onClose();
    } catch (error) {
      console.error('Failed to delete post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-lg font-bold mb-6">Are you sure you want to delete this item?</h2>
        
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="btn-cancel px-6 py-2 rounded font-medium text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled={isLoading}
            className="btn-danger px-6 py-2 rounded font-medium text-sm"
          >
            {isLoading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
