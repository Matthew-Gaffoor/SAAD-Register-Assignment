//import React, { useState } from "react";
//
//export const register = () => {
//    const [email, setEmail] = useState('');
//    const [password, setPassword] = useState('');
//    const [name,setName] = useState('')
//    
//    const handleSubmit = (e) => {
//        e.preventDefault();
//        console.log(email);
//
//    }
//
//    return (
//         <div className="auth-forms">
//            <h2>register</h2>
//        <form className="register-form" onSubmit={handleSubmit}>
//            <label htmlFor="name">name</label>
//            <input value={name} 
//            name="name" 
//            placeholder="Input name" 
//            id="name"/>
//            <label for="email">email</label>
//            <input value={email} 
//            onChange={(e) => setEmail(e.target.value)} 
//            type="email" 
//            placeholder="email@ac.uk" 
//            id="email" 
//            name="email" />
//            <label for="password">password</label>
//            <input value={Password} 
//            onChange={(e) => setPassword(e.target.value)} 
//            type="password" 
//            placeholder="password" 
//            id="password" 
//            name="password" />
//            <button>Login</button>
//        </form>
//        <button onClick={() => props.onFormSwitch('login')}>have an account? Login</button>
//        </div>
//    )
// }