// src/components/ProductImage.jsx

import { Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const ThumBNailStyling = styled(Box)(({ theme }) => ({
  '.productImageT': {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '15px',

    ".thumbNailImages": {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },

    ".thumImages img": {
      width: '100%',
      border: '1px solid #ddd',
      borderRadius: '4px',
    },

    ".productBigImg": {
      gridColumn: 'span 4',

      img: {
        width: '100%',
        objectFit: 'cover',
        borderRadius: '4px',
      },
    }
  }
}));

const ProductImage = ({ productImage, thumbnailImages }) => {
  // console.log(thumbnailImages,productImage)
  return (
    <ThumBNailStyling>
      <Box className="productImageT">
        <Box className="thumbNailImages">
          <Box className="thumImages">
            <img src={thumbnailImages} alt="Thumbnail" />
          </Box>
        </Box>
        <Box className="productBigImg">
          <img src={productImage} alt="Main Product" />
        </Box>
      </Box>
    </ThumBNailStyling>
  );
};

<ProductImage 
  productImage="https://via.placeholder.com/600" 
  thumbnailImages="https://via.placeholder.com/150" 
/>

export default ProductImage;
