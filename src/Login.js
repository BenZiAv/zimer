import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Prepare the data to send to the API
    const data = {
      username: username,
      password: password,
    };
  
    try {
      const response = await fetch('http://localhost:3000', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // Successful login
        const responseData = await response.json();
        console.log('Login successful:', responseData);
        alert("Login successful");
        // Reset the form
        setUsername('');
        setPassword('');
      } else {
        // Error handling for unsuccessful login
        console.log('Login failed');
        alert("Login failed");
      }
    } catch (error) {
      // Handle fetch errors
      console.error('An error occurred:', error);
      alert("An error occurred");
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className='form'> <h1 className='h1_login'>Manager Login</h1>
      <div className='inputWrapper'>
        <label htmlFor="username" className='label'>Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          className='input'
        />
      </div>
      <div className='inputWrapper'>
        <label htmlFor="password" className='label'>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className='input'
        />
      </div>
      <button type="submit" className='button_submit'>Login</button>
    </form>
  );
};

export default LoginForm;
