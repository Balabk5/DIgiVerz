import React from 'react'
import Loginimg from "../../assests/analytics_img.png"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faEnvelope, faEye, faWarning } from "@fortawesome/free-solid-svg-icons";
import { Modal, Input, Row, Checkbox, Button } from "@nextui-org/react";
import { Loading } from "@nextui-org/react";

const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
        fetchItems();
      }, []);
    
      const [items, setItems] = useState([]);
      const fetchItems = async () => {
        const data = await fetch(
          "http://127.0.0.1:5000/api/user"
        );
          console.log(data)
        const items = await data.json();
        console.log(items);
        setItems(items);
      };
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [visible, setVisible] = React.useState(false);
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = items.map((user) => user.username === username);
    console.log(account)
    const account_pass = items.map((user) => user.password === password);
    console.log(account)
    if (account[0] === true && account_pass[0] === true) {
      localStorage.setItem("authenticated", true);
      console.log("success")
      navigate("/upload");
      
    }
    else{
        console.log("nope")
        setVisible(true);
    }
  };
  
  
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div className="parent__login">
    <div className="child1">
        <div className="centerelements">
            {/* <img src="/assets/images/customerportal.png" alt="" className="pn-login-image"> */}
            <img
          className="pn-login-image"
          src={Loginimg}
          alt=""
        />
            
            <Text
          h1
          size={60}
          className="pm-cont"
          css={{
            textGradient: "45deg, $blue600 -5%, $black 60%",
          }}
          weight="bold"
        >
          DigiVerze 
        </Text>
        <p className='digi__dec__login'>Get detailed analytics and predictions on your data</p>
            
            {/* <p className="pm-sub-cont">One stop for getting details on your Inquiry data,Sale order data and List of Delivery 
            </p>
            <p className="pm-sub-cont1">  from the organization
            </p> */}
                

        </div>
    </div>
    <div className="child2">
        <div className="container__login">
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
                        <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                    </label>
                    <label className="inp">
                        <input type="password"  className="input-text" placeholder=" " id="pass" name="password" onChange={(e) => setpassword(e.target.value)}/>
                        
                        <span className="label">Password</span>
                        <span className="input-icon input-icon-password">
                        <FontAwesomeIcon icon={faEye} />
                        </span>
                    </label>
                    <button type="submit"  className="btn1">Login</button>
                    
                    
                </form>
            </div>
        </div>
    </div>
    <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <FontAwesomeIcon className='popup__alert' icon={faWarning}/>
        <Modal.Header>
          
          <Text id="modal-title" size={18}>
            
            <Text b size={18}>
            oops! Check the password
            </Text>
          </Text>
        </Modal.Header>
        
          
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          
        </Modal.Footer>
        <Loading color="error" type="points" />
      </Modal>
    
       {/* {items.map((item) => (
        <div key={item.itemId} className="wrapper__list">
          <li>{item.username}</li>
          
        </div>
      ))} */}
    
</div>
  )
}

export default Login