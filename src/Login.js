// import React from "react";
// //import "./Login.css";
// import img from "./assets/login.png";
// import {Link} from 'react-router-dom';
// import {Typography, TextField, Button} from '@mui/material';

// export default function login() {
//   return(
//     <div style={{backgroundColor:"#5AE5B8",width:"100%",height:"790px",paddingLeft:"180px",paddingTop:"100px"}} >
//        <div  style={{border:"2px solid black",borderRadius: "12px",width: "40%",height: "400px",textAlign:"center",paddingTop:"150px",float:"left",backgroundColor:"#0000FF"}}>
//             <Typography variant="h4"> Signin Yourself!!! </Typography><br/>
//             <form >
//                 <div>
//                 <TextField id="standard-basic" label="Email" variant="standard" type="email" name="email"   />
//                 </div><br/>
//                 <div>
//                 <TextField id="standard-basic" label="Password" variant="standard" type="password" name="password"/>
//                 </div><br/>
//                 <Link
//                           to={"/dashboard"}
//                           //class="btn btn-primary btn-user btn-block"
//                         ><button >
//                           Log In
//                           </button>
//                         </Link>
//             </form>
//         </div>
//                         <div style={{float:"left"}} >
//                             <img src={img} alt="" style={{width: "650px",height: "550px"}}/>
//                         </div>
//     </div>
//   );
// }














// <Link
//                           to={"/user"}
//                           //class="btn btn-primary btn-user btn-block"
//                         ><button >
//                           Log In
//                           </button>&nbsp;
//                         </Link>


import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Link,useNavigate} from 'react-router-dom';
import Dashboard from "./Dashboard";
import img from "./assets/login.png";


import "./styles.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form" style={{width:"300px"}} >
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          <p style={{margin:"0 auto"}}>Demo users : user1,user2,user3</p>
          {renderErrorMessage("uname")}
          
        </div><br/>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          <p style={{margin:"0 auto"}}>Demo password : pass1,pass2,pass3</p>
          {renderErrorMessage("pass")}
        </div><br/>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div style={{paddingLeft:"350px",paddingTop:"150px"}}>
      <div className="login-form" style={{float:"left"}}>
        <div className="title">Sign In</div>
        {isSubmitted ?  navigate("/dashboard") : renderForm}
      </div>
      </div>
      <div style={{float:"left"}} >
      <img src={img} alt="" style={{width: "550px",height: "450px",paddingLeft:"50px"}}/>
      </div>
    </div>
  );
}

export default Login;
