import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalStates } from "../types";

const initialModalStates: ModalStates = {
    deleteCanvasModal: false,
    createCanvasModal: false,
    clearCanvasModal: false
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