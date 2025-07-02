import React from 'react'
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
import image5 from './image5.png'
import { Box, Container } from '@mui/material'
import HeadingH3 from '../HeadingH3/HeadingH3'
import styled from 'styled-components';

const FollowUsStyle = styled(Box)(({ theme }) => ({
    padding:"88px 0 48px",
    ".innerCards":{
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        marginTop:"24px",
        img:{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        ".one":{
            gridArea: '1/1/3/3',
        },

       ".two": {
            gridArea: '1/3/2/3',
        }
    }
  
  }));

const FollowUs = () => {

   const socialImages= [
    {
        image:image1,
        className:"one"
    },
    {
        image:image2,
         className:"two"
    },
    {
        image:image3,
         className:"three"
    },
    {
        image:image4,
         className:"four"
    },
    {
        image:image5,
         className:"five"
    },
   ] 

  return (
    <FollowUsStyle>
    <Container>
        <HeadingH3 title="Follow us @modimal"/>
            <Box className="innerCards">
            {
        socialImages.map((items, index)=>(
            <Box key={index} className={items.className}>
                <img src={items.image}/>
            </Box>
        ))
      }
            </Box>
    </Container>
    </FollowUsStyle>
  )
}

export default FollowUs
