import React, { useState } from 'react';
import { Post } from '@/types/post';
import { postsApi } from '@/services/api';

interface EditModalProps {
  post: Post;
  onClose: () => void;
  onUpdated: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ post, onClose, onUpdated }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [isLoading, setIsLoading] = useState(false);

  const isButtonDisabled = title.trim().length === 0 || content.trim().length === 0 || isLoading;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isButtonDisabled) return;

    setIsLoading(true);
    try {
      await postsApi.updatePost(post.id, {
        title: title.trim(),
        content: content.trim(),
      });
      onUpdated();
      onClose();
    } catch (error) {
      console.error('Failed to update post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-lg font-bold mb-4">Edit item</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Hello world"
              className="input-field"
              autoFocus
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm mb-2">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content here"
              rows={4}
              className="input-field resize-none"
            />
          </div>
          
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="btn-cancel px-6 py-2 rounded font-medium text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isButtonDisabled}
              className="btn-success px-6 py-2 rounded font-medium text-sm"
            >
              {isLoading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
