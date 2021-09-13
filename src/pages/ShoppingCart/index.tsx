import React, { useState, useEffect, useCallback } from "react";
import { Alert  } from 'react-native';
import asyncStorage from '@react-native-community/async-storage';

import { 
  Title, 
  ButtonCleaAll,
  TextButtonClearAll,
  Icon, 
  Carditem,
  NameShoe,
  ValueShoes,
  ImageShoes,
  ContainerNameAndValue,
  ListCardItnes,
  IconTrash,
  Footer,
  ContainerFooter,
  ValueFooter,
  ButtonCheckout,
  TextButtonCheckout,
  QtdText,
  ImageShoppingCargEmpty,
  ImageEmpty,
  TextInfoEmptyShoppingCart,
  ButtonIconTrash
} from './style';

import Item from '../../Model/item';
import imageEmpty from '../../assets/undraw_shopping.png';

const ShoppingCart: React.FC = () => {
  const [itens, setItens] = useState([]);
  const [totalItem, setTotalItem] = useState(0);
  const [isEmptyShoppingCart, setEmptyShoppingCart] = useState(false);
  
  useEffect(() => {
    const readDatabase = async () => {
      await asyncStorage.getItem('item')
        .then((data)=> {
          const item: Array<Item>  = JSON.parse(data as string)
          if(item !== null){
            if(item.length > 0){
              updateTotal(item)
              setItens(item);
            } else {
              setEmptyShoppingCart(true);
            }
          } else {
            setEmptyShoppingCart(true);
          }
        })
        .catch(error => console.log('Error', error));
    }
    
    readDatabase();
  }, [isEmptyShoppingCart]);

  const showDialogDeleteDatabase = async () => {
    Alert.alert(
      "Warning",
      `Delete all shopping cart?`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Confirm", onPress: () =>  clearDatabase() }
      ]
    );
  }

  const clearDatabase = useCallback( async () => {
    await asyncStorage.removeItem('item')
    .then(() => {
      setTotalItem(0)
      setItens([])
      setEmptyShoppingCart(true)
    })
    .catch(error => console.log('error', error))
  }, [itens, totalItem])

  const showDialogDeleteItem = (item: Item) => {
    Alert.alert(
      "Warning",
      `Delete ${item.name} shopping cart?`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Confirm", onPress: () =>  deleteItem(item) }
      ]
    );
  }

  const deleteItem = useCallback(async (itemSelected: Item) => {
    const itemFilter:Item = itens
      .filter((elem: Item) => elem === itemSelected)[0]
    
    if(itemFilter !== null){
      const index = itens.indexOf(itemFilter);
      itens.splice(index, 1);
      
      await asyncStorage.setItem('item', JSON.stringify(itens))
        .then(() => { 
          setItens([...itens])
          updateTotal(itens);
          if(itens.length === 0) {
            setItens([]);
            setEmptyShoppingCart(true)
          }
        })
        .catch(error => console.log('Error', error))
    }
  }, [itens, totalItem]);

  const updateTotal = (item: Item []) => {
    let total = 0;
    item.forEach((element: Item)=> {
      const { price, qtd } = element;
      total += (Number(price) * qtd);
    });

    setTotalItem(total);
  }

  return (
    <>
      {
        itens.length > 0 && (
          <>
            <Title>Shopping Cart</Title>
      
            <ButtonCleaAll 
              onPress={()=>  showDialogDeleteDatabase() }>
              <TextButtonClearAll>Clear All</TextButtonClearAll>
            </ButtonCleaAll>

            <ListCardItnes  
              data={itens} 
              renderItem = {({item, index }) => (
              
              <Carditem key={index} >
                <ImageShoes source={{ uri: item.image }}/>
                <ContainerNameAndValue>
                  <NameShoe>{item.name}</NameShoe>
                  <QtdText>{item.qtd}Qtd.</QtdText>
                  <ValueShoes> R${Number(item.price).toFixed(2).replace('.', ',')} </ValueShoes> 
                </ContainerNameAndValue>
                
                <ButtonIconTrash onPress={() => showDialogDeleteItem(item) }>
                  <IconTrash size={20} name='trash-2' color='#000'/>
                </ButtonIconTrash>
              </Carditem>
            )}/>

            <Footer>
              <ContainerFooter>
                <ValueFooter>R${ Number(totalItem > 0 ?  totalItem : `0.00`).toFixed(2).replace('.', ',')}</ValueFooter>
                <ButtonCheckout>
                  <Icon size={20} 
                    name='check-circle' 
                    color='#000'/>
                    <TextButtonCheckout>Checkout</TextButtonCheckout>
                </ButtonCheckout>
              </ContainerFooter>
            </Footer>
          </>
        )
      }

      {
        isEmptyShoppingCart === true && (
          <ImageShoppingCargEmpty>
            <ImageEmpty source={imageEmpty} />
            <TextInfoEmptyShoppingCart>
              Shopping cart is empty!
            </TextInfoEmptyShoppingCart>
          </ImageShoppingCargEmpty>
        ) 
      }
    </>
  )
}

export default ShoppingCart;