import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogOut = async () =>{
    try {
      await signOut(auth);
       // remove token and user details from localStorage after signout.
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {user && (
        <div>
          <p><strong>Username:</strong> {user.displayName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <img src={user.photoURL} alt='Profile'/>
        </div>
      )}
      <hr/>
      <button onClick={handleLogOut} className='logout-btn'>Log Out</button>
    </div>
  )
}

export default Home