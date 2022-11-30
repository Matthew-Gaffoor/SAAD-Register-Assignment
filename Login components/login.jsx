//import React, { useState } from "react";
//
// export const login = () => {
//    const [email, setEmail] = useState('');
//    const [password, setPassword] = useState('');
//    const handleSubmit = () => {
//        e.preventDefault();
//        console.log(email);
//    }
//    return (
//        <div className="auth-forms">
//            <h2>login</h2>
//        <form className="login-form" onSubmit={handleSubmit}>
//            <label for="email">email</label>
//            <input value={email}
//             onChange={(e) => setEmail(e.target.value)} 
//             type="email"
//              placeholder="email@ac.uk" 
//              id="email" 
//              name="email" />
//            <label for="password">password</label>
//            <input value={Password} 
//            onChange={(e) => setPassword(e.target.value)} 
//            type="password" 
//            placeholder="password" 
//            id="password" 
//            name="password" />
//            <button>Login</button>
//        </form>
//        <button className="lnk-btn"onClick={() => props.onFormSwitch('register')}>Need an account? Register</button>
//        </>
//    )
// }