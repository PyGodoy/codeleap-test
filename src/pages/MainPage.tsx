import React, { useState, useEffect, useCallback } from 'react';
import { Post } from '@/types/post';
import { postsApi } from '@/services/api';
import Header from '@/components/Header';
import CreatePostForm from '@/components/CreatePostForm';
import PostList from '@/components/PostList';
import EditModal from '@/components/EditModal';
import DeleteModal from '@/components/DeleteModal';

const MainPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [deletingPost, setDeletingPost] = useState<Post | null>(null);

  const fetchPosts = useCallback(async () => {
    try {
      const response = await postsApi.getPosts();
      // Sort by most recent first
      const sortedPosts = response.results.sort((a, b) => 
        new Date(b.created_datetime).getTime() - new Date(a.created_datetime).getTime()
      );
      setPosts(sortedPosts);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handlePostCreated = () => {
    fetchPosts();
  };

  const handlePostUpdated = () => {
    fetchPosts();
  };

  const handlePostDeleted = () => {
    fetchPosts();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto bg-card min-h-screen">
        <Header />
        
        <div className="p-6 space-y-6">
          <CreatePostForm onPostCreated={handlePostCreated} />
          
          <PostList
            posts={posts}
            isLoading={isLoading}
            onEdit={setEditingPost}
            onDelete={setDeletingPost}
          />
        </div>
      </div>

      {editingPost && (
        <EditModal
          post={editingPost}
          onClose={() => setEditingPost(null)}
          onUpdated={handlePostUpdated}
        />
      )}

      {deletingPost && (
        <DeleteModal
          post={deletingPost}
          onClose={() => setDeletingPost(null)}
          onDeleted={handlePostDeleted}
        />
      )}
    </div>
  );
};

export default MainPage;
