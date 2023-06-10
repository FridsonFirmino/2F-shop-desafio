import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { shoesDATA } from '../../DataShoes/DATA';

import { 
  Container,
  DeleteArea,
  ImageProd,
  ImageProdArea,
  InfoArea,
  NameProd,
  DescriptionArea,
  PriceProd,
  TotalArea,
  SumArea,
  SubArea,
  Amount
} from './styled';

type shoesProps ={
  item: shoesDATA;
  onPress: () => void;
}

export default function Cart({item, onPress}:shoesProps) {
  const [amount, setAmount] = useState(1)

  return (
    <Container>
      <InfoArea>
        <ImageProdArea>
          <ImageProd 
            source={item.image}
            resizeMode='contain'
          />
        </ImageProdArea>

        <DescriptionArea>
          <NameProd>{item.name}</NameProd>
          <PriceProd>${String(item.prices)}</PriceProd>
          <TotalArea>
            <SubArea onPress={() => amount <= 1 ? setAmount(1) : setAmount(amount-1)}>
              <Ionicons 
                name='remove'
                color={'#5700AF'}
                size={15}
              />
            </SubArea>

            <Amount>{String(amount)}</Amount>

            <SumArea onPress={() => setAmount(amount+1)}>
              <Ionicons 
                name='add'
                color={'#5700AF'}
                size={15}
              />
            </SumArea>

          </TotalArea>
        </DescriptionArea>
      </InfoArea>

      <DeleteArea activeOpacity={0.6} onPress={onPress}>
        <Ionicons 
          name='trash-outline'
          color={'#5700AF'}
          size={27}
        />
      </DeleteArea>
    </Container>
  )
}