import React, { useEffect, useState } from 'react';
import { Avatar, IconButton, Menu } from '@mui/material';
import { useNavigate } from 'react-router';
import { deepOrange } from '@mui/material/colors';
import '../App.css'

function Profile() {
  const [anchorEl, setAnchorEl] = useState(null);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState('')
  const getUser = async () => {
    const response = await fetch(`http://localhost:1000/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    })
    const data = await response.json()
    setName(data.user.name)
    setEmail(data.user.email)
    const date=data.user.date
    setJoined(date.slice(0,10))
  }
  useEffect(() => {
    getUser()
  })

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  let navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
    handleClose();
  };


  return (
    <div>
      <IconButton
        aria-controls="profile-dropdown"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar
          sx={{ bgcolor: deepOrange[500], height: '35px', width: '35px' }}
          alt={name}
          src=""
        />
      </IconButton>
      <Menu
        id="profile-dropdown"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div style={{ padding: '10px 20px' }}>
          <h5>{name}</h5>
          <p>{email}</p>
          <p>Joined on: {joined}</p>
          <button onClick={handleLogout} className='logout'>Log Out</button>
        </div>
      </Menu>
    </div>
  );
}

export default Profile;
