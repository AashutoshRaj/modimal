import { Box, Container, Link, TextField } from '@mui/material';
import React, { useState } from 'react';
import HeadingH3 from '../HeadingH3/HeadingH3';
import styled from 'styled-components';
import image1 from '../../assets/bestSellersImages/image1.png';
import image2 from '../../assets/bestSellersImages/image2.png';
import image3 from '../../assets/bestSellersImages/Rectangle 12348.png';
import image4 from '../../assets/ModiWeekImages/sunday.png';
import WishListIcon from '../IconsAll/WishListIcon';
import ProductShowCard from '../ProductShowCard/ProductShowCard';

const BestSellersStyles = styled(Box)(({ theme }) => ({
  padding: '88px 0',
  '.headingBlock': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  '.searchBox': {
    marginBottom: '24px',
  },
  '.innerBlockCards': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
}));

const BestSeller = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const BestSellerProducts = [
    {
      id: 1,
      productImage: image1,
      productName: 'tailored stretch',
      productCategory: 'turn it up pants',
      productPrice: '$180',
      productColors: '',
      wishListIcon: <WishListIcon />,
      top: 'top',
    },
    {
      id: 2,
      productImage: image2,
      productName: 'Technical Silk',
      productCategory: 'Make A Splash',
      productPrice: '$120',
      productColors: '',
      wishListIcon: <WishListIcon />,
      top: 'top',
    },
    {
      id: 3,
      productImage: image3,
      productName: 'Cool Weave',
      productCategory: 'Anywhere Dress',
      productPrice: '$210',
      productColors: '',
      wishListIcon: <WishListIcon />,
    },
    {
      id: 4,
      productImage: image3,
      productName: 'Cool Weave',
      productCategory: 'Anywhere Dress',
      productPrice: '$210',
      productColors: '',
      wishListIcon: <WishListIcon />,
    },
    {
      id: 5,
      productImage: image4,
      productName: 'Cool Weave',
      productCategory: 'Anywhere Dress',
      productPrice: '$210',
      productColors: '',
      wishListIcon: <WishListIcon />,
      top: 'top',
    },
  ];

  // Filter by 'top' and search term
  const filteredProducts = BestSellerProducts.filter(
    (item) =>
      item.top &&
      (item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.productCategory.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <BestSellersStyles>
      <Container>
        <Box className="headingBlock">
          <HeadingH3 title="BestSellers" />
          <Link to="">View All</Link>
        </Box>

        {/* <Box className="searchBox">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search product by name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box> */}

        <Box className="innerBlockCards">
          {filteredProducts.map((item, index) => (
            <ProductShowCard
              key={index}
              productImage={item.productImage}
              wishListIcon={item.wishListIcon}
              productName={item.productName}
              productCategory={item.productCategory}
              productPrice={item.productPrice}
              productColors={item.productColors}
              top={item.top}
            />
          ))}
        </Box>
      </Container>
    </BestSellersStyles>
  );
};

export default BestSeller;
