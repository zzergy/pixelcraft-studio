import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CanvasParameters, Dimentions } from "../types";

const initialCanvasParameters: CanvasParameters = {
  rows: 15,
  columns: 15,
  baseColor: 'white',
  gridColor: '#ededed',
  pixels: [Array(0).fill(Array(0).fill('white'))]
}

const canvasReducer = createSlice({
  name: 'canvas',
  initialState: initialCanvasParameters,
  reducers: {
    setCanvasSize: (state: typeof initialCanvasParameters, action: PayloadAction<Dimentions>) => (
      {
        ...state,
        ...action.payload,
        pixels: Array(action.payload.rows).fill(Array(action.payload.columns).fill('white'))
      }
    ),
    setPixels: (state: typeof initialCanvasParameters, action: PayloadAction<string[][]>) => (
      {
        ...state,
        pixels: action.payload,
      }
    )
  }
})

export const { setCanvasSize, setPixels } = canvasReducer.actions

export default canvasReducer.reducer