import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import WishListIcon from '../../IconsAll/WishListIcon';
import bannerImage from './Frame 427319608.png';
import ProductShowCard from '../../ProductShowCard/ProductShowCard';
import FiltersBlock from '../../Filters/Filters';
import axios from 'axios';
import { UserProfileContext } from '../../../UserProfileContext';
import { useParams } from 'react-router-dom';

const ProductPageStyle = styled(Box)(({ theme }) => ({
  padding: "0px 15px",
  ".bannerBlock": {
    position: "relative",
    margin: "0 -15px 48px",
    img: {
      width: "100%",
    },
  },
  ".productPage": {
    display: "flex",
    gap: "24px",
    ".filterSideBar": {
      width: "100%",
      maxWidth: "392px",
    },
    ".productLists": {
      flex: "1",
      ".allProductLists": {
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "15px",
      },
    },
  },
}));

const ProductPage2 = ({ isSearchBanner = true, showImage = true }) => {
  const [products, setProducts] = useState([]);
  // const [isProductPg, setIsProductPage] = useState(true);

  useEffect(() => {
    // console.log(113123, id) 

    // ProductsGetAPI
    axios.get(`https://api.escuelajs.co/api/v1/products`)
      .then((res) => {
        setProducts(res.data);
        console.log("Products fetched:", res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });

  }, []);

  // const {isLoading} = UserProfileContext()
  return (
    <ProductPageStyle>

      {/* {isSearchBanner && (
        <Box className="bannerBlock">
          <img src={bannerImage} alt="Banner" />
        </Box>
      )} */}

      {showImage && <Box className="bannerBlock">
        <img src={bannerImage} alt="Banner" />
      </Box>}
      <Container>
        <Box className="productPage">
          <Box className="filterSideBar">
            <FiltersBlock />
          </Box>
          <Box className="productLists">
            <Box className="allProductLists">
              {products.map((item, index) => (
                <ProductShowCard
                  key={index}
                  pid = {item.id}
                  productName={item.title}
                  productImage={item.images?.[0]}
                  productPrice={`$${item.price}`}
                  wishListIcon={<WishListIcon />}
                  productCategory={item.category?.name}
                  productDescription={item.description}
                  thumbnailImages={item.images?.[1]}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </ProductPageStyle>
  );
};

export default ProductPage2;
