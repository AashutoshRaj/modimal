// src/components/ProductShowCard.jsx

import { Box } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import WishListIcon from '../IconsAll/WishListIcon';
import { ThemeContext } from '../../ContextA/ThemeContext';
import { Link } from 'react-router-dom';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import CartIcon from '../IconsAll/CartIcon';

const BestSellersStyles = styled(Box)(({ isDark }) => ({
  ".innerCard": {
    maxWidth: '100%',
    ".productImage": {
      position: 'relative',
      paddingTop: '130%',
      img: {
        width: '100%',
        position: 'absolute',
        top: '0',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'top',
      },
      ".wishListIcon": {
        position: 'absolute',
        top: '15px',
        right: '15px',
        cursor: 'pointer',
        background: 'transparent',
        border: '0',
        outline:'unset',
        "&:hover svg path": {
          fill: "#ff5656",
          stroke: "#ff5656",
        },
        ".selectedWishList":{
          svg:{
            path:{
                fill: "#ff5656",
             stroke: "#ff5656",
            }
          }
        }
      }
      
    },
    ".productInfo": {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: "10px 0",
      a: {
        gridColumn: "span 3",
        fontWeight: "bold",
        fontSize: "16px",
        color: isDark ? "#000000" : "#ffffff",
        textDecoration: "none",
      },
      p: {
        gridColumn: "span 3",
        fontSize: "16px",
        color: isDark ? "#000000" : "#ffffff",
        margin:"0",
      },
      span: {
        textAlign: 'right',
        fontWeight: "bold",
        fontSize: "16px",
        color: isDark ? "#000000" : "#ffffff",
      },
    },
  },
}));

const ProductShowCard = ({ productImage, productName, productCategory, productPrice, thumbnailImages, productDescription,wishListIcon  }) => {
  const { isDark } = useContext(ThemeContext);
  const [isWishList, setWishList] = useState(false);






  return (
    <BestSellersStyles isDark={isDark}>
      <Box className="innerCard">
        <Box className="productImage">
          <img src={productImage} alt={productName} />
          <button className="wishListIcon" onClick={() => setWishList(!isWishList)}>
            <Box className={isWishList ? 'selectedWishList' : ''}>
              {wishListIcon}
            </Box>
          </button>
        </Box>
        <Box className="productInfo">
          <Link
            to="/product_detail"
            state={{ productImage, productName, productCategory, productPrice, thumbnailImages, productDescription }}
          >
            {productName}
          
          </Link>
          {/* <p>{productCategory}</p> */}
          <span>{productPrice}</span>

          
          {/* <ButtonComponent svgIcon=<CartIcon/> /> */}
        </Box>
      </Box>
    </BestSellersStyles>
  );
};

export default ProductShowCard;
