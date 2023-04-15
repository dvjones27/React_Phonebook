import Background from '../assets/images/amir-hanna-sweUF7FcyP4-unsplash.jpg'
import Image from '../assets/images/amir-hanna-sweUF7FcyP4-unsplash.jpg';
// import Modal from './Modal'
import * as React from 'react';
import Box from '@mui/material/Box';
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField'

import { useGetData } from '../custom-hooks/FetchData';






function Profile() {
  const [name, setName] = React.useState('Cat in the Hat');

    return (
      
      <div 
      style={{ backgroundImage: `url(${Background})`}}
      className="flex flex-row justify-center mx-auto bg-fixed bg-contain bg-no-repeat bg-left"
      >
        <div 
        
        className='flex place-items-center h-screen '
        >
          <img src="../assets/images/alexander-andrews-JYGnB9gTCls-unsplash.jpg"/>
        </div>
        <div className='flex place-items-center h-screen '>
          {/* <img/> */}
          {/* <i className="fa-duotone fa-head-side" style="--fa-primary-color: #f5ec00; --fa-secondary-color: #9929bd;"></i> */}
          <h3 className='p-5 bg-white bg-opacity-95 text-black rounded'>Profile Page</h3>
        </div>
          <br/>
          
        <div className='flex place-items-center h-screen'>
          <Box className='p-5 bg-white opacity-45 bg-opacity-95 text-black rounded'
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
          
          <TextField 
            id="outlined-controlled"
            label="Username"
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setName(event.target.value);
            }}
          />
          <br/>
          <TextField
            id="outlined-uncontrolled"
            label="Email Address"
            defaultValue="foo"
          />
          </Box>
        </div>
      </div>
        
    )
  }
  
  export default Profile