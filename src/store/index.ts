import { createStore } from 'redux';
import { StateProps } from '../Model/statesProps';

const reducer = (state: StateProps = StateProps.LIST_ITEM , action ) => {
  
  switch(action.type){
    case StateProps.LIST_ITEM:
      return state;
    default:
      return state;
  }
}

//Escuta as acoes que estoa sendo disparada
const store = createStore(reducer);

export default store;
