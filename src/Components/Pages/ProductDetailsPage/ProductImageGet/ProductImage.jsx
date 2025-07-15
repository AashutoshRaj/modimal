// src/pages/ProductImageGet/ProductImage.jsx

import { Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const ThumBNailStyling = styled(Box)(({ theme }) => ({
  '.productImageT': {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '15px',

    '.thumbNailImages': {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },

    '.thumImages img': {
      width: '100%',
      border: '1px solid #ddd',
      borderRadius: '4px',
      objectFit: 'cover',
    },

    '.productBigImg': {
      gridColumn: 'span 4',
      img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '4px',
        border: '1px solid #ddd',
      },
    }
  }
}));

const ProductImage = ({ mainImage, thumbnailImages }) => {
  return (
    <ThumBNailStyling>
      <Box className="productImageT">
        {/* Thumbnail List */}
        <Box className="thumbNailImages">
          {thumbnailImages && thumbnailImages.map((img, index) => (
            <Box key={index} className="thumImages">
              <img src={img} alt={`Thumbnail ${index}`} />
            </Box>
          ))}
        </Box>

        {/* Main Image */}
        <Box className="productBigImg">
          {mainImage ? (
            <img src={mainImage} alt="Main Product" />
          ) : (
            <div>No main image available</div>
          )}
        </Box>
      </Box>
    </ThumBNailStyling>
  );
};

export default ProductImage;
