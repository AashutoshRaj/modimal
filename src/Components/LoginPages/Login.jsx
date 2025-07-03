import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import HeadingH3 from '../HeadingH3/HeadingH3';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import LoginPagesStyle from './LoginSignStyle';
import loginImages from '../../assets/ModiWeekImages/loginImage.png';
// import { EyeIcon, OpenEye } from '../IconsAll/eyeIcon';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../AuthContext';
import { useForm } from 'react-hook-form';
import { Input } from '../AllFormFields/Input';
// import { EyeIcon, OpenEye } from '../IconsAll/eyeIcon';

const Login = () => {
  const navigate = useNavigate();
  const [isShowPwd, setIsShowPwd] = useState(false);
  const [loginError, setLoginError] = useState(""); 
  const { setIsAuthenticated } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };

    setLoginError(""); 

    axios
      .post(`https://api.escuelajs.co/api/v1/auth/login`, payload)
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.data.access_token));
        setIsAuthenticated(true);
        navigate('/product_detail');
      })
      .catch((err) => {
        console.error('Login failed', err);
        setLoginError("Invalid email or password. Please try again."); 
      });
  };

  return (
    <Container>
      <LoginPagesStyle>
        <Box className="imageBlock">
          <img src={loginImages} alt="login visual" />
        </Box>
        <Box>
          <HeadingH3 title="Log In" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box className="field">
              <Input
                type="email"
                name="email"
                label="Email"
                registerProps={register('email', {
                  required: 'This field is required',
                  pattern: {
                    // value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                   
                    message: 'Enter a valid email address',
                  },
                   value:"john@mail.com",
                })}
                errorMessage={errors.email?.message}
              />
            </Box>

            <Box className="field relative">
              <Input
                type={isShowPwd ? 'text' : 'password'}
                name="password"
                label="Password"
                
                registerProps={register('password',
                   {
                  required: 'Password is required',
                   value:"changeme",
                })}
                errorMessage={errors.password?.message}
              />
              <button
                type="button"
                onClick={() => setIsShowPwd((prev) => !prev)}
              >
                {isShowPwd ? "O" : "E"}
              </button>
            </Box>

         
            {loginError && (
              <p className="errorValidation">{loginError}</p>
            )}

            <Box className="field">
              <Link to="#">Forgot Your Password?</Link>
            </Box>

            <ButtonComponent
              buttonTitle="Log In"
              className="bgFill"
              type="submit"
            />
          </form>

          <Box>
            <p>
              New to Modimal? <Link to="/create_account">Create Account</Link>
            </p>
          </Box>
        </Box>
      </LoginPagesStyle>
    </Container>
  );
};

export default Login;
