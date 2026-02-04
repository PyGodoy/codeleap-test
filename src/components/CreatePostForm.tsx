import React, { useState } from 'react';
import { useUser } from '@/context/UserContext';
import { postsApi } from '@/services/api';

interface CreatePostFormProps {
  onPostCreated: () => void;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { username } = useUser();

  const isButtonDisabled = title.trim().length === 0 || content.trim().length === 0 || isLoading;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isButtonDisabled) return;

    setIsLoading(true);
    try {
      await postsApi.createPost({
        username,
        title: title.trim(),
        content: content.trim(),
      });
      setTitle('');
      setContent('');
      onPostCreated();
    } catch (error) {
      console.error('Failed to create post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="post-card p-6">
      <h2 className="text-lg font-bold mb-4">What's on your mind?</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Hello world"
            className="input-field"
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
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isButtonDisabled}
            className="btn-primary px-8 py-2 rounded font-medium text-sm uppercase tracking-wide"
          >
            {isLoading ? 'Creating...' : 'Create'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
