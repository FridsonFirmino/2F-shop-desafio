import React from 'react'
import { MyButtonArea, ButtonName } from './styled';


type propsMyButtonComponents = {
  name: string;
  onPress: () => void;
}
export default function MyButton({name, onPress}:propsMyButtonComponents) {
  return (
    <MyButtonArea
        activeOpacity={0.6}
        onPress={onPress}
      > 
      <ButtonName>{name}</ButtonName> 
    </MyButtonArea>
  )
}