import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';

export const LoaderTextComponent = styled.View`
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color:  rgba(23, 21, 19, 0.9);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TextProgressBar = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Medium';
  color:#FFF;
`;

export const Container = styled.View`
  flex: 1;
  padding: 24px 24px;
  margin-top: 24px;
  background: #F5F5F5;
`;

export const Icon = styled(Feather)`
  align-self: flex-start;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #000;
  margin-bottom: 12px;
  font-family: "Roboto-Medium";
  align-self: flex-start;
`;

export const ListCardItnes = styled.FlatList`
  align-self: center;
`;

export const Carditem = styled(RectButton)`
  border-radius: 8px;
  background: #fff;
  margin-right:8px;
  margin-bottom: 8px;
  width: 150px;
  height: auto;
`;
  
export const ContainerHeartPercent = styled.View`
  flex-direction: row;
`;

export const TextPercent = styled.Text`
  flex: 1;
  margin: 4px 12px;
  font-size: 14px;
  font-family: 'Roboto-Medium';
`;

export const Heart = styled.Image`
  width: 16px;
  height: 16px;
  margin: 6px 8px;
`;

export const ShoesContainer = styled.View`
  margin-top: 12px;
  max-width: 100px;
  max-height:100px;
  align-self: center;
  background:#E7A82D;
  border-radius: 100px;
`;

export const ImageShoes = styled.Image`
  width: 90px;
  height: 90px;
  border-radius:100px;
`;

export const NameShoe = styled.Text`
  font-size: 12px;
  padding: 0 12px;
  text-align: center;
  color:#4E1A53;
  font-family: 'Roboto-Light';
  align-self: center;
  margin-top: 12px;
`;

export const ValueShoes = styled.Text`
    font-size: 16px;
    color:#4E1A53;
    font-family: 'Roboto-Bold';
    align-self: center;
`;

export const Rings = styled.View`
  flex-direction: row;
  align-self: center;
  padding-bottom: 12px;
`;

export const IconRings = styled(Icon)`
  margin: 4px 2px;
`;


