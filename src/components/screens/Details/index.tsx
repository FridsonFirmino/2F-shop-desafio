import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import { useProd } from '../../../contexts/prodContext'
import { shoesDATA } from '../../../DataShoes/DATA';
import { Stars } from '../../FiveStars';
import Separator from '../../Separator';

import { 
  Container,
  ItemImage,
  ItemImageArea,
  ItemInfoArea,
  ItemName,
  ItemPrice,
  DescriptionTitle,
  Description,
  ButtonGoBack,
  IconButtonCart,
  HeaderDetails,
  ButtonAddCart,
  ButtonAddCartName
} from './styled';
import { ItemsInCart } from '../../QtdItems';

export function Details() {
  const [shoe, setShoe] = useState<shoesDATA>({} as shoesDATA)
  const [cartStoreged, setCartStoreged] = useState<shoesDATA[]>([])


  const prods = useProd()
  const { params } = useRoute<any>()
  const navigation = useNavigation()

  const headleQtdItemsInCart = async () => {
    const itemStoreged = await AsyncStorage.getItem('@2Fshop:shoes')
    const previous = itemStoreged ? JSON.parse(itemStoreged) : []
    setCartStoreged(previous)
  }

  async function handleAddItemInCart(itemId:String){
    const item = (prods.shoes.filter(({id}) => id === itemId)[0])
      try {
          const response = await AsyncStorage.getItem("@2Fshop:shoes");
          const previous = response ? JSON.parse(response) : []
          
          const itemList = [...previous, item]
          await AsyncStorage.setItem('@2Fshop:shoes', JSON.stringify(itemList))
          alert('product successfully added!')
        return
      }catch(error) {
        alert(error)
      }
  } 

  useEffect(()=>{
    headleQtdItemsInCart()
    setShoe(prods.shoes.filter(({id}) => id == params?.prodId)[0])
  }, [params?.prodId, cartStoreged])

  return (
    <Container>
      <ItemImageArea>
        <HeaderDetails>
          <ButtonGoBack onPress={() => navigation.goBack()} activeOpacity={0.6} > 
            <Ionicons 
              name='arrow-back'
              color={'#5700AF'}
              size={28}
            />
          </ButtonGoBack>

          <IconButtonCart onPress={() => navigation.navigate('cartShop')}>
            <Ionicons 
              name='cart-outline'
              color={'#5700AF'}
              size={28}
            />
            <ItemsInCart>{String(cartStoreged.length)}</ItemsInCart>
          </IconButtonCart>
        </HeaderDetails>

        <ItemImage
          source={shoe.image}
          resizeMode='contain'
        />
      </ItemImageArea>

      <ItemInfoArea showsVerticalScrollIndicator={false}>
        <ItemPrice>${String(shoe.prices)} </ItemPrice>
        <Stars/>
        <ItemName>{ shoe.name }</ItemName>

        <Separator/>

        <DescriptionTitle>Shoe Description </DescriptionTitle>
        <Description>
          {shoe.description}
        </Description>

        <ButtonAddCart activeOpacity={0.6} onPress={() => handleAddItemInCart(shoe.id)}>
          <ButtonAddCartName>Add Cart</ButtonAddCartName>
        </ButtonAddCart>
      </ItemInfoArea>

    </Container>
    
  );
}