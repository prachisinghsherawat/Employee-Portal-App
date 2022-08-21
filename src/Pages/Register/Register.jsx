
import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import "./Register.css"
import SimpleReactValidator from "simple-react-validator"
import { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useForceUpdate } from '@chakra-ui/react';


export const Register = () => {

    const [ , setForceUpdate ] = useState()

    const [registerData , setRegisterData ] = useState({

        name  : "" ,
        email  : "" ,
        password  : "" ,
        username  : "" ,
        mobile  : "" ,
        description  : "" 
    })

    const simpleValidator = useRef(new SimpleReactValidator())
    

    const SubmitDetails = () => {

      if(simpleValidator.current.allValid()){
        axios.post("http://localhost:3000/register", registerData)
      }
      else{
        simpleValidator.current.showMessages()
        setForceUpdate(1)
      }     
    }




    const validateError = (fieldName) => {

        if(simpleValidator.current.fields[fieldName] == false && simpleValidator.current.messagesShown == true){
          return "error"
        }
        else{
          return ""
        }
    }

    return (

    <div className="registerDiv">

    <Box id="Box">


      <div>

        <label >Name : </label>
        <TextField
        name='name'
        id="demo-helper-text-misaligned"
        label="Name"
        />
        <span>{simpleValidator.current.message( "name" , registerData?.name , "required")}</span>

      </div>


      <div>

        <label >Email : </label>
        <TextField
        name='email'
        id="demo-helper-text-misaligned"
        label="Email"
        type="email"
        />
        <span>{simpleValidator.current.message( "email" , registerData?.email , "required|email")}</span>

      </div>


      <div>

        <label >Password : </label>
        <TextField
        name='password'
        id="demo-helper-text-misaligned"
        label="Password"
        type="password"
        />
       <span>{simpleValidator.current.message( "password" , registerData?.password , "required|passsword")}</span>

      </div>


      <div>

        <label >Username : </label>

        <TextField
        name='username'
        id="demo-helper-text-misaligned"
        label="Username"
        />
        <span>{simpleValidator.current.message( "username" , registerData?.username , "required")}</span>

      </div>


      <div>

       <label >Mobile : </label>
        <TextField
        name='mobile'
        id="demo-helper-text-misaligned"
        label="Mobile"
        type="number"
        />
        <span>{simpleValidator.current.message( "mobile" , registerData?.mobile , "required|mobile")}</span>

      </div>


      <div>

        <label >Description : </label>
        <TextField
        name='description'
        id="demo-helper-text-misaligned"
        label="Description"
        />
        <span>{simpleValidator.current.message( "description" , registerData?.description , "required")}</span>

      </div>


      <div id="btn">
        <Button onClick={SubmitDetails} variant="contained">
          Register Now
        </Button>
      </div>

      
    </Box>

    


    </div>
  );
}


