import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from 'redux-thunk';

import { rootReducer } from "./root-reducer";


const middleWares = [
  /*process.env.NODE_ENV === 'development' && logger,*/
  thunk,
].filter(Boolean);

// const composedEnhancers = compose(applyMiddleware(...middleWares));
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: "root",
  storage,
  blacklist: ['destinationsCategory'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(rootReducer, undefined, composedEnhancers);
export const store = createStore(persistedReducer, undefined, composedEnhancers);


export const persistor = persistStore(store);

// old https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Bean_Hollow_State_Beach_2003.jpg/240px-Bean_Hollow_State_Beach_2003.jpg
// new https://travel.usnews.com/dims4/USNEWS/3e25092/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/malibu_main_445x280_lB8DoJM.jpg