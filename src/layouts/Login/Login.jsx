import React from 'react'
import Loginimg from "../../assests/analytics_img.png"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
        fetchItems();
      }, []);
    
      const [items, setItems] = useState([]);
      const fetchItems = async () => {
        const data = await fetch(
          "http://127.0.0.1:5000/user"
        );
          console.log(data)
        const items = await data.json();
        console.log(items.name);
        setItems(items);
      };
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [{ username: "bala", password: "12345" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = items.map((user) => user.name === username);
    const account_pass = items.map((user) => user.age === password);
    console.log(account)
    if (account && account_pass) {
      localStorage.setItem("authenticated", true);
      console.log("success")
      navigate("/upload");

    }
    else{
        console.log("nope")
    }
  };

  return (
    <div className="parent">
    <div className="child1">
        <div className="centerelements">
            {/* <img src="/assets/images/customerportal.png" alt="" className="pn-login-image"> */}
            <img
          className="pn-login-image"
          src={Loginimg}
          alt=""
        />
            <h1 className="pm-cont"> DigiVerze Portal</h1>
            
            
            {/* <p className="pm-sub-cont">One stop for getting details on your Inquiry data,Sale order data and List of Delivery 
            </p>
            <p className="pm-sub-cont1">  from the organization
            </p> */}
                

        </div>
    </div>
    <div className="child2">
        <div className="container">
            <div className="signup-container">
                <h1 className="heading-primary">Log in
                    <span className="span-blue">.</span>
                </h1>
                <p className="text-mute">Enter your credentials to access your account.</p>
                <form className="signup-form" onSubmit={handleSubmit} >
                    <label className="inp">
                        <input type="text"  className="input-text" id="" placeholder=" " name="username" onChange={(e) => setusername(e.target.value)}  />
                        
                        <span className="label">UserName</span>
                        <span className="input-icon">
                            <i className="fa-solid fa-envelope"></i>
                        </span>
                    </label>
                    <label className="inp">
                        <input type="password"  className="input-text" placeholder=" " id="pass" name="password" onChange={(e) => setpassword(e.target.value)}/>
                       
                        <span className="label">Password</span>
                        <span className="input-icon input-icon-password">
                            <i className="fa-solid fa-eye"></i>
                        </span>
                    </label>
                    <button type="submit" className="btn1">Login</button>
                    
                    
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login