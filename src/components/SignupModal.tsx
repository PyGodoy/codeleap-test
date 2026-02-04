import React, { useState } from 'react';
import { useUser } from '@/context/UserContext';

const SignupModal: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const { setUsername } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setUsername(inputValue.trim());
    }
  };

  const isButtonDisabled = inputValue.trim().length === 0;

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center p-4">
      <div className="modal-content max-w-sm w-full">
        <h1 className="text-lg font-bold mb-4">Welcome to CodeLeap network!</h1>
        
        <form onSubmit={handleSubmit}>
          <label className="block text-sm mb-2">
            Please enter your username
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="John doe"
            className="input-field mb-4"
            autoFocus
          />
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isButtonDisabled}
              className="btn-primary px-8 py-2 rounded font-medium text-sm uppercase tracking-wide"
            >
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
