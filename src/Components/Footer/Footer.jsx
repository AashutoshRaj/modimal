import { Box, Container, Link } from '@mui/material'
import React, { useContext } from 'react'
import styled from 'styled-components';
import { ThemeContext } from '../../ContextA/ThemeContext';



const FooterStyle = styled(Box)(({ theme,isDark}) => ({
    background: isDark ? "#404040" : "#000000",
    padding:"40px 0",
    ".footerGridMain":{
        display: 'grid',
            gridTemplateColumns: 'repeat(6,1fr)',
            gap: '24px',
            color:"#ffffff",
            ".newLetter":{
                gridColumn: 'span 3',
                maxWidth: '520px',
                ".newsLetterInput":{
                    input:{
                        width: '100%',
                        height: '40px',
                        padding: '0 15px',
                    },
                },
                ".confirmCheck":{
                   display: 'flex',
                    gap: '10px',
                    "input":{
                        width: '25px',
                        background: '#fff',
                        accentColor: '#fff'
                    },
                    p:{
                        fontSize:"12px",
                        fontWeight:"600",
                    }
                }
            },
            ".footerGrid":{
                h4:{
                    fontSize:"20px",
                    marginTop:"0",
                },
                ul:{
                    padding:"0",
                    listStyle:"none",
                    li:{
                        a:{
                            color:"#fff",
                            lineHeight:"32px",
                            display:"block",
                            marginBottom:"8px",
                            fontSize:"18px",
                            textDecoration:"none",
                            cursor:"pointer",
                            "&:hover":{
                                color:"gray"
                            },

                        },
                    },
                },
            },
    },

}));
const Footer = () => {
  const {isDark} = useContext(ThemeContext)
  return (
    <FooterStyle isDark={isDark}>
           
     <Container>
        <Box className="footerGridMain">
                <Box className="footerGrid newLetter">
                       <h4>Join our club, get 15% off for your Birthday</h4> 
                       <Box className="newsLetterInput">
                            <input type='text'placeholder='Enter Your Email Address'/>
                       </Box>
                       <Box className="confirmCheck">
                            <input type='checkbox'/>
                            <p>By Submittng your email, you agree to receive advertising emails from Modimal.</p>
                       </Box>
                </Box>
                <Box className="footerGrid quickLinks">
                         <h4>About Modimal</h4> 
                         <ul>
                            <li>
                                <Link to="">Collection</Link>
                            </li>
                            <li>
                                <Link to="">Sustainability</Link>
                            </li>
                            <li>
                                <Link to="">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="">Support System</Link>
                            </li>
                            <li>
                                <Link to="">Terms & Condition</Link>
                            </li>
                            <li>
                                <Link to="">Terms & Condition</Link>
                            </li>
                         </ul>
                </Box>
                <Box className="footerGrid quickLinks">
                         <h4>Help & Support</h4> 
                         <ul>
                            <li>
                                <Link to="">Orders & Shipping</Link>
                            </li>
                            <li>
                                <Link to="">Returns & Refunds</Link>
                            </li>
                            <li>
                                <Link to="">FAQs</Link>
                            </li>
                            <li>
                                <Link to="">Contact Us</Link>
                            </li>
                          
                         </ul>
                </Box>
                <Box className="footerGrid quickLinks">
                         <h4>Join Up</h4> 
                         <ul>
                            <li>
                                <Link to="">Modimal Club</Link>
                            </li>
                            <li>
                                <Link to="">Careers</Link>
                            </li>
                            <li>
                                <Link to="">Visit Us</Link>
                            </li>
                           
                         </ul>
                </Box>
                </Box>
     </Container> 
          
    </FooterStyle>
  )
}

export default Footer
