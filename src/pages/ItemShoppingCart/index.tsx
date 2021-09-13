import React,{ useCallback, useState } from "react";
import asyncStorage from '@react-native-community/async-storage';
import { Alert, ToastAndroid } from 'react-native';

import { 
  Container,
  ContainerImageShoes,
  Title, 
  Carditem,
  ShoesContainer,
  NameShoe,
  ValueShoes,
  Rings,
  ImageShoes,
  IconRings,
  Icon,
  DescriptionShoes,
  ContainerNameAndRings,
  Footer,
  ButtonAddShoppingCart,
  TitleButton,
  Qtd,
  ButtonAddOrMinQtd,
  Sum,
  TextNum,
  Min,
  Imageradius
} from './style';

import Item from "../../Model/item";

let count = 1;
const ItemShoppingCart: React.FC = (props) => {
  const item = props.route.params;  
  
  const [itemCount, setItemCount] = useState(count)

  const handleAddItemShoppingCart = useCallback( async () => {
    Alert.alert(
      "Warning",
      `Add item ${item.name} in shopping cart?`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Confirm", onPress: () => addItemShoppingCart() }
      ]
    );
  }, [itemCount])

  const addItemShoppingCart = useCallback(async () => {

    let jsonItens: Array<Item> = [];
    await asyncStorage.getItem('item')
    .then((data)=> {
      if(data !== null){
        JSON.parse(data).forEach((element: Item) => {
          const { name, price, image, qtd } = element;
          jsonItens.push({name, price, image, qtd})
        });
      }
    })
    .catch(error => console.log('error', error))
    
    const { name, price, image } = item;
    jsonItens.push({ name, qtd: itemCount, price, image });
    
    await asyncStorage.setItem('item', JSON.stringify(jsonItens))
      .then(()=> {
        count = 1;
        setItemCount(count);
        showToast()
      })
      .catch(error => console.log('error', error))
  }, [itemCount]);

  const showToast = () => 
    ToastAndroid.show("Success add item!", ToastAndroid.SHORT);

  const setSumItem = useCallback(() => {
    count += 1;
    setItemCount(count);
  },[itemCount])
  
  const setMinItem = useCallback(() =>{
    count -= 1;
    if(count <=  0)
      count = 0;
      setItemCount(count)
  }, [itemCount])

  return (
    <Container>
      {
        item !== undefined && (
          <>
            <ContainerImageShoes>
              <Title>{item.name}</Title>
            </ContainerImageShoes>

            <ShoesContainer>
              <ImageShoes source={{ uri: item.image }}/>
              <Qtd>{itemCount}</Qtd>
              <Imageradius/>
            </ShoesContainer>
        
            <Carditem>
              <ContainerNameAndRings>
                <NameShoe>{item.name}</NameShoe>
                <Rings>
                  <IconRings size={12} name='star' color='#E7A82D'/>
                  <IconRings size={12} name='star' color='#E7A82D'/>
                  <IconRings size={12} name='star' color='#E7A82D'/>
                  <IconRings size={12} name='star' color='#E7A82D'/>
                </Rings>
              </ContainerNameAndRings>
              
              <ValueShoes>R${Number(item.price).toFixed(2).replace('.', ',')}</ValueShoes>
                
              <DescriptionShoes>
                Lorem ipsum dolor sit amet, consectetur adipiscing. 
                Lorem ipsum dolor sit amet..
              </DescriptionShoes>
            </Carditem>
          </>
        )
      }
      
      <Footer>

        <ButtonAddOrMinQtd>
          <Sum onPress={() => setSumItem()}>
            <TextNum>+</TextNum>
          </Sum>
          <TextNum>{itemCount}</TextNum>
          <Min onPress={() => setMinItem()}>
          <TextNum>-</TextNum>
          </Min>
        </ButtonAddOrMinQtd>

        <ButtonAddShoppingCart 
          onPress={()=> { handleAddItemShoppingCart() }}>
          <Icon name="shopping-cart" size={16} color="#000"/>
          <TitleButton>Add shopping cart</TitleButton>
        </ButtonAddShoppingCart>
      </Footer>
    </Container>   
  )
}

export default ItemShoppingCart;