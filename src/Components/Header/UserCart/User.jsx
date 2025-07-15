import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import UserIcon from '../../IconsAll/UserIcon';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';

const DropDownStyle = styled(Box)(() => ({
  position: "relative",
  ".dropDown": {
    position: 'absolute',
    background: '#fff',
    right: '0',
    width: '200px',
    boxShadow: '0 0 0 #000, 0 0 9px #cfcfcf',
    borderRadius: '5px',
    ul: {
      listStyle: 'none',
      margin: "0",
      padding: "0",
      li: {
        padding: "15px",
        cursor:"pointer",
        a: {
          display: "block",
          lineHeight: "40px",
          cursor: "pointer",
        },
        button: {
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          color: '#000',
          lineHeight: '40px',
        },
        "&:hover": {
          background: "#f2f2f2",
        },
      }
    }
  }
}));

const User = () => {
  const [isDropdown, setIsDropdown] = useState(); // default to false for hiding

  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const logoutFun = () => {
    logout(); // this should handle clearing token + user
    navigate("/login"); 
  };

  return (
    <DropDownStyle>
      <Button onClick={() => setIsDropdown(!isDropdown)}>
        <UserIcon />
      </Button>

        {isDropdown && (
          <div className="dropDown">
          <ul>
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/my_account">My Account</Link>
                </li>
                <li onClick={logoutFun}>
                  <button >Logout</button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>  
        )

        }
    
     
    </DropDownStyle>
  );
};

export default User;
