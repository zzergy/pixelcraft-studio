import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CanvasData, CanvasPosition, Dimensions } from "../types";

const initialCanvasData: CanvasData = {
  rows: 0,
  columns: 0,
  baseColor: 'white',
  gridColor: '#ededed',
  pixelsGrid: [[]],
  drawingColor: '#fafa',
  canvasPosition: { x: 0, y: 0 }
}

const canvasDataReducer = createSlice({
  name: 'canvas',
  initialState: initialCanvasData,
  reducers: {
    setCanvasSize: (state: typeof initialCanvasData, action: PayloadAction<Dimensions>) => (
      {
        ...state,
        rows: action.payload.rows,
        columns: action.payload.columns,
        pixelsGrid: Array(action.payload.rows).fill(Array(action.payload.columns).fill(state.baseColor))
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
        rows: 0,
        columns: 0,
        pixelsGrid: initialCanvasData.pixelsGrid
      }
    ),
    clearCanvas: (state: typeof initialCanvasData, action: PayloadAction<Dimensions>) => (
      {
        ...state,
        pixelsGrid: Array(action.payload.rows).fill(Array(action.payload.columns).fill(state.baseColor))

      }
    ),
    changeDrawingColor: (state: typeof initialCanvasData, action: PayloadAction<string>) => (
      {
        ...state,
        drawingColor: action.payload
      }
    ),
    setCanvasGridColor: (state: typeof initialCanvasData, action: PayloadAction<string>) => (
      {
        ...state,
        gridColor: action.payload
      }
    ),
    setCanvasPosition: (state: typeof initialCanvasData, action: PayloadAction<CanvasPosition>) => (
      {
        ...state,
        canvasPosition: action.payload
      }
    )
  }
})

export const {
  setCanvasSize,
  setPixelsGrid,
  deleteCanvas,
  clearCanvas,
  changeDrawingColor,
  setCanvasGridColor,
  setCanvasPosition
} = canvasDataReducer.actions

export default canvasDataReducer.reducer