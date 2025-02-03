'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if(email === 'misbah@gmail.com' && password === 'misbah') {
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/adminLogin/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form onSubmit={handleLogin} className='bg-white p-10 rounded-lg shadow-md w-96'>
        <h1 className='text-2xl font-bold text-center mb-5'>Admin Login</h1>
        <input
          type='email'
          placeholder='Email'
          className='w-full border p-2 mb-5'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          className='w-full border p-2 mb-5'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type='submit'
          className='w-full bg-blue-500 text-white p-2 rounded-md'
        >
          Login
        </button>
      </form>
      
    </div>
  )
}

export default AdminLogin