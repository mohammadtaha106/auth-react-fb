import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleOnCreateAcc = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Account created successfully! Please sign in.', {
        position: 'top-center',
        autoClose: 2000,
      });

      setTimeout(() => {
        toast.dismiss();
        navigate('/signin');
      }, 2000);
    } catch (error) {
      toast.error('Failed to create an account. Please try again.', {
        position: 'top-center',
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="w-full sm:max-w-md p-6 bg-white border rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-green-800">Create an Account</h1>
          </div>
          <form className="space-y-6" onSubmit={handleOnCreateAcc}>
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
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-lg font-medium text-gray-700"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="••••••••"
                className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg block w-full p-2"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-100 focus:ring-3 focus:ring-green-300"
                  required
                />
              </div>
              <div className="ml-3 text-lg">
                <label htmlFor="terms" className="font-light text-gray-500">
                  I accept the{' '}
                  <a className="font-medium text-green-600 hover:underline" href="#">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-medium rounded-lg p-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Create an account
            </button>
          </form>
          <p className="text-center text-gray-500 mt-6">
            Already have an account?{' '}
            <a href="/signin" className="text-green-600 hover:underline">
              Sign In here
            </a>
          </p>
          <ToastContainer />
        </div>
      </section>
    </>
  );
}

export default SignUp;
