import { Box, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'

import styled from 'styled-components';
import image1 from '../../../assets/bestSellersImages/imageP1.png'
import image2 from '../../../assets/bestSellersImages/image2.png'
import image3 from '../../../assets/bestSellersImages/Rectangle 12348.png'
import image4 from '../../../assets/ModiWeekImages/sunday.png'
import WishListIcon from '../../IconsAll/WishListIcon';
import bannerImage from './Frame 427319608.png'
import FiltersBlock from '../../Filters/Filters';
import ProductShowCard from '../../ProductShowCard/ProductShowCard2';

const ProductPageStyle = styled(Box)(({ theme }) => ({
  padding: "0px 15px",
  ".bannerBlock": {
    position: "relative",
    margin: "0 -15px 48px ",
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

  }


}));


const ProductPage = ({ isSearchBanner }) => {

  const allProducts = [
    {
      id: 1,
      productImage: image1,
      alt: "",
      wishListIcon: <WishListIcon />,
      selectedWishListed: "d",
      productName: "tailored stretch",
      productCategory: "turn it up pants",
      productPrice: "$180",
      productColors: "",
      top: "top",
      path: "/product_detail",
      productDescription: "Versatile and universally flattering, our wrap boluse can be tied, draped, snapped and wrapped multiple ways."
    },
    {
      id: 2,
      productImage: image2,
      alt: "",
      wishListIcon: <WishListIcon />,
      productName: "Technical Silk",
      productCategory: "Make A Splash",
      productPrice: "$120",
      productColors: "",
      top: "top",
      path: "/product_detail",
      productDescription: "Versatile and universally flattering, our wrap boluse can be tied, draped, snapped and wrapped multiple ways."
    },
    {
      id: 3,
      productImage: image3,
      alt: "",
      wishListIcon: <WishListIcon />,
      productName: "Cool Weave",
      productCategory: "Anywhere Dress",
      productPrice: "$210",
      productColors: "",
      path: "/product_detail",
      productDescription: "Versatile and universally flattering, our wrap boluse can be tied, draped, snapped and wrapped multiple ways."

    },
    {
      id: 4,
      productImage: image3,
      alt: "",
      wishListIcon: <WishListIcon />,
      productName: "Cool Weave",
      productCategory: "Anywhere Dress",
      productPrice: "$210",
      productColors: "",
      path: "/product_detail",
      productDescription: "Versatile and universally flattering, our wrap boluse can be tied, draped, snapped and wrapped multiple ways."

    },
    {
      id: 5,
      productImage: image4,
      alt: "",
      wishListIcon: <WishListIcon />,
      productName: "Cool Weave",
      productCategory: "Anywhere Dress",
      productPrice: "$210",
      productColors: "",
      top: "top",
      path: "/product_detail",
      productDescription: "Versatile and universally flattering, our wrap boluse can be tied, draped, snapped and wrapped multiple ways."
    },
  ]

  const [products, setProducts] = useState()





  return (
    <ProductPageStyle>

      {!isSearchBanner ? (
        <Box className="bannerBlock">
          <img src={bannerImage} />
        </Box>
      ) : (
        " "
      )}

      <Container>
        <Box className="productPage">
          <Box className="filterSideBar">
            <FiltersBlock />
          </Box>
          <Box className="productLists">
            <Box className="allProductLists">
              {allProducts.map((items, index) => (
                <ProductShowCard
                  key={index}
                  productName={items.productName}
                  productImage={items.productImage}
                  wishListIcon={items.wishListIcon}
                  productCategory={items.productCategory}
                  productPrice={items.productPrice}
                  productColors={items.productColors}
                  top={items.top}
                  path={items.path}
                  productDescription={items.productDescription}

                />
              ))

              }
            </Box>
          </Box>
        </Box>
      </Container>
    </ProductPageStyle>
  )
}

export default ProductPage
