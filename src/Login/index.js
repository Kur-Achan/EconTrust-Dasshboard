import "./index.css";
import { useState } from "react";
// import econ from  "./images.econ.png";
// import { login } from "./utils";
const Login = () =>{
    const [username,setUserName]=useState("");
    const [password, setPassword]=useState("");
    console.log({username});

    const handleLogin = async(event)=>{
        event.preventDefault();
        const result = await Login({username,password});
        console.log({result});
    };
    return(
        <div>
         <img src="./Images/econ.png" alt="" id="Logo"></img>
            <p  id="user">UserName:</p>
            <p id="email">email:</p>
            <p id="pass">password:</p>
            <p id="welcome">Welcome back Mary Vivian</p>
           
            <form onSubmit={handleLogin}>
           
                <h2 id="login">LOGIN</h2>
                
            <input></input>{(event)=>setUserName(event.target.value)}
            <br/>
             <input  id="Username"placeholder/>
            <br/>
            <input id="Email" placeholder/>
            <br/>
            {/* <input id="password" placeholder/> */}
            <br/>
            <button type="submit">Login</button>
          
            </form>{""}
            <p id="account">Don't have an account?</p>
            <p  id="sign">SignUp</p>
        </div>
    );
};
export default Login;