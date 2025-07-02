import React, { useContext, useEffect, useState } from 'react'

import HeaderLogo from '../IconsAll/HeaderLogo'
import { Box, Container } from '@mui/material';
import styled from 'styled-components';
import './HeaderStyle.module'
import NavBar from './NavBar/NavBar';
import UserCart from './UserCart/UserCart';
import { ThemeContext } from '../../ContextA/ThemeContext';
import { LanguageContext } from '../../ContextA/AllContext';
import LanguageChange from './UserCart/LanguageChange';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
// import { ThemeContext } from '@emotion/react';


const HeaderStyle = styled(Box)(({ theme, isDark }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  position: 'fixed',
  top: '0',
  zIndex: '999',
  background: '#fff',
  width: '100%',
  left: '0',
  padding: "0 80px",
  "&.dark": {
    background: "black"
  }


}));


const Header = ({}) => {

  // const [isDark] = useState()

  const [user, setUser] = useState(null);
  const [isPopup, setIsPopup] = useState(false);
  const { isDark } = useContext(ThemeContext)
  // console.log(darkTh)





  return (
    <>

      <Container>
        <HeaderStyle className={`${isDark ? "" : "dark"}`} >
          <Box className='logo'>
            <Link to="/"><HeaderLogo /></Link>
          </Box>
          <NavBar />         
          <UserCart  />
        </HeaderStyle>

      </Container>
    </>
  )
}

export default Header


