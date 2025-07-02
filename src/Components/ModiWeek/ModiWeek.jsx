import { Box, Container } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';
import WishListIcon from '../IconsAll/WishListIcon';
import image1 from '../../assets/ModiWeekImages/sunday.png'
import HeadingH3 from '../HeadingH3/HeadingH3';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core styles
import 'swiper/css/navigation'; // Optional modules
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
const ModiWeekStyle = styled(Box)(({ theme }) => ({
    padding:"88px 0",
    ".customContainer":{
        // maxWidth: '80vw',
        // margin: '0 0 0 auto',
        // width: '100%',
        // paddingRight: '0',
        
    },
    ".modiWeekDayBlock":{
        display:"flex",
        overflow:"hidden",
        gap:"24px",
        marginTop:"24px",
        ".innerCard":{
            position:"relative"   ,
            img:{
                width:"100%",
            },
            svg:{
                position:"absolute",
                top:"15px",
                right:"15px",
                cursor:"pointer",
            },
            ".wishListIcon":{
                position: 'absolute',
                top: '15px',
                right: '15px',
                cursor: 'pointer',
                padding: '0',
                background: 'transparent',
                border: '0',
                outline:"unset",
                "&:hover":{
                    svg:{
                      path:{
                        fill:"#ff5656",
                        stroke:"#ff5656",
                      }
                    },
                },
                ".selectedWishList":{
                    svg:{
                        path:{
                            fill:"#ff5656",
                            stroke:"#ff5656",
                        }
                    }
                }

            }
        }
    }
}));


const ModiWeek = () => {

    const weekDays = [
     {
        weekDay:"Sunday",
        dressCode:image1,
     },
     {
        weekDay:"Monday",
        dressCode:image1,
        alt:"moodWeekImage"
     },
     {
        weekDay:"Tuesday",
        dressCode:image1,
        alt:"moodWeekImage"
     },
     {
        weekDay:"Wednesday",
        dressCode:image1,
        alt:"moodWeekImage"
     },
     {
        weekDay:"Thursday",
        dressCode:image1,
        alt:"moodWeekImage"
     },
     {
        weekDay:"Friday",
        dressCode:image1,
        alt:"moodWeekImage"
     },
     {
        weekDay:"Saturday",
        dressCode:image1,
        alt:"moodWeekImage"
     },
    ]
     const [isWishList, setWishList] = useState() 


  return (
    <ModiWeekStyle>
        <Container className='customContainer'>  
                <HeadingH3 title="Modiweek"/>
                <Box className="modiWeekDayBlock">                   
                <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                         breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4.5 }, // 👈 Show 4.5 slides on desktop
                        }}
                        >
                
                {
                weekDays.map((items, index)=>(
                    <SwiperSlide>
                       <Box key={index}>
                        <Box className="innerCard" >
                                <img src={items.dressCode} alt={items.alt}/>
                                 <button className="wishListIcon" onClick={()=>{setWishList(!isWishList)}}>   
                                                        {/* {!isWishList ? {wishListIcon} : selectedWishListed} */}
                                                                
                                                          {!isWishList ? (
                                                           <Box className=''><WishListIcon/></Box> 
                                                                   
                                                          ):(
                                                            <Box className='selectedWishList'><WishListIcon/></Box>      
                                                          )
                                
                                                          }                                         
                                                                
                                                        </button>
                            </Box> 
                            <h4>{items.weekDay}</h4>
                        </Box>  
                    </SwiperSlide> 
                   
                
                ))   
                }
                </Swiper>
                 </Box>    
         </Container>
    </ModiWeekStyle>
  )
}

export default ModiWeek
