import { combineReducers, createStore } from 'redux';
import { basketReducer } from './reducer/basketReducer';
import { productReducer } from './reducer/productReducer';

const rootReducer = combineReducers({
    products: productReducer,
    basket: basketReducer
})

export const store = createStore(rootReducer);