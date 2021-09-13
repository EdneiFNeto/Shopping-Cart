import React from "react";
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText } from './style';

//Especifica o tipo de text do botao
interface ButtonProps extends RectButtonProperties {
  children: String;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    //Pega todas as propoedades que não sao children e passa para o container
    <Container {...rest} >
      <ButtonText>{children}</ButtonText>
    </Container>
  )
}

export default Button;