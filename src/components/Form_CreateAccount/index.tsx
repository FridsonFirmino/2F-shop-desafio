import React from 'react'
import {
  InputUserName,
  InputEmail,
  InputPassword,
  InputConfirmPassword
} from './styled';

export default function Form() {
  return (
    <>
      <InputUserName
        placeholder='User Name'
        placeholderTextColor = {'#706D6F'}
      />
      <InputEmail
        keyboardType='email-address'
        placeholder='Email'
        placeholderTextColor = {'#706D6F'}
      />
      <InputPassword
        placeholder='Password'
        placeholderTextColor={'#706D6F'}
        secureTextEntry={true}
      />
      <InputConfirmPassword
        placeholder='Confirm Password'
        placeholderTextColor={'#706D6F'}
        secureTextEntry={true}
      />  
    </>
  )
}