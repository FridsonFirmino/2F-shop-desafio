import React from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import MyButton from '../../MyButton';
import MyError from '../../ErrorMessage';

import { 
  Container, 
  InfoRegister, 
  LoginDescription, 
  LoginTitle, 
  Register,
  RegisterArea,
  DontAccountArea,
  InputEmail,
  InputPassword,
  InputArea
} from './styled';

type inputData = {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().required('Informe o seu email'),
  password: yup.string().required('Informe a sua password')
})

export function Login() {

  const navigation = useNavigation()
  const {control, setValue, handleSubmit, formState: {errors}} = useForm<inputData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = handleSubmit(data => {
    if(data.email === '1' && data.password === '1'){
      navigation.navigate('home');
    }else{
      alert('Acesso Negado');
      setValue('email', '')
      setValue('password','')
    }
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar
          style='dark'
        />
        <InputArea>
          <LoginTitle> Login Now</LoginTitle>
          <LoginDescription> Please enter the ditails below to continue</LoginDescription>
          
          <Controller
            control={control}
            name="email"
            render={({ field:{onChange, onBlur, value}}) => (
              <InputEmail
                keyboardType='email-address'
                placeholder='Email'
                placeholderTextColor = {'#706D6F'}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          {errors.email && <MyError erro={String(errors.email?.message)}/> }

          <Controller
            control={control}
            name="password"
            render={({ field:{onChange, onBlur, value}}) => (
              <InputPassword
                placeholder='Password'
                placeholderTextColor={'#706D6F'}
                secureTextEntry
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          {errors.password && <MyError erro={String(errors.password?.message)}/> }  

          <MyButton 
            name='Login' 
            onPress={onSubmit}
          />
          <DontAccountArea>
            <InfoRegister> 
              Don't have an account!
            </InfoRegister>
            <RegisterArea onPress={() => navigation.navigate('create_account')}> 
              <Register>Register</Register> 
            </RegisterArea>
          </DontAccountArea> 
        </InputArea>
        
      </Container>
    </TouchableWithoutFeedback>
  )
}