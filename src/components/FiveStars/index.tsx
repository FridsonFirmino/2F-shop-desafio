import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Conteiner,StarsText ,StarsArea } from './styled';

export function Stars() {
  return (
    <Conteiner > 
      <StarsArea>
        <Ionicons 
          name="star"
          size={15}
          color='#5700AF'
        />
        <Ionicons 
          name="star"
          size={15}
          color='#5700AF'
        />
        <Ionicons 
          name="star"
          size={15}
          color='#5700AF'
        />
        <Ionicons 
          name="star"
          size={15}
          color='#5700AF'
        />
        <Ionicons 
          name="star-outline"
          size={15}
          color='#5700AF'
        />
      </StarsArea>
      <StarsText>4 reviews</StarsText>
    </Conteiner>
  )
}