import { Box, Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components';



const ButtonStyle = styled(Box)(({ theme }) => ({
    button: {
        borderRadius: '0',
        backgroundColor: '#fff',
        color: '#000000',
        fontSize: '14px',
        width: '100%',
        maxWidth: '184px',
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s linear",
        outline: "unset",
        "&:hover": {
            backgroundColor: "#5A6D57",
            color: "#ffffff",
            
        },
        ".iconSvg":{
          fontSize: '25px',
            fontWeight: '100',
        },
    },
    ".bgFill":{
        button:{
            backgroundColor: "#5A6D57",
            color: "#ffffff",
            border:"1px solid #5A6D57",
            "&:hover":{
                backgroundColor: "#ffffff",
                color: "#5A6D57", 
                border:"1px solid #5A6D57",
            },
        },
    },
    ".accordingBtn":{
            button:{
                justifyContent: 'space-between',
                padding:"8px 16px"
            },
            "&.activeTab":{
                    button:{
                       backgroundColor:"#ffffff", 
                       color:"#5A6D57",
                       borderBottomColor:"#fff",
                    }
            }
    }

}));

const ButtonComponent = ({ buttonTitle, className, onClick, type, svgIcon, }) => {
    return (
        <ButtonStyle>

            <Box className={className}>

            <Button onClick={onClick}  type={type}>{buttonTitle}
                <span className='iconSvg'>{svgIcon}</span></Button>

            </Box>

        </ButtonStyle>
    )
}

export default ButtonComponent
