import { Box, Container } from '@mui/material'
import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import imageBg from "./Sustainability.png"
import styled from 'styled-components';



const MiddleBannerStyle = styled(Box)(({ theme }) => ({
  position:"relative",
  ".bannerBlock":{
      position:"relative",
  },
  img:{
    width: '100vw',
    transform: 'translateX(-50%)',
    marginLeft: '50%',
  },
  ".innerContent":{
    position: 'absolute',
    bottom: '43px',
    right: '0',
    maxWidth: '500px',
    p:{
      textTransform:"capitalize",
      fontSize:"20px",
    },
    ".susanabiltyBtn":{
      display:"flex",
      justifyContent:"flex-end",
    }
    }
}));
const MiddleBanner = () => {
  

  return (
    <MiddleBannerStyle>
          <Container>
      <Box className="bannerBlock">
        <img src={imageBg}/>
        <Box className="innerContent">

          <p>Stylish sustainability in clothing promotes eco-friendly choices for a greater future</p>
          <ButtonComponent buttonTitle="Sustainability" className='susanabiltyBtn'/>
        </Box>
        
      </Box>
          </Container>
    </MiddleBannerStyle>
  )
}

export default MiddleBanner
