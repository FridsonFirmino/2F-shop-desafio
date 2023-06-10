import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { shoesDATA } from '../../../DataShoes/DATA';
import { StatusBar } from 'expo-status-bar';

import { 
  Container,
  DetailsCartArea,
  DetailsCart,
  CartValues,
  SubTotal,
  SubTotalValue,
  Shipping,
  ShippingValue,
  Total,
  TotalValue
} from './styled';
import { FlatList } from 'react-native';
import Cart from '../../Cart';
import Separator from '../../Separator';
import MyButton from '../../MyButton';



export function CartShop() {
  const [cartStoreged, setCartStoreged] = useState<shoesDATA[]>([])

  async function handleRemoveItemInCart(itemId:String){
    const response = await AsyncStorage.getItem("@2Fshop:shoes");
    const previous = response ? JSON.parse(response) : []

    const newItemList = ([...previous].filter(({id}) => id != itemId))

    await AsyncStorage.setItem('@2Fshop:shoes', JSON.stringify(newItemList))
  } 

  const renderItem2 = ({item}: {item: shoesDATA}) => {
    return (
      <Cart item={item} onPress={() => handleRemoveItemInCart(item.id)}/>
    );
  };

  async function handleCheckStorage() {
    const response = await AsyncStorage.getItem("@2Fshop:shoes");
    const data = response ? JSON.parse(response) : []
    setCartStoreged(data);
  }

  useEffect(() => {
    handleCheckStorage()
  },[cartStoreged])

  return (
    <Container>
      <StatusBar
        style='light'
      />

      <FlatList
        data={cartStoreged}
        renderItem={renderItem2}
      />

      <DetailsCartArea>
        <DetailsCart>
          <CartValues>
            <SubTotal>Sub Total:</SubTotal>
            <SubTotalValue>${'50'}</SubTotalValue>
          </CartValues>

          <CartValues>
            <Shipping>Shipping:</Shipping>
            <ShippingValue>${'2,5'}</ShippingValue>
          </CartValues>

          <CartValues>
            <Total>Total:</Total>
            <TotalValue>${'1000'}</TotalValue>
          </CartValues>

          <Separator/>
          <MyButton name='Proceed to checkout' onPress={() => alert('')}/>
        </DetailsCart>
      </DetailsCartArea>

    </Container>
    
  );
}