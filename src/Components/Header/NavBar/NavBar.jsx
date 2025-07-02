import { Box } from '@mui/material'
import React, { Fragment, useContext } from 'react'
import styled from 'styled-components';
import { LanguageContext } from '../../../ContextA/AllContext';
import LanguageChange from '../UserCart/LanguageChange';
import { ThemeContext } from '../../../ContextA/ThemeContext';
import { Link, Links } from 'react-router-dom';

const NavBarStyle = styled(Box)(({ theme, isDark }) => ({
  flex: "1",
  ul: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    justifyContent: "center",
    listStyle: "none",
    li: {
      a: {
        color: isDark ? "#404040" : "#ffffff ",
        textDecoration: "none",
        fontSize: "18px",
        cursor: "pointer",
      }
    }
  },
}));


const NavBar = () => {

  // const {isArabic} = useContext(LanguageChange)
  const { isDark } = useContext(ThemeContext)
  return (
    <LanguageContext.Provider>
      <NavBarStyle isDark={isDark}>
        <Box>
          <ul>
            <li>
              <Link className="items" to="/product_page">
                Collection</Link>
            </li>
            <li>
              <Link className="items">New In</Link>
            </li>
            <li>
              <Link className="items">Modiweek</Link>
            </li>
            <li>
              <Link className="items">Plus Size</Link>
            </li>
            <li>
              <Link className="items">Sustainability</Link>
            </li>
          </ul>
        </Box>
      </NavBarStyle>
      
    </LanguageContext.Provider>
  )
}

export default NavBar
