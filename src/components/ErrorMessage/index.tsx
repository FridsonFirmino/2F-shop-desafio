import React from 'react'
import { ErrorText } from './styled';

type errorProp = {
  erro: string;
}

export default function MyError({ erro }:errorProp) {
  return (
    <>
      <ErrorText>{erro}</ErrorText>
    </>
  )
}