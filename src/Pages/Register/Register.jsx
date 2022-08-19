
import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import "./Register.css"

export const Register = () => {

  return (

    <div className="registerDiv">

    <Box id="Box">


        <div>
        <label >Name : </label>
        <TextField
        id="demo-helper-text-misaligned"
        label="Name"
        />
        </div>

        <div>
        <label >Email : </label>
        <TextField
        id="demo-helper-text-misaligned"
        label="Email"
        type="email"
        />
        </div>

        <div>
        <label >Password : </label>
        <TextField
        id="demo-helper-text-misaligned"
        label="Password"
        type="password"
       />
        </div>

        <div>
        <label >Username : </label>
        <TextField
        id="demo-helper-text-misaligned"
        label="Username"
       />
        </div>

       <div>
       <label >Mobile Number : </label>
        <TextField
        id="demo-helper-text-misaligned"
        label="Mobile Number"
        type="number"
       />
       </div>

        <div>
        <label >Description : </label>
        <TextField
        id="demo-helper-text-misaligned"
        label="Description"
       />
        </div>


        <div id="btn">
        <Button variant="contained">
            Register Now
        </Button>
        </div>

      
    </Box>

    


    </div>
  );
}


