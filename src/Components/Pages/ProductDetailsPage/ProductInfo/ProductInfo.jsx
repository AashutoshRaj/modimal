import { Box, MenuItem, Select, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import ButtonComponent from '../../../ButtonComponent/ButtonComponent';
import loadingGif from './Loading_icon.gif'
import styled from 'styled-components';
import axios from 'axios';


const ProductDetailsStyle = styled(Box)(({ theme, isDark }) => ({
  ".allInfo": {
    ".loaderImg": {
      width: '60px',
      position: 'absolute',
      top: '0',
      right: '0',
      objectFit: 'cover',
    },
    ".cartBtn": {
      position: "relative",
      marginTop: "15px",
      button: {
        width: "100%",
        maxWidth: "100%",
        height: "50px"
      }
    }
  }


}));

    

const ProductInfo = ({title, description, price}) => {
  // const { pId } = useParams(); // {pId:"34535"}
  const [productData, setProductData] = useState(null);
  const [size, setSize] = useState(''); 

  const handleChange = (event) => {
    setSize(event.target.value);
  };




   
  return (
    <ProductDetailsStyle>
      <Box className="allInfo">
          <h2>{title}</h2>
          <p>{description}</p>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="subtitle1" fontWeight="bold">
               Size
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer' }}>
               Size Guide
            </Typography>
          </Box>
            <Select
              value={size}
              onChange={handleChange}
              displayEmpty
              fullWidth
            > 
           
            <MenuItem value="" disabled>Select Size</MenuItem>
            <MenuItem value="XS">XS</MenuItem>
            <MenuItem value="S">S</MenuItem>
            <MenuItem value="M">M</MenuItem>
            <MenuItem value="L">L</MenuItem>
            <MenuItem value="XL">XL</MenuItem>
          </Select>
        </Box>

        <Box className="cartBtn">

          <ButtonComponent buttonTitle={`Add To Cart +${price}` }className="bgFill" />

        </Box>

        <Box>
          <p></p>
        </Box>
      </Box>


    </ProductDetailsStyle>
  )
}

export default ProductInfo
