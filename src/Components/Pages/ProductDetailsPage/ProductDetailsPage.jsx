// src/pages/ProductDetail.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import ProductImage from './ProductImageGet/ProductImage';
import ProductInfo from './ProductInfo/ProductInfo';
import styled from 'styled-components';
import YouMayLike from '../../YouMayLike/YouMayLike';
import axios from 'axios';

const ProductInfoStyle = styled(Box)(({ theme, isDark }) => ({
  ".productDetailsBlock": {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "24px",
  }
}));

const ProductDetail = () => {
  const [productData, setProductData] = useState(null);
  const { pId } = useParams();

  useEffect(() => {
    if (!pId) return;

    axios.get(`https://api.escuelajs.co/api/v1/products/${pId}`)
      .then((res) => {
        setProductData(res.data);
        console.log("Products fetched:", res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, [pId]);

  if (!productData) return <div>Loading product details...</div>;

  return (
    <ProductInfoStyle>
      <Container>
        <Box className="productDetailsBlock">
          <Box>
            <ProductImage 
              productImage={productData.images?.[1]} 
              thumbnailImages={productData.images} 
            />
          </Box>
          <Box>
            <ProductInfo
              title={productData.title}
              description={productData.description}
              price={productData.price}
              category={productData.category?.name}
            />
          </Box>
        </Box>

        <YouMayLike />
      </Container>
    </ProductInfoStyle>
  );
};

export default ProductDetail;
