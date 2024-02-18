import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CanvasActionTools } from "../types";

const initialCanvasActionToolsStates: CanvasActionTools = {
    isEraseMode: false,
    isColorFillMode: false,
    canvasHistory: [],
    historyIndex: 0
}

const canvasActionToolsReducer = createSlice({
    name: 'canvasActionTools',
    initialState: initialCanvasActionToolsStates,
    reducers: {
        triggerEraseMode: (state: typeof initialCanvasActionToolsStates, action: PayloadAction<boolean>) => (
            {
                ...state,
                isEraseMode: action.payload,
                isColorFillMode: false
            }
        ),
        triggerColorFillMode: (state: typeof initialCanvasActionToolsStates, action: PayloadAction<boolean>) => (
            {
                ...state,
                isColorFillMode: action.payload,
                isEraseMode: false
            }
        ),
        initializeCanvasHistory: (state: typeof initialCanvasActionToolsStates, action: PayloadAction<string[][]>) => (
            {
                ...state,
                canvasHistory: [action.payload],
                historyIndex: 0
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
        ),
        updateHistoryIndex: (state: typeof initialCanvasActionToolsStates, action: PayloadAction<number>) => (
            {
                ...state,
                historyIndex: action.payload
            }
        )
    }
})

export const {
    triggerEraseMode,
    addToCanvasHistory,
    clearCanvasHistory,
    initializeCanvasHistory,
    undo,
    redo,
    triggerColorFillMode,
    updateHistoryIndex
} = canvasActionToolsReducer.actions

export default canvasActionToolsReducer.reducer