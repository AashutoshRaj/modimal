import { Box, styled } from "@mui/material";

const LoginPagesStyle = styled(Box)(({ theme }) => ({
    display:"grid",
    gridTemplateColumns:"repeat(2,1fr)",
    alignItems:"center",
    gap:"128px",
    minHeight:"calc(100vh - 59px)",
   ".imageBlock":{
      img:{
          width:"100%",
      },
   },

    ".formFields":{

    },
    h3:{
        textAlign:"center",
        marginBottom:"32px",
    },
".field":{
    position:"relative",
    input:{
        height: '40px',
        width: '100%',
        background: '#ffffff',
        border: '1px solid #606060',
        padding: '0 16px',
        color:"#000000",
        borderRadius:"0",
        outline:"unset",
        fontSize:"16px",
        fontFamily:'Montserrat',

    },
     select:{
        height: '40px',
        width: '100%',
        background: '#ffffff',
        border: '1px solid #606060',
        padding: '0 16px',
        color:"#000000",
        borderRadius:"0",
        outline:"unset",
        fontSize:"16px",
        fontFamily:'Montserrat',

    },
    "&:not(last-child)":{
        marginBottom:"8px",
    },
    button:{
       position: 'absolute',
        right: '0',
        top: '25px',
        margin: '0',
        background: 'transparent',
        border: '0',
        outline: 'unset',
          "&.IconEye":{
        top:"0",
    }
    },
   "&.genderValue":{
    display:"flex",
    margin:"15px 0",
    gap:"15px",
    ".gender":{
        display:"flex",
        alignItems:"center",
        "input[type='radio']":{
              appearance: 'none',
                width: '20px',
                height: '20px',
                padding: '0',
                borderRadius: '50%',
                marginRight: '15px',
                marginTop: '0',
                cursor:"pointer",
                "&:checked":{
                    background:"#5A6D57",

                }
        }
    }
   }
},
button:{
    maxWidth:"100%",
    marginTop:"16px",
},
 ".errorValidation":{
        margin:"0",
        fontSize:"12px",
        color:"red",
    },
  
  }));

  export default LoginPagesStyle;