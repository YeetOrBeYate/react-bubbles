import React from "react";
import axios from 'axios';


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [input, setInput] = React.useState({
    username: "",
    password: ""
  })
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [display, setDisplay] = React.useState(false);

  const handleChange = (e)=>{
    setInput({...input, [e.target.name]: e.target.value})
  }

  const handleLogin = (e)=>{
    e.preventDefault();
    
    setLoading(true);
    axios.post("http://localhost:5000/api/login", input)
      .then((res)=>{
        console.log(res)
        setMessage("Youre In!")
        setDisplay(true);
        localStorage.setItem("token", res.data.payload);
        console.log(localStorage)
      })
      .catch((err)=>{
        console.log(err)
        setMessage("Opsie!, Somting wen wongg!");
        setDisplay(true);
      })
      .finally(()=>{
        setLoading(false);
      })
  }

  return (
    <div className= "Form">
      {!loading ? <h1>Welcome to the Bubble App!</h1> : <h1>Loading...</h1>}
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
        {!display ? <h1></h1> : <h1>{message}</h1>}
      </form>
    </div>
  );
};

export default Login;
