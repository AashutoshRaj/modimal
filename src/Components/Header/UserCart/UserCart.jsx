import React, { useEffect, useState } from 'react'
import Search from './Search'
import User from './User'
import { Box, Button } from '@mui/material'
import WishList from './WishList'
import Cart from './Cart'
import CartButton from './Cart'
import styled from 'styled-components'
import DarkTheme from './DarkTheme'
import LanguageChange from './LanguageChange'
import { ForLoginUser, LoginCartContext } from '../../../ContextA/CartContext'
import axios from 'axios'
import { useAuth } from '../../../AuthContext'
import { useProfileAuth, UserProfileContext } from '../../../UserProfileContext'
import noImage from '../../../assets/bestSellersImages/noimage.png'


const CartUserStyle = styled(Box)(({ theme }) => ({
    ".headerRightSide": {

        display: "flex",
        gap: "24px",
        alignItems:"center",
         span:{
            sub:{
                display: 'block',
                lineHeight: 'normal'
            }
        }
    },
    button: {
        minWidth: "24px",
        padding: "0",
    },
    ".userProfile":{
       width: '40px',
        height: '40px',
        borderRadius: '50%',
        overflow: 'hidden',
        img:{
            width:"100%",
        },
       
    }


}));
const UserCart = ({ searchTerm, setSearchTerm }) => {


 

    const {isAuthenticated } = useAuth([])
    const {userData, setUserData} = useProfileAuth([])
    console.log("userProfileShow", userData)
    console.log("userProfileShow", userData?.name)


    // const [isLoginCart, setIsLoginCart] = useState(true)
    return (
        <CartUserStyle>
            <Box className="headerRightSide">
                <>
                {isAuthenticated && userData ? <span>HI! {userData?.name}<sub>Welcome</sub></span> : " "

                }

                {/* {userData && isAuthenticated ? <span>HI! {userData?.name}</span> : " "} */}
                    

                </>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <User />
                <WishList />
                <ForLoginUser>
                    <CartButton />
                </ForLoginUser>
                <DarkTheme />
                <LanguageChange />
                <>
                 {isAuthenticated ?  (
                    <div className='userProfile'>
                        <img src={userData?.avatar || noImage}  alt='userImage'/>
                    </div>
                 ):(
                    <></>
                 )
                    }  
                </>
            </Box>
        </CartUserStyle>
    )
}

export default UserCart