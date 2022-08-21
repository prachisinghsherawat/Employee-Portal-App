
import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import "./Login.css"
import SimpleReactValidator from "simple-react-validator"


export const Login = () => {

    const simpleValidator = useRef(new SimpleReactValidator()) 

    const HandleChange = (e) => {

        const {name , value} = e.target;
        setRegisterData({...registerData , [name] : value})
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



      <div id="btn">
        <Button variant="contained">
          Register Now
        </Button>
      </div>


      
    </Box>

    


    </div>
  );
}


