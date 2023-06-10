import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { 
  Container, 
  CreateAccountTitle,
  CreateAccountDescription,
  InputArea
} from './styled';

import MyButton from '../../MyButton';
import Form from '../../Form_CreateAccount';

export function Create_Account() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container>
      <InputArea>
        <CreateAccountTitle> Create Account</CreateAccountTitle>
        <CreateAccountDescription> Create an account so you can explore all the</CreateAccountDescription>
        <CreateAccountDescription> existing jobs</CreateAccountDescription>
        <Form />
        <MyButton 
          name='Sig up'
          onPress={()=>alert('Conta criada...')}
        />
        <CreateAccountDescription> Already have an account</CreateAccountDescription>
      </InputArea>
    </Container>
    </TouchableWithoutFeedback>
  );
}