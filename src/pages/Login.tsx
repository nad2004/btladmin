import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  type Inputs = {
    username: string;
    password: string;
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const handleLogin: SubmitHandler<Inputs> = () => {
    axios.post('https://btlltuddd-2.onrender.com/login', { username, password })
      .then(res => {
        if (res.data.login) {
          
          localStorage.setItem('token', res.data.token);
          
          navigate('/user');
        } else {
          alert('Tài khoản hoặc mật khẩu không đúng');
        }
      })
      .catch(err => {
        if (err.response && err.response.data.message) {
          setErrorMessage(err.response.data.message); 
          alert(err.response.data.message);
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div className="flex items-center min-h-screen justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-lg font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              UserName:
            </label>
            <input
              type="text"
              id="username"
              placeholder="Nhập tên tài khoản"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus-blue-200 h-11"
              {...register("username", { required: true })}
              onChange={e => setUsername(e.target.value)}
            />
            {errors.username && <span className="text-red-500 text-xs">Username is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Nhập mật khẩu"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus-blue-200 h-11"
              {...register("password", { required: true })}
              onChange={e => setPassword(e.target.value)}
            />
            {errors.password && <span className="text-red-500 text-xs">Password is required</span>}
          </div>
          <div className="mb-6">
            <button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-700 rounded-xl py-3">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
