import { Box, Button, Container, List, ListItem } from '@mui/material';
import React, { useState, useEffect } from 'react';
import SearchIcon from '../../IconsAll/SearchIcon';
import CloseIcon from '../../IconsAll/CloseIcon';
import styled from 'styled-components';
import ProductPage from '../../Pages/ProductPage/ProductPage';
import ProductPage2 from '../../Pages/ProductPage/ProductPage2';
import axios from 'axios';
import FiltersBlock from '../../Filters/Filters';
import ProductShowCard from '../../ProductShowCard/ProductShowCard2';
import { Link } from 'react-router-dom';
// import ProductPage from '../../ProductPage/ProductPage';

const SearchStyle = styled(Box)(({ theme }) => ({
  '.searchPopUp': {
    position: 'fixed',
    zIndex: '99',
    background: '#0000009e',
    width: '100%',
    left: '0',
    top: '59px',
    height: '100vh',
    backdropFilter: 'blur(10px)',

    '.innerBlock': {
      background: '#ffffff',
      padding: '34px 0',
      ".searchListProduct": {
        height: 'calc(100vh - 200px)',
        overflow: 'auto',
        display:"grid",
      gridTemplateColumns:"repeat(3,1fr)",
        " &::-webkit-scrollbar": {
          width: "4px",
        },

        /* Handle */
        "&::-webkit-scrollbar-thumb ": {
          background: " #f5f5f5",
          borderRadius: "10px;"
        },
        ul:{
          gridColumn: 'span 2',
          gridTemplateColumns: 'repeat(2,1fr)',
          display: 'grid',
          gap: '15px',
          listStyle:"none",
          li:{
            img:{
              width:"100%",
            }
          }
        }
      },
    },

    input: {
      height: '56px',
      width: '100%',
      background: '#fff',
      border: '0',
      borderBottom: '1px solid #dddddd',
      padding: '0 15px 0 60px',
      fontSize: '20px',
      color: '#000000',
      outline: 'unset',
    },

    'svg.searhIconSvg': {
      position: 'absolute',
      left: '30px',
      top: '9px',
      width: '40px',
      height: '40px',
      path: {
        fill: '#ADADAD',
      },
    },
  },
  ".searchListProduct":{
      
  }
}));

const Search = (isProductPg) => {
  const [isOpen, setOpen] = useState(false);
  // const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearchBanner, setIsSearchBanner] = useState();


    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

       useEffect(() => {
         axios.get(`https://api.escuelajs.co/api/v1/products/${''}`)
         .then(res => setProducts(res.data))
        
      .catch(err => console.log(err));
  }, []);

   // Filter products based on search input
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SearchStyle>
      <Button onClick={() => setOpen(!isOpen)}>
        {!isOpen ? <SearchIcon /> : <CloseIcon />}
      </Button>

      {isOpen && (
        <Box className="searchPopUp">
          <Box className="innerBlock">
            <Container sx={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search "
                value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <SearchIcon className="searhIconSvg" />              
              {/* <List>
                {results.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </List> */}
              <Box className="searchListProduct">
                <FiltersBlock/>
                    <ul>
                      {filteredProducts.map(product => (
                        <li key={product.id}>                    
                          <div>
                            <img src={product.images[1]}/>
                          </div>
                        <Link to="/product_detail">
                          <strong>{product.title}</strong> — ${product.price}
                        </Link>
                        </li>
                      ))}
                     </ul>
               
              </Box>
            </Container>
          </Box>
        </Box>
      )}
    </SearchStyle>
  );
};

export default Search;
