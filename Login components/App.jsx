import React, { useState } from " react";
import { login } from "./login";

function App() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="App">
            {currentForm === "login" ? <Login onFormSwitch={toggleform} /> : <Register />}
        </div>
    )
}
export default App;