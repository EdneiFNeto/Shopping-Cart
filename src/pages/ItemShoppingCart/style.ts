import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #F5F5F5;
`;

export const ContainerImageShoes = styled.View`
  background: #F5F5F5;
`;

export const Icon = styled(Feather)`
  align-self: flex-start;
`;

export const Title = styled.Text`
  margin-top: 18px;
  font-size: 24px;
  color: #000;
  margin-bottom: 12px;
  font-family: "Roboto-Medium";
  align-self: center;
`;

export const ShoesContainer = styled.View`
  flex:2;
  width: 150px;
  height:150px;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;

export const Qtd = styled.Text`
  width: 45px;
  height: 45px;
  background: #000;
  color: #fff;
  padding: 12px;
  margin-top:-80px;
  margin-left:-30px;
  border-radius: 100px;
  text-align: center;
`;

export const ImageShoes = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  margin-top:20px;
  margin-left: 10px;
`;

export const Imageradius = styled.View``;

export const Carditem = styled.View`
  flex:1;
  border-top-left-radius:32px;
  border-top-right-radius:32px;
  background: #EBEBEB;
`;

export const ContainerNameAndRings = styled.View`
  margin-top:14px;
  flex-direction: row;
`;

export const NameShoe = styled.Text`
  flex: 1;
  font-size: 18px;
  padding: 0 12px;
  color:#333;
  font-family: 'Roboto-Medium';
`;

export const Rings = styled.View`
  flex-direction: row;
  align-self: center;
  margin-right:14px;
`;

export const ValueShoes = styled.Text`
  margin-left: 8px;
  font-size: 24px;
  color:#000;
  font-family: 'Roboto-Medium';
  align-self: flex-start;
`;

export const DescriptionShoes = styled.Text`
  font-size: 14px;
  padding: 0 12px;
  color:#333;
  font-family: 'Roboto-Light';
  align-self: flex-start;
`;

export const Footer= styled.View`
  flex-direction: row;
  padding:12px 0px;
  background: #F5F5F5;
`;

export const ButtonAddOrMinQtd = styled.View`
  flex:1;
  margin-left: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Sum = styled(RectButton)`
  background: #DFDFDF;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding:8px;
`;

export const TextNum = styled.Text`
  padding-left: 12px;
  padding-right: 12px;
  font-size: 12px;
  font-family: 'Roboto-Light';
`;

export const Min = styled(RectButton)`
  background: #DFDFDF;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding:8px;
`;

export const ButtonAddShoppingCart= styled(RectButton)`
  flex-direction: row;
  padding:12px;
  background: #E7A82D;
  border-radius: 8px;
  margin-right: 8px;
`;

export const TitleButton = styled.Text`
  font-size: 14px;
  color:#333;
  font-family:'Roboto-Light';
  margin-left:8px;
`;

export const IconRings = styled(Icon)`
  margin: 4px 2px;
`;

