import { Box, Button, Container, List, ListItem } from '@mui/material';
import React, { useState, useEffect } from 'react';
import SearchIcon from '../../IconsAll/SearchIcon';
import CloseIcon from '../../IconsAll/CloseIcon';
import styled from 'styled-components';
import ProductPage from '../../Pages/ProductPage/ProductPage';
import ProductPage2 from '../../Pages/ProductPage/ProductPage2';
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

        " &::-webkit-scrollbar": {
          width: "4px",
        },

        /* Handle */
        "&::-webkit-scrollbar-thumb ": {
          background: " #f5f5f5",
          borderRadius: "10px;"
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
}));

const Search = (isProductPg) => {
  const [isOpen, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearchBanner, setIsSearchBanner] = useState();

  // Sample data to filter
  // const data = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes', 'Watermelon'];

  // Filter logic
  // useEffect(() => {
  //   if (searchTerm === '') {
  //     setResults([]);
  //   } else {
  //     const filtered = data.filter((item) =>
  //       item.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setResults(filtered);
  //   }
  // }, [searchTerm]);

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
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchIcon className="searhIconSvg" />
              <List>
                {results.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </List>
              <Box className="searchListProduct">

                <ProductPage2
                  showImage={false}
                />
              </Box>
            </Container>
          </Box>
        </Box>
      )}
    </SearchStyle>
  );
};

export default Search;
