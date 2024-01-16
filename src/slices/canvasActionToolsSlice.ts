import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CanvasActionTools } from "../types";

const initialCanvasActionToolsStates: CanvasActionTools = {
    isEraseMode: false
}

const canvasActionToolsReducer = createSlice({
    name: 'canvasActionTools',
    initialState: initialCanvasActionToolsStates,
    reducers: {
        setEraseMode: (state: typeof initialCanvasActionToolsStates, action: PayloadAction<CanvasActionTools>) => (
            {
                ...state,
                ...action.payload
            }
        )
    }
})

export const { setEraseMode } = canvasActionToolsReducer.actions

export default canvasActionToolsReducer.reducer