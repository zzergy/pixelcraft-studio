import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CanvasParameters } from "../types";

const initialCanvasParameters: CanvasParameters = {
  rows: 15,
  columns: 15,
  baseColor: 'white',
  gridColor: '#ededed'
}

const canvasReducer = createSlice({
  name: 'canvasParameters',
  initialState: initialCanvasParameters,
  reducers: {
    setCanvasParameters: (state: typeof initialCanvasParameters, action: PayloadAction<CanvasParameters>) => (
      { ...state, ...action.payload }
    )
  }
})

export const { setCanvasParameters } = canvasReducer.actions

export default canvasReducer.reducer