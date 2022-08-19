
import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import "./Register.css"

export const Register = () => {

  return (

    <div className="registerDiv">

    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
        <TextField
        id="demo-helper-text-misaligned"
        label="Name"
        />

        <TextField
        id="demo-helper-text-misaligned"
        label="Name"
        />

        <TextField
        id="demo-helper-text-misaligned"
        label="Name"
       />

        <TextField
        id="demo-helper-text-misaligned"
        label="Name"
       />

        <TextField
        id="demo-helper-text-misaligned"
        label="Name"
       />

      
    </Box>

    </div>
  );
}
