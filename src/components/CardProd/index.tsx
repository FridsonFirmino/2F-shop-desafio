import React from 'react'
import { shoesDATA } from '../../DataShoes/DATA';
import { 
  Card, 
  DescriptionProdArea,
  ImageProd, 
  NameProd,
  ImageProdArea ,
  Price
} from './styled';

type shoesProps ={
  item: shoesDATA;
  onPress: () => void;
}

export default function CardProd({item, onPress}:shoesProps) {
  return (
    <Card activeOpacity={0.6} onPress={onPress}>
      <ImageProdArea>
        <ImageProd 
          source={item.image}
          resizeMode='contain'
          />
      </ImageProdArea>
      <DescriptionProdArea>
        <NameProd>{item.name}</NameProd>
        <Price>${String(item.prices)}</Price>
      </DescriptionProdArea>
    </Card>
  )
}