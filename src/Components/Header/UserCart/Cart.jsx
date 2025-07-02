import { Box, Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import CartIcon from '../../IconsAll/CartIcon'
import ButtonComponent from '../../ButtonComponent/ButtonComponent'
import styled from 'styled-components';
import CloseIcon from '../../IconsAll/CloseIcon';
import cartProduct1 from "../../../assets/bestSellersImages/image2.png"
import Counter from '../../Counter/Counter';
import { LoginCartContext } from '../../../ContextA/CartContext';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';


const CartPopUp = styled(Box)(({ theme }) => ({
  position: "relative",
  ".cartPop": {
    position: 'absolute',
    width: '392px',
    right: '0',
    background: '#fff',
    top: '42px',
    padding: '15px',
    ".closeBtn": {
      position: "absolute",
      right: "15px",
      top: "15px",
    },
    "&.cartAdded": {
      width: '31.25vw',
      maxWidth: '600px',
    },
  },
  ".emptyCart": {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: "600px",
    ".textBlock": {
      textAlign: "center",
      marginBottom: "72px",
      p: {
        textTransform: "capitalize",
        fontSize: "14px",
        span: {
          display: "block"
        }
      }
    },
    ".buttonBlock": {
      display: "grid",
      gap: "15px",
      width: "100%",

      a: {
        textDecoration: "none",
        button: {
          width: '100%',
          maxWidth: '185px',
          margin: 'auto',
        },
      }
    }
  },
  ".cartValue": {
    h4: {
      textAlign: "center",
    },
    ".cartProductsAll": {
      ul: {
        listStyle: 'none',
        padding: '0',
        maxHeight: '30.25vw',
        overflow: 'auto',
        maxHeight: '590px',
        li: {
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "0 8px",
          alignItems: "center",
          marginBottom: "1.667vw",
          ".productImage": {
            gridArea: '1/2/5/1',
            img: {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            },
          },
          "h5.productName": {
            gridArea: '1/2/1/5',
            fontSize: '16px',
            lineHeight: 'normal',
            margin: '0',
          },
          "p.size": {
            margin: '0',
            gridArea: '2/2/2/5'
          },
          "p.Counter": {
            margin: '0',
            gridArea: '4/2/4/3'
          },
          "p.Color": {
            margin: '0',
            gridArea: '3/2/3/5',
          },
          "p.price": {
            margin: '0',
            gridArea: '4/4/4/5',
            textAlign: 'right',
          },
        },
      },
    },
    ".buttonBlock": {
      button: {
        maxWidth: "100%",
        maxWidth: "392px",
        margin: "auto"
      },
    },
  },
}));

const CartButton = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isCartAdded, setCartAdded] = useState(false); // false means empty cart

  const { isAuthenticated } = useAuth();

  return (
    <CartPopUp>
      <Button onClick={() => setCartOpen(!isCartOpen)}>
        <CartIcon />
      </Button>

      {isCartOpen && (
        <Box className={`cartPop ${isCartAdded ? 'cartAdded' : ''}`}>
          <Button onClick={() => setCartOpen(false)} className="closeBtn">
            <CloseIcon />
          </Button>

          {!isAuthenticated ? (
            <Box className="emptyCart">
              <Box className="textBlock">
                <h4>Please Login First</h4>
                <p>
                  <span>Access your cart after login</span>
                </p>
              </Box>
              <Box className="buttonBlock">
                <Link to="/login">
                  <ButtonComponent buttonTitle="Login Now" className="bgFill" />
                </Link>
              </Box>
            </Box>
          ) : !isCartAdded ? (
            <Box className="emptyCart">
              <Box className="textBlock">
                <h4>Your shopping bag is empty</h4>
                <p>
                  <span>discover modimal</span>
                  and add products to your Bag
                </p>
              </Box>
              <Box className="buttonBlock">
                <Link to="/product_page">
                  <ButtonComponent buttonTitle="Collection" className="bgFill" />
                </Link>
                <Link to="">
                  <ButtonComponent buttonTitle="New In" className="bgFill" />
                </Link>
                <Link to="">
                  <ButtonComponent buttonTitle="Best Sellers" className="bgFill" />
                </Link>
              </Box>
            </Box>
          ) : (
            <Box className="cartValue">
              <h4>Your Cart</h4>
              <Box className="cartProductsAll">
                <ul>
                  {[1, 2, 3].map((item) => (
                    <li key={item}>
                      <Box className="productImage">
                        <img src={cartProduct1} alt='' />
                      </Box>
                      <h5 className="productName">Wrap Top</h5>
                      <p className="size">Size: <span>S</span></p>
                      <p className="Color">Color: <span>White</span></p>
                      <p className="Counter"><Counter /></p>
                      <p className='price'><strong>$180</strong></p>
                    </li>
                  ))}
                </ul>
                <Box className="buttonBlock">
                  <Link to="">
                    <ButtonComponent buttonTitle="Check Out" className="bgFill" />
                  </Link>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </CartPopUp>
  );
};


export default CartButton
