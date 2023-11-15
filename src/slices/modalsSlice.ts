import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CanvasParameters, Dimentions, ModalStates } from "../types";

const initialModalStates: ModalStates = {
    deleteCanvasModal: false,
    createCanvasModal: false
}

const modalsReducer = createSlice({
    name: 'modalsOpenState',
    initialState: initialModalStates,
    reducers: {
        setModalState: (state: typeof initialModalStates, action: PayloadAction<ModalStates>) => (
            {
                ...state,
                ...action.payload
            }
        )
    }
})

export const { setModalState } = modalsReducer.actions

export default modalsReducer.reducer