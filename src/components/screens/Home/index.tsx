import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  Container, 
  ProdArea, 
  TitleApp, 
  SearchInput,
  SearchInputArea,
  ProdItemArea,
  HeaderItemArea,
  ItemAreaTitle,
  TotalItems,
  FilterItems,
  Title,
  AppHeader,
  CartButton,
} from './styled';

import { DATAs, shoesDATA } from '../../../DataShoes/DATA';
import CardProd from '../../CardProd';
import { useProd } from '../../../contexts/prodContext'
import { ItemsInCart } from '../../QtdItems';


const imgTitle = require('../../../../assets/corrida.png')

export function Home() {
  const [inputSearch, setInputSearch] = useState('')
  const [listData, setListData] = useState(DATAs)
  const [cartStoreged, setCartStoreged] = useState<shoesDATA[]>([])
  
  const navigation = useNavigation()
  const prods = useProd()

  const headleQtdItemsInCart = async () => {
    const itemStoreged = await AsyncStorage.getItem('@2Fshop:shoes')
    const previous = itemStoreged ? JSON.parse(itemStoreged) : []
    setCartStoreged(previous)
  }

  useEffect(() => {
    headleQtdItemsInCart()
    if(inputSearch === ''){
      setListData(prods.shoes)
    }else{
      setListData(
        prods.shoes.filter(
          ({name}) => name.toLowerCase().includes(inputSearch.toLowerCase())
        ))
      }
    },[inputSearch,cartStoreged])

  
  const renderItem2 = ({item}: {item: shoesDATA}) => {
    return (
        <CardProd item={item} onPress={() => navigation.navigate('details', {prodId: item.id})
      }/>
    );
  };

  return (
    <Container>
      <AppHeader>
        <Image
          source={imgTitle}
        />
        <TitleApp>2F Shop</TitleApp>
        <CartButton onPress={() => navigation.navigate('cartShop')}>
          <Ionicons 
            name='cart-outline'
            color={'#5700AF'}
            size={30}
          />
          <ItemsInCart>{String(cartStoreged.length)}</ItemsInCart>
        </CartButton>
      </AppHeader>
      <ProdArea>
        <SearchInputArea>
          <SearchInput
            placeholder='Search here...'
            placeholderTextColor={'#a3a0a0'}
            autoCapitalize='none'
            value={inputSearch}
            onChangeText={(s) => setInputSearch(s)}
          />
          <Ionicons 
            name='search'
            color={'#5700AF'}
            size={25}
          />
        </SearchInputArea>
        <ProdItemArea>
          <HeaderItemArea>
            <ItemAreaTitle>
              <Title>Results</Title>
              <TotalItems>({listData.length} items)</TotalItems>
            </ItemAreaTitle>
            <FilterItems>
              <Ionicons 
                name="filter-outline"
                size={25}
                />
            </FilterItems>
          </HeaderItemArea>
          
          <FlatList
            data={listData}
            renderItem={renderItem2}
            keyExtractor={item => item.id}
            numColumns = {2}
            showsVerticalScrollIndicator={false}
          />
        </ProdItemArea>
      </ProdArea>
    </Container>
  );
}