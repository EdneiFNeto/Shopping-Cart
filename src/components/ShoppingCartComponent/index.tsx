import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import asyncStortage from '@react-native-community/async-storage'

import { 
  Container, 
  Icon, 
  ShoppingCart, 
  Badige,
} from './style';
import  { StateProps }  from "../../Model/statesProps";
import Item from "../../Model/item";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../type";


const ShoppingCartComponent: React.FC = () => {

  type homeScreenProp = StackNavigationProp<RootStackParamList, 'ShoppingCart'>;
  const navigation = useNavigation<homeScreenProp>();
  const [badige, setBadige] = useState(0)
  
  useSelector( async (state) => {
    if(state === StateProps.LIST_ITEM){
      await asyncStortage
        .getItem('item')
        .then((data) => {
          const item: Array<Item>  = JSON.parse(data as string)
          if(item !== null)
            setBadige(item.length);
          else 
            setBadige(0);
        })
        .catch(error =>  {
          console.error('error', error)
          setBadige(0)
        })
    }
  });
  
  return (
    <Container  onPress={()=> navigation.navigate('ShoppingCart') }>
      <ShoppingCart>
        <Icon size={25} color='#333' name='shopping-cart'/>
        {
          badige > 0 &&(
            <Badige> { badige } </Badige>
          )
        }
      </ShoppingCart>
    </Container>
  )
}

export default ShoppingCartComponent;