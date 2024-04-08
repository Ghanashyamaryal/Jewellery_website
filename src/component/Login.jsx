import React from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate} from "react-router-dom"
function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate  = useNavigate()
  const onSubmit = data => {
    navigate("/Product")
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-slate-200	p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              className={`mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2 ${errors.email ? 'border-red-500' : 'border-gray-400'}`}
              {...register("email", { required: 'Email is required', pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className={`mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2 ${errors.password ? 'border-red-500' : 'border-gray-400'}`}
              {...register("password", { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
            />
            {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
