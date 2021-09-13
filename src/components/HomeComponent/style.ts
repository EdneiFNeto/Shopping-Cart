import styled from 'styled-components/native';
import IconFather from 'react-native-vector-icons/Feather';


export const Container = styled.View`
  width: 100%;
  border-radius: 10px;
  flex-direction: row;
`;

export const Icon = styled(IconFather)`
  margin: 12px;
`;

export const ShoppingCart = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
`;

export const Badige = styled.Text`
  width: 20px;
  height: 20px;
  background: red;
  color:#FFF;
  padding: 2px;
  margin-left: -20px;
  margin-top:-15px;
  text-align: center;
  border-radius: 100px;
  font-size: 10px;
`;
