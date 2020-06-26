import {combineReducers} from 'redux';


// import 4 key in reducer
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from'./directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
//==================================================


// need persistReducer -> 3rd 
import {persistReducer} from 'redux-persist';

// storage where we store database -> 4
import storage from 'redux-persist/lib/storage';

// need that config -> 5
const persistConfig = {
    key: 'root',
    storage,
    // list key need to be stored -> this case, just need cart
    whitelist: ['cart']
}

//set root-reducer
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig,rootReducer)