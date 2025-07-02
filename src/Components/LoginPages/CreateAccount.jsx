import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import HeadingH3 from '../HeadingH3/HeadingH3';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import LoginPagesStyle from './LoginSignStyle';
import loginImages from '../../assets/ModiWeekImages/loginImage.png';
import { EyeIcon, OpenEye } from '../IconsAll/eyeIcon';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Input, RadioButton, Select } from '../AllFormFields/Input';

const CreateAccount = () => {
  const [isShowPwd, setIsShowPwd] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Registered data:', data);
    // 👉 You can send data to an API here (e.g. axios.post...)
  };

  return (
    <Container>
      <LoginPagesStyle>
        <Box className="imageBlock">
          <img src={loginImages} alt="signup visual" />
        </Box>

        <Box>
          <HeadingH3 title="Create Account" />
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Box ox className="field">
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                registerProps={register('firstName', {
                  required: 'This field is required',
                  message: 'Enter a valid email address',

                })}
                errorMessage={errors.firstName?.message}
              />
              {/* <input
                type="text"
                placeholder="First Name"
                {...register('firstName', { required: 'First name is required' })}
              />
              {errors.firstName && (
                <p className="errorValidation">{errors.firstName.message}</p>
              )} */}
            </Box>

            <Box className="field">
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                registerProps={register('lastName', {
                  required: 'This field is required',
                  message: 'Enter a valid email address',

                })}
                errorMessage={errors.lastName?.message}
              />
              {/* <input
                type="text"
                placeholder="Last Name"
                {...register('lastName', { required: 'Last name is required' })}
              />
              {errors.lastName && (
                <p className="errorValidation">{errors.lastName.message}</p>
              )} */}
            </Box>

            <Box className="field">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                registerProps={register('email', {
                  required: 'This field is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address',
                  },
                })}
                errorMessage={errors.email?.message}
              />
            </Box>

            <Box className="field relative">
              <Input
                type={isShowPwd ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                registerProps={register('password', {
                  required: 'Password is required',
                  message:"Set your strong Password"
                })}
                errorMessage={errors.password?.message}
              />


              <button
                type="button"
                onClick={() => setIsShowPwd((prev) => !prev)}
                className="IconEye"
              >
                {isShowPwd ? <OpenEye /> : <EyeIcon />}
              </button>


            </Box>

             <Box className="field relative">
                <Select

                />

            </Box>

            <Box className="field genderValue">
               <RadioButton
                  name="gender"
                  value="male"
                  label="Male"
                  className="gender"
                  // onChange={handleChange}
                  // checked={selectedValue === 'male'}
                />
                <RadioButton
                  name="gender"
                  value="female"
                  label="Female"
                  className="gender"
                  // onChange={handleChange}
                  // checked={selectedValue === 'male'}
                />
            </Box>


            <ButtonComponent type="submit" buttonTitle="Register Now" className="bgFill" />
          </form>

          <Box>
            <p>
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </Box>
        </Box>
      </LoginPagesStyle>
    </Container>
  );
};

export default CreateAccount;
