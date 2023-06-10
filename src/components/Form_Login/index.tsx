import React from 'react'
import { useForm, Controller} from 'react-hook-form'
import {
  InputEmail,
  InputPassword
} from './styled';

interface inputProps{
  email: string;
  password: string;
}
type inputData = {
  data: inputProps;
}

export const {control, handleSubmit, formState: {errors}} = useForm({})

export function headleLogin({data}:inputData){
  console.log(data);

}

export default function Form() {

  return (
    <>
      <Controller
        control={control}
        name="email"
        render={({field:{onChange, onBlur, value}}) => (
          <InputEmail
            keyboardType='email-address'
            placeholder='Email'
            placeholderTextColor = {'#706D6F'}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({field:{onChange, onBlur, value}}) => (
          <InputPassword
            placeholder='Password'
            placeholderTextColor={'#706D6F'}
            secureTextEntry={true}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />  
      

      
    </>
  )
}