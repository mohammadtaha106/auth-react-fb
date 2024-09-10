import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success('Signed In Successfully.', {
          position: 'top-center',
          autoClose: 2000,
        });
        setTimeout(() => {
          toast.dismiss();
          navigate('/');
        }, 2000);
      })
      .catch((error) => {
        toast.error('Sign In Failed. Please try again.', {
          position: 'top-center',
          autoClose: 2000,
        });
      });
  };

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success('Signed In with Google Successfully.', {
          position: 'top-center',
          autoClose: 2000,
        });
        setTimeout(() => {
          toast.dismiss();
          navigate('/');
        }, 1000);
      })
      .catch((error) => {
        toast.error('Sign In with Google Failed. Please try again.', {
          position: 'top-center',
          autoClose: 2000,
        });
      });
  };

  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="w-full sm:max-w-md p-6 bg-white border rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-green-800">Sign In</h1>
          </div>
          <form className="space-y-6" onSubmit={handleSignIn}>
            <div>
              <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-700">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg block w-full p-2"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg block w-full p-2"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-medium rounded-lg p-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Sign In
            </button>
            <button
              type="button"
              className="w-full bg-green-600 text-white font-medium rounded-lg p-2 mt-4 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={handleSignInWithGoogle}
            >
              Sign in with Google
            </button>
          </form>
          <p className="text-center text-gray-500 mt-6">
            Don't have an account?{' '}
            <a href="/signup" className="text-green-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}

export default SignIn;
