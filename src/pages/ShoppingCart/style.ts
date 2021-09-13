import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler'

export const FramentContainer = styled.View`
  flex:1;
  background: #F5F5F5;
`;

export const Icon = styled(Feather)`
  align-self: flex-start;
`;

export const Title = styled.Text`
  margin-top: 18px;
  font-size: 24px;
  color: #000;
  margin-bottom: 18px;
  font-family: "Roboto-Medium";
  align-self: center;
`;
export const ButtonCleaAll = styled(RectButton)`
  margin-right: 16px;
  margin-bottom: 12px;
  align-self: flex-end;
  width: auto;
  padding: 8px;
`;


export const TextButtonClearAll = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-Light';
`;

export const ListCardItnes = styled.FlatList`
  background:#EBEBEB;
  flex:4;
  padding:12px;
  margin: 0px 12px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;

export const Carditem = styled.View`
  flex-direction: row;
  height: auto;
  border-radius: 8px;
  background: #FFF;
  margin-right:8px;
  margin-bottom: 8px;
`;

export const ContainerNameAndValue = styled.View`
  flex-direction: column;
  flex:1;
  margin-top:8px;
`;

export const ImageShoes = styled.Image`
  margin:12px;
  width: 40px;
  height: 40px;
  border-radius:100px;
`;

export const NameShoe = styled.Text`
  font-size: 12px;
  color:#000;
  margin-left:4px;
  font-family: 'Roboto-Medium';
`;

export const QtdText = styled.Text`
  font-size: 10px;
  color:#000;
  margin-left:4px;
  font-family: 'Roboto-Light';
`;


export const ValueShoes = styled.Text`
    font-size: 16px;
    color:#000;
    font-family: 'Roboto-Light';
`;

export const IconTrash = styled(Feather)`
  margin:8px;
`; 

export const Rings = styled.View`
  flex-direction: row;
  align-self: center;
  padding-bottom: 12px;
`;

export const IconRings = styled(Icon)`
  margin: 4px 2px;
`;

export const Footer = styled.View`
  flex:1;
  background: #FFF;
  padding: 12px;
  margin-top:-10px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;

export const ContainerFooter = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ValueFooter = styled.Text`
  flex:1;
  font-size: 32px;
`;


export const ButtonCheckout = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  background: #E7A82D;
  padding:8px;
  margin-right:8px;
  border-radius:8px;
`;

export const TextButtonCheckout = styled.Text`
  font-size:14px;
  margin-left:8px;
  font-family:'Roboto-Light';
`;

export const ImageShoppingCargEmpty = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  background: #FFF;
`;

export const ImageEmpty = styled.Image`
  width: 80%;
  height: 90%;
`;

export const TextInfoEmptyShoppingCart = styled.Text`
  font-size: 24px;
  font-family: 'Roboto-Medium';
  padding-bottom:12px;
`;

export const ButtonIconTrash = styled(RectButton)`
  width: 35px;
  height: 35px;
`;
