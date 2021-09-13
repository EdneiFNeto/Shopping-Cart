import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";

import { 
  Container, 
  Title,
  Carditem,
  ShoesContainer,
  NameShoe,
  ValueShoes,
  Rings,
  ImageShoes,
  IconRings,
  ListCardItnes,
  LoaderTextComponent,
  TextProgressBar
} from './style';

import api from '../../server/api';
import { RootStackParamList } from "../../type";

const Home: React.FC = () => {
  type ItemShoppingCartScreenProp = StackNavigationProp<RootStackParamList, 'ItemShoppingCart'>;
  const navigation = useNavigation<ItemShoppingCartScreenProp>();
  const [itens, setItens] = useState([]);

  useEffect(()=> {
    const getShoes = async () => {
      await api.get('/api/v1/product')
        .then((response) => {
          switch(response.status){
            case 200:
              setItens(response.data)
              break;
            default:
              console.log('error', 'Failure request');
              break;
          }
        })
        .catch(error => console.log('error', error))
    }
    
    getShoes()
  }, [])

  return (
    <>
      {
        itens.length === 0 && (
          <LoaderTextComponent >
            <TextProgressBar>Carregando...</TextProgressBar>
          </LoaderTextComponent>
        )
      }
      
      <Container>      
        <Title>Products</Title>
        <ListCardItnes 
          numColumns={2} 
          data={itens}
          renderItem = {({ item, index}) => (
          
          <Carditem key={index} 
            onPress={()=> { 
              navigation.navigate('ItemShoppingCart', { ...item });
            }}>

            <ShoesContainer>
              <ImageShoes source={{ uri: item.image }}/>
            </ShoesContainer>
            
            <NameShoe>{item.name}</NameShoe>

            <ValueShoes>R${item.price}</ValueShoes>

            <Rings>
              <IconRings size={12} name='star' color='#E7A82D'/>
              <IconRings size={12} name='star' color='#E7A82D'/>
              <IconRings size={12} name='star' color='#E7A82D'/>
              <IconRings size={12} name='star' color='#E7A82D'/>
            </Rings>
          </Carditem>
        )}>
        
        </ListCardItnes>
      </Container>
    </>
  )
}

export default Home;