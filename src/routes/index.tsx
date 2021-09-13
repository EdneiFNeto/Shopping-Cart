import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../pages/Home";
import ShoppingCart  from "../pages/ShoppingCart";
import ItemShoppingCart from "../pages/ItemShoppingCart";
import HomeComponent from "../components/HomeComponent";
import ShoppingCartComponent from "../components/ShoppingCartComponent";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#F5F5F5',
      },
      headerTitle:"",
      cardStyle: { backgroundColor: '#F5F5F5', borderColor:"#FFF"}
    }}
  >
    <Auth.Screen 
      name ="Home"  
      component={ Home }
      options={() => ({
        headerRight: props => <ShoppingCartComponent/>,
        headerTitle: props => <HomeComponent/>,
      })}/>

    <Auth.Screen name ="ItemShoppingCart"  component={ ItemShoppingCart }/>
    <Auth.Screen name ="ShoppingCart"  component={ ShoppingCart }/>
  </Auth.Navigator>
)

export default AuthRoutes;

