import React, {  useContext, useState } from 'react'
import  './Login.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"

const Login = ({setShowLogin}) => {

    const {url,setToken} = useContext(StoreContext)
    const [currState,setCurrState] = useState("Login")
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
        newUrl += "/api/user/login";
    } else {
        newUrl += "/api/user/register";
    }

    const payload = {
        email: data.email,
        password: data.password,
    };
    if (currState === "SignUp") {
        payload.name = data.name;
    }

    try {
        const response = await axios.post(newUrl, payload);
        console.log("Response:", response.data);
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false);
        } else {
            alert(response.data.message);
        }
    } catch (err) {
        console.error("Signup/Login failed:", err);
        alert(err.response?.data?.message || "Network or server error");
    }
};


    return (
        <div className='login-popup'>
            <form  onSubmit={onLogin}className="login-popup-container">
                <div className="logo-container">
                    <img src="/Quickbites Marketing.png" alt="Logo" className="logo-icon" />
                </div>
                <div className="login-title">
                    <h2>{currState}</h2>
                    <img onClick={()=>setShowLogin(false)} src= {assets.cross_icon} alt="" />
                </div>
            <div className="login-pop-inputs">
                {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name}type="text" placeholder='Enter Your Name' required />}
                
                <input name='email'onChange={onChangeHandler} value={data.email}placeholder='Enter Your Email' type='email'required />
                <input name='password' onChange={onChangeHandler} value={data.password} placeholder='Enter Password' type='password'required />
            </div>
            <button type='submit'>{currState==="SignUp"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By Continuing, I Agree to the Terms of Use & Privacy Policy</p>
            </div>
            {currState==="Login"
            ?<p>Don't have an Account? <span onClick={()=>setCurrState("SignUp")}>Click Here</span></p>
            :<p>Already Have an Account? <span onClick={()=>setCurrState("Login")}>LogIn</span></p>
        }
            
            
        </form>
    </div>
  )
}

export default Login