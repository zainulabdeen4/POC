import thunk from 'redux-thunk';
import reducer from './reducers';
import { persistReducer, persistStore } from 'redux-persist';
import {createStore,applyMiddleware} from 'redux'
import Utils from '../Utils';
const persistedReducer = persistReducer(Utils.persistConfig,reducer)
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store)