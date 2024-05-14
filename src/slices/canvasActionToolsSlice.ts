import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CanvasActionTools } from "../types";


const initialCanvasModes = {
    isDrawingMode: false,
    isEraseMode: false,
    isColorFillMode: false,
    isCanvasDragMode: false,
}

const initialCanvasActionToolsStates: CanvasActionTools = {
    ...initialCanvasModes,
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
                ...initialCanvasModes,
                isEraseMode: action.payload
            }
        ),
        triggerColorFillMode: (state: typeof initialCanvasActionToolsStates, action: PayloadAction<boolean>) => (
            {
                ...state,
                ...initialCanvasModes,
                isColorFillMode: action.payload
            }
        ),
        triggerCanvasDragMode: (state: typeof initialCanvasActionToolsStates, action: PayloadAction<boolean>) => (
            {
                ...state,
                ...initialCanvasModes,
                isCanvasDragMode: action.payload,
            }
        ),
        triggerDrawingMode: (state: typeof initialCanvasActionToolsStates, action: PayloadAction<boolean>) => (
            {
                ...state,
                ...initialCanvasModes,
                isDrawingMode: action.payload,
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
        ),
    }
})

export const {
    triggerEraseMode,
    triggerColorFillMode,
    triggerCanvasDragMode,
    triggerDrawingMode,
    addToCanvasHistory,
    clearCanvasHistory,
    initializeCanvasHistory,
    undo,
    redo,
    updateHistoryIndex
} = canvasActionToolsReducer.actions

export default canvasActionToolsReducer.reducer