import React from 'react';
import { UserProvider, useUser } from '@/context/UserContext';
import SignupModal from '@/components/SignupModal';
import MainPage from '@/pages/MainPage';

const AppContent: React.FC = () => {
  const { isLoggedIn } = useUser();

  if (!isLoggedIn) {
    return <SignupModal />;
  }

  return <MainPage />;
};

const Index: React.FC = () => {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
};

export default Index;
