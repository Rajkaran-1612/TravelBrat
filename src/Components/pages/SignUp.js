import React, {useState}  from 'react';
import '../../App.css';
import {Link, useHistory} from "react-router-dom"
import { auth } from '../firebase';
import Logo from '../../Images/Logo.jpg';
import background from '../../Images/img-home.jpg';
import "./Signup.css";
export default function SignUp()  {
const history = useHistory();
const[email,setEmail]= useState('');
const[password,setPassword]= useState('');

  const login = (event) =>{
      event.preventDefault();
      auth.signInWithEmailAndPassword(email,password)
      .then((auth) =>{
      history.push("/");
      })
      .catch(e=>alert(e.message))
  }

  const register = (event) =>{
      event.preventDefault();
      auth.createUserWithEmailAndPassword(email,password)
      .then(auth =>{
      history.push("/")
      })
      .catch((e)=> alert(e.message))
  }

  
  return(
   
      <div className="login">
            <Link to="/home">
                <img className="login__logo"
                src={Logo}
                alt="TravelBrat_logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form><h5>Email</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                <h5>Password</h5>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                <button onClick={login}  type="submit" className="login__signInButton">Sign In</button>
                </form>
             <p>
             By continuing, you agree to Travel Brat's Conditions of Use and Privacy Notice.
             </p>
             <button onClick={register} className="login__createAcc">Create your TravelBrat Account</button>
            </div>
     
        </div>
        
  )}
