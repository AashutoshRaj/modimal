import { Box, Container, Link } from '@mui/material'
import React from 'react'
import HeadingH3 from '../HeadingH3/HeadingH3'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import image1 from '../../assets/CollectionImages/pic1.png'
import image2 from '../../assets/CollectionImages/pic2.png'
import image3 from '../../assets/CollectionImages/pic3.png'
import image4 from '../../assets/CollectionImages/pic4.png'
import styled from 'styled-components'


const CollectionStyle = styled(Box)(({ theme }) => ({
    ".collectionItems":{
        display:"grid", 
        gridTemplateColumns:"repeat(2,1fr)",
        gap:"24px",
        marginTop:"24px",
        ".collectionCards":{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: "64px",
            "&:nth-child(2)":{
              
               ".productCollection":{
                    "&:nth-child(1)":{
                        ".collectionButtonB":{
                            right: 'unset',
                            left: '10px',
                            bottom: '18px',
                        },
                    },
               },
            },
            img:{
                width:"100%",
            },
            ".productCollection":{
                position:"relative",
                ".collectionButtonB":{
                    position: 'absolute',
                    bottom: '21px',
                    right: '10px',
                    width: '100%',
                    maxWidth: '185px'
                },
                
            },
           
             }
    },
    
}));







const CollectionItems = ({id,image,collectionButton, path}) => {

    return (
        <>
      
           <Box className="productCollection">
                    <Box className="collectionImages">
                            <img src={image} alt=''/>
                    </Box>
                    <Link to={path} className="collectionButtonB">
                    <ButtonComponent 
                            buttonTitle={collectionButton}    />
                    </Link>
            </Box> 
        </>
    )
}


const Collection = () => {

    const collectionProducts = [
        {
            id:1,
            image:image2,
            collectionButton:"Boluses",
            path:"https://www.merriam-webster.com/dictionary/demo"

        },
        {
            id:2,
            image:image3,
            collectionButton:"Pants",

        },
        {
            id:3,
            image:image1,
            collectionButton:"Dresses",

        },
        {
            id:4,
            image:image4,
            collectionButton:"Outwear",

        },
         {
            id:5,
            image:image4,
            collectionButton:"Outwear",

        },
    ]

    // Split into two groups
  const firstGroup = collectionProducts.slice(0, 2);
  const secondGroup = collectionProducts.slice(2, 4);

    return (
        <CollectionStyle>
            <Container>
                <Box className="headingBlock">
                    <HeadingH3 title="Collection" />
                </Box>
                <Box className="collectionItems">

                <Box className="collectionCards">
                {firstGroup.map((items) => (
                    <CollectionItems
                        key={items.id}
                        collectionButton={items.collectionButton}
                        image={items.image}
                        path={items.path}
                        
                    />
                   
                    ))}
                   
                </Box>
                <Box className="collectionCards">
                {secondGroup.map((items) => (
                    <CollectionItems
                        key={items.id}
                        collectionButton={items.collectionButton}
                        image={items.image}
                        path={items.path}
                    />
                    ))}
                
                </Box>
                </Box>
            </Container>
        </CollectionStyle>
    )
}

export default Collection
