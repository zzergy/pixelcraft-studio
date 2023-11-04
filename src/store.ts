import { configureStore } from "@reduxjs/toolkit";
import canvasReducer from "./slices/canvasSlice";

const store = configureStore({
    reducer: {
        canvasParameters: canvasReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;