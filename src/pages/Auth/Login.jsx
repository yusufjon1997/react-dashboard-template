import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const loginRequest = async (loginData) => {
  try {
    const result = await axios.post('http://localhost:5004/api/auth/login', loginData);
    return result.data;
  } catch (error) {
    return error
  }
}



const Login = () => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");


  const onSubmitHandler = (e) => {
    e.preventDefault();
    loginRequest({email , password}).then(res => {
      localStorage.setItem('token', res.token);
      window.location.href = '/';
    }).catch(err => console.log(err))
  }

  return (
    <div className='login'>
      <form onSubmit={onSubmitHandler}>
        <input type="text" name="email" id="" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input type="text" name="password" id="" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login