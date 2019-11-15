import React from "react";
import axios from 'axios';


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [input, setInput] = React.useState({
    username: "",
    password: ""
  })

  const handleChange = (e)=>{
    setInput({...input, [e.target.name]: e.target.value})
  }

  const handleLogin = (e)=>{
    e.preventDefault();
    console.log(input);
  }

  return (
    <div className= "Form">
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <div>
          <label>Username:</label>
          <input name= "username" value = {input.username} onChange={handleChange}/>
        </div>
        <div>
          <label>Password:</label>
          <input name= "password" value = {input.password} onChange={handleChange}/>
        </div>
        <button onClick={handleLogin}>Login!</button>
      </form>
    </div>
  );
};

export default Login;
