import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CanvasData, Dimentions } from "../types";

const initialCanvasData: CanvasData = {
  rows: 15,
  columns: 15,
  baseColor: 'white',
  gridColor: '#ededed',
  pixelsGrid: [[]],
  drawingColor: '#fafa',
}

const canvasDataReducer = createSlice({
  name: 'canvas',
  initialState: initialCanvasData,
  reducers: {
    setCanvasSize: (state: typeof initialCanvasData, action: PayloadAction<Dimentions>) => (
      {
        ...state,
        pixelsGrid: Array(action.payload.rows).fill(Array(action.payload.columns).fill('white'))
      }
    ),
    setPixelsGrid: (state: typeof initialCanvasData, action: PayloadAction<string[][]>) => (
      {
        ...state,
        pixelsGrid: action.payload,
      }
    ),
    deleteCanvas: (state: typeof initialCanvasData) => (
      {
        ...state,
        pixelsGrid: initialCanvasData.pixelsGrid
      }
    ),
    clearCanvas: (state: typeof initialCanvasData, action: PayloadAction<Dimentions>) => (
      {
        ...state,
        pixelsGrid: Array(action.payload.rows).fill(Array(action.payload.columns).fill('white'))

      }
    ),
    changeDrawingColor: (state: typeof initialCanvasData, action: PayloadAction<string>) => (
      {
        ...state,
        drawingColor: action.payload
      }
    )
  }
})

export const { setCanvasSize, setPixelsGrid, deleteCanvas, clearCanvas, changeDrawingColor } = canvasDataReducer.actions

export default canvasDataReducer.reducer