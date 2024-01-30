import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CanvasActionTools } from "../types";

const initialCanvasActionToolsStates: CanvasActionTools = {
    isEraseMode: false,
    canvasHistory: [],
    historyIndex: 0
}

const canvasActionToolsReducer = createSlice({
    name: 'canvasActionTools',
    initialState: initialCanvasActionToolsStates,
    reducers: {
        setEraseMode: (state: typeof initialCanvasActionToolsStates, action: PayloadAction<boolean>) => (
            {
                ...state,
                isEraseMode: action.payload
            }
        ),
        initialiseCanvasHistory: (state: typeof initialCanvasActionToolsStates, action: PayloadAction<string[][]>) => (
            {
                ...state,
                canvasHistory: [action.payload]
            }
        ),
        addToCanvasHistory: (state: typeof initialCanvasActionToolsStates, action: PayloadAction<string[][]>) => (
            {
                ...state,
                canvasHistory: [...state.canvasHistory, action.payload],
                historyIndex: state.historyIndex + 1
            }
        ),
        clearCanvasHistory: (state: typeof initialCanvasActionToolsStates) => (
            {
                ...state,
                canvasHistory: [],
                historyIndex: 0
            }
        ),
        undo: (state: typeof initialCanvasActionToolsStates) => (
            {
                ...state,
                historyIndex: Math.max(0, state.historyIndex - 1)
            }
        ),
        redo: (state: typeof initialCanvasActionToolsStates) => (
            {
                ...state,
                historyIndex: Math.min(state.canvasHistory.length - 1, state.historyIndex + 1)
            }
        )
    }
})

export const { setEraseMode, addToCanvasHistory, clearCanvasHistory, initialiseCanvasHistory, undo, redo } = canvasActionToolsReducer.actions

export default canvasActionToolsReducer.reducer