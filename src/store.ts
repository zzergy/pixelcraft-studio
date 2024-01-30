import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import canvasDataReducer from "./slices/canvasSlice";
import modalsReducer from './slices/modalsSlice';
import canvasActionToolsReducer from './slices/canvasActionToolsSlice';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}

const store = configureStore({
    reducer: {
        canvasData: persistReducer(persistConfig, canvasDataReducer),
        modalsOpenState: modalsReducer,
        canvasActionTools: persistReducer(persistConfig, canvasActionToolsReducer)
    },
});

const persistor = persistStore(store);

export default store;
export {
    persistor
}

export type RootState = ReturnType<typeof store.getState>;