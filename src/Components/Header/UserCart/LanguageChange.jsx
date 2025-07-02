import { Box } from '@mui/material';
import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { ThemeContext } from '../../../ContextA/ThemeContext';

const LanguageChange = () => {

    const [isArabic, setIsArabic] = useState();

  function languageHandel()  {
    if(isArabic === 1){
       setIsArabic(isArabic) 
       console.log("Arbiaclangusge",setIsArabic)
    }else{
      setIsArabic(isArabic ===2)
      console.log("englishlangusge",setIsArabic)
    }
  }
  const { isDark } = useContext(ThemeContext)

const SelectStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
justifyContent: 'center',
alignItems: 'center',
   select:{
    background: 'transparent',
    border: '0',
    color: isDark ? "#000000" : "#ffffff"
   }
   


}));

  return (
    <SelectStyle isDark={isDark}>
        <select name="" id="" onClick={languageHandel}>
            <option value={1} selected>En</option>
            <option value={2}>Ar</option>           
            </select>  
    </SelectStyle>
  )
}

export default LanguageChange
