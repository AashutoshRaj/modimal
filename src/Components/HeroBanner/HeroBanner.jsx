import { Box, Container, Link } from '@mui/material'
import React, { Fragment } from 'react'
import bannerImage from '../../assets/hero.png'
import styled from 'styled-components';
import HeadingH1 from '../HeadingH1/HeadingH1';
import ButtonComponent from '../ButtonComponent/ButtonComponent';


const HeroBannerStyle = styled(Box)(({ theme }) => ({
    position:"relative",
".heroSection":{
    img:{
        width:"100%",
    },
} ,
".heroContent":{
    position: 'absolute',
    bottom: '103px',
    left: '50%',
    transform: 'translate(-50%)',
    width: '100%',
    // maxWidth: '1254px',
    // padding: '0 15px',
    h1:{
       maxWidth: '670px',
        lineHeight: 'normal',
        margin:"0",
    },
    ".bannerBtn":{
        marginTop:"27px",
    }
},
  
  }));

  
const HeroBanner = () => {
  return (
    <HeroBannerStyle>
       <Box>
            <Box className="heroSection">
                    <img src={bannerImage} alt='heroImage'/>
            </Box>
            <Container className="heroContent">
                <HeadingH1  title="Elegance In Simplicity Earth's Harmony"/>
                <Link to="">
                <ButtonComponent buttonTitle="New In" className="bannerBtn"/>
                </Link>
            </Container>
       </Box>
    </HeroBannerStyle>
  )
}

export default HeroBanner
