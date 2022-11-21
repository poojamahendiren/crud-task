import React from "react";
//import "./Login.css";
import img from "./assets/login.png";
import {Link} from 'react-router-dom';
import {Typography, TextField, Button} from '@mui/material';

export default function login() {
  return(
    <div style={{backgroundColor:"#5AE5B8",width:"100%",height:"790px",paddingLeft:"180px",paddingTop:"100px"}} >
       <div  style={{border:"2px solid black",borderRadius: "12px",width: "40%",height: "400px",textAlign:"center",paddingTop:"150px",float:"left",backgroundColor:"#0000FF"}}>
            <Typography variant="h4"> Signin Yourself!!! </Typography><br/>
            <form >
                <div>
                <TextField id="standard-basic" label="Email" variant="standard" type="email" name="email"   />
                </div><br/>
                <div>
                <TextField id="standard-basic" label="Password" variant="standard" type="password" name="password"/>
                </div><br/>
                <Link
                          to={"/dashboard"}
                          //class="btn btn-primary btn-user btn-block"
                        ><button >
                          Log In
                          </button>
                        </Link>
            </form>
        </div>
                        <div style={{float:"left"}} >
                            <img src={img} alt="" style={{width: "650px",height: "550px"}}/>
                        </div>
    </div>
  );
}














<Link
                          to={"/user"}
                          //class="btn btn-primary btn-user btn-block"
                        ><button >
                          Log In
                          </button>&nbsp;
                        </Link>