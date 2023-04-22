import React , { useState } from 'react';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = () => {
        console.log(email, password);
    }

    return (
        <div className='register'>
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="email" id="" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <input type="text" name="password" id="" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register