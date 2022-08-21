
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


    const showErrors = () => {
      simpleValidator.current.showMessages()
      setForceUpdate(1)
    }



    const SubmitDetails = () => {

      if(simpleValidator.current.allValid()){
        axios.post("http://localhost:8080/registerData", registerData)
      }
      else{
        simpleValidator.current.showMessages()
        setForceUpdate(1)
      }     
    }


    const HandleChange = (e) => {

      const {name , value} = e.target;
      setRegisterData({...registerData , [name] : value})
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
        onChange={HandleChange}
        />
      </div>
      <span className="error-msg">{simpleValidator.current.message( "name" , registerData?.name , "required")}</span>


      <div>
        <label >Email : </label>
        <TextField
        name='email'
        id="demo-helper-text-misaligned"
        label="Email"
        type="email"
        onChange={HandleChange}
        />
      </div>
      <span className="error-msg">{simpleValidator.current.message( "email" , registerData?.email , "required|email")}</span>


      <div>
        <label >Password : </label>
        <TextField
        name='password'
        id="demo-helper-text-misaligned"
        label="Password"
        type="password"
        onChange={HandleChange}
        />
      </div>
      <span className="error-msg">{simpleValidator.current.message( "password" , registerData?.password , "required")}</span>


      <div>
        <label >Username : </label>
        <TextField
        name='username'
        id="demo-helper-text-misaligned"
        label="Username"
        onChange={HandleChange}
        />
      </div>
      <span className="error-msg">{simpleValidator.current.message( "username" , registerData?.username , "required")}</span>


      <div>
       <label >Mobile : </label>
        <TextField
        name='mobile'
        id="demo-helper-text-misaligned"
        label="Mobile"
        type="number"
        onChange={HandleChange}
        />
      </div>
      <span className="error-msg">{simpleValidator.current.message( "mobile" , registerData?.mobile , "required")}</span>


      <div>
        <label >Description : </label>
        <TextField
        name='description'
        id="demo-helper-text-misaligned"
        label="Description"
        onChange={HandleChange}
        />
      </div>
      <span className="error-msg">{simpleValidator.current.message( "description" , registerData?.description , "required")}</span>


      <div id="btn">
        <Button onClick={SubmitDetails} variant="contained">
          Register Now
        </Button>
      </div>

      
    </Box>

    


    </div>
  );
}


