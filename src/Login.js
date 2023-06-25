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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform your login logic, such as sending the username and password to an API
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form
    setUsername('');
    setPassword('');
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
