import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CanvasParameters, Dimentions } from "../types";

const initialCanvasParameters: CanvasParameters = {
  rows: 15,
  columns: 15,
  baseColor: 'white',
  gridColor: '#ededed',
  pixelsGrid: [Array(0).fill(Array(0).fill('white'))]
}

const canvasReducer = createSlice({
  name: 'canvas',
  initialState: initialCanvasParameters,
  reducers: {
    setCanvasSize: (state: typeof initialCanvasParameters, action: PayloadAction<Dimentions>) => (
      {
        ...state,
        ...action.payload,
        pixelsGrid: Array(action.payload.rows).fill(Array(action.payload.columns).fill('white'))
      }
    ),
    setPixelsGrid: (state: typeof initialCanvasParameters, action: PayloadAction<string[][]>) => (
      {
        ...state,
        pixelsGrid: action.payload,
      }
    ),
    deleteCanvas: (state: typeof initialCanvasParameters) => (
      {
        ...state,
        pixelsGrid: initialCanvasParameters.pixelsGrid
      }
    ),
    clearCanvas: (state: typeof initialCanvasParameters, action: PayloadAction<Dimentions>) => (
      {
        ...state,
        pixelsGrid: Array(action.payload.rows).fill(Array(action.payload.columns).fill('white'))

      }
    )
  }
})

export const { setCanvasSize, setPixelsGrid, deleteCanvas, clearCanvas } = canvasReducer.actions

export default canvasReducer.reducer