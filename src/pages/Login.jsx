import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { auth, googleAuthProvider } from '../firebase';

const Login = () => {
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    try {
      
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);
      // Store token and user details in localStorage
      localStorage.setItem('token', result.user.accessToken);
      localStorage.setItem('user', JSON.stringify(result.user));
      navigate('/'); // Redirect after successful login
    } catch (error) {
      console.error( error);
    }
  };

  return (
    <div>
      <GoogleButton onClick={handleSignInWithGoogle} />
    </div>
  );
};

export default Login;
