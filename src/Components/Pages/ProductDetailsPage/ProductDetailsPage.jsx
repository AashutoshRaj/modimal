// src/pages/ProductDetail.jsx

import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Box, Container } from '@mui/material';
import ProductImage from './ProductImageGet/ProductImage';
import ProductInfo from './ProductInfo/ProductInfo';
import styled from 'styled-components';
import YouMayLike from '../../YouMayLike/YouMayLike';




const ProductInfoStyle = styled(Box)(({ theme, isDark }) => ({
  ".productDetailsBlock": {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "24px",
  }


}));


const ProductDetail = () => {
  const location = useLocation();
  const { pId } = useParams(); // {pId:"34535"}
  const { productImage, productName, productDescription, productPrice, thumbnailImages, returnPolicy } = location.state || {};


  useEffect(() => {
    console.log(pId)
    
  }, [])
  return (
    <ProductInfoStyle>

      <Container>
        <Box className="productDetailsBlock">
          <Box>
            <ProductImage productImage={productImage} thumbnailImages={thumbnailImages} />
          </Box>
          <Box>
            <ProductInfo
              productName={productName}
              productDescription={productDescription}
              productPrice={productPrice}
              returnPolicy={returnPolicy}
            />
          </Box>
        </Box>

        <YouMayLike />

      </Container>
    </ProductInfoStyle>
  );
};

export default ProductDetail;
