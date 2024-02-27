import React from 'react'
import { Link } from "react-router-dom";
import { authActions, setDarkmode } from "../store";
import {
    AppBar, Typography,Toolbar, Box,  Button, Tabs, Tab,
  } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from "react";
import { lightTheme, darkTheme } from '../utils/theme';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


const Header = () => {
    const dispath = useDispatch();
    const isDark = useSelector((state)=> state.theme.isDarkmode)
    const theme = isDark ? darkTheme : lightTheme
    
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [value, setValue] = useState();

  return <AppBar 
  position='sticky'
  sx={{ background:  `${theme.bg}` }}>
      
      <Toolbar>
          <Navbar>
              <h1>Blogs App</h1>
        
         { isLoggedIn && 

  <Nav className='mx-4'>
    <Link to="/blogs" className="nav-link navbar-brand" style={isDark ? { color: "white" } : { color: "black" }}>All Blogs</Link>
    <Link to="/myBlogs" className="nav-link navbar-brand" style={isDark ? { color: "white" } : { color: "black" }}>My Blogs</Link>
    <Link to="/blogs/add" className="nav-link navbar-brand" style={isDark ? { color: "white" } : { color: "black" }}>Add Blog</Link>
  </Nav>
}
</Navbar>


          <Box display="flex" marginLeft="auto">
              {!isLoggedIn && (
             <> <Button
             onClick={() => dispath(authActions.login(true))}
             as={Link}
             to="/login"
             variant="outline-dark"
             className="mx-1 my-2 font-weight-bold btn btn-primary"
             style={{ borderRadius: '10px', color: 'white' }}
              >
                 <b>Login</b> 
              </Button>
              <Button 
              onClick={() => dispath(authActions.login(true))}
              as={Link}
              to="/login"
              variant="outline-dark"
              className="mx-1 my-2 font-weight-bold btn btn-primary"
              style={{ borderRadius: '10px', color: 'white' }}
              > 
                  SignUp
              </Button>
              </>
              )}

              {isLoggedIn && (
            <Button
          onClick={() => dispath(authActions.logout(false))}
          as={Link}
          to="/login"
          variant="outline-dark"
          className="mx-1 my-2 font-weight-bold btn btn-warning"
          style={{ borderRadius: '10px', color: 'white' }}
            >
              Logout
            </Button>
          )}
          <div onClick={(e)=>{
            e.preventDefault()
            dispath(setDarkmode(!isDark))}} style={{alignContent:'center', padding:'10px 0', cursor:'pointer'}}>
            {isDark ? <LightModeIcon />
            :
            <DarkModeIcon />}
          </div>

          </Box>
      </Toolbar>
  </AppBar>
}

export default Header