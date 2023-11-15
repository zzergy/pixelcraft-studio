import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import canvasReducer from "./slices/canvasSlice";
import modalsReducer from './slices/modalsSlice'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}

const store = configureStore({
    reducer: {
        canvasParameters: persistReducer(persistConfig, canvasReducer),
        modalsOpenState: modalsReducer
    },
});
const persistor = persistStore(store);

export default store;
export {
    persistor
}

export type RootState = ReturnType<typeof store.getState>;