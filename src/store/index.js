import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
//import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import reducers from '../reducer';



const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [
    'counterReducer',
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // TODO: remove for production
  applyMiddleware(thunk, logger),
);

export const persistor = persistStore(store);

// persistor.purge();
