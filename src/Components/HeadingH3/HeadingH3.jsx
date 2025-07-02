import { Box } from '@mui/material';
import React, { useContext } from 'react'
import styled from 'styled-components';
import { ThemeContext } from '../../ContextA/ThemeContext';

const HeadingStyle = styled(Box)(({ theme,isDark }) => ({
   
    h3: {
        fontSize: '32px',
        fontFamily: '\'Montserrat\'',
        color: isDark ? "#0C0C0C" : "#ffffff" ,
        margin: "0",

    }


}));

const HeadingH3 = ({title,className}) => {

    const {isDark} = useContext(ThemeContext)
  return (
    <HeadingStyle isDark= {isDark} >
    <h3 className={className}>{title}</h3> 
    
    </HeadingStyle>
  )
}

export default HeadingH3
