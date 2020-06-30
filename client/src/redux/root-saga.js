
import {all, call} from 'redux-saga/effects';
import {shopSagas} from './shop/shop.sagas';
import {userSagas} from './user/user.saga'
import {cartSagas} from './cart/cart.sagas'
// all saga -> root.saga 
export default function* rootSaga(){
   // all() -> call concurently all saga at once
    yield all([
        call(shopSagas),
        call(userSagas),
        call(cartSagas)
        ])
}