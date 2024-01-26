import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { addToCanvasHistory, redo, undo } from "../slices/canvasActionToolsSlice"

const useUndoRedo = () => {
    const dispatch = useDispatch()
    const { canvasHistory, historyIndex } = useSelector((state: RootState) => state.canvasActionTools)
    const present = canvasHistory[historyIndex]


    const addToHistory = (newState: any) => {
        dispatch(addToCanvasHistory(newState))
    }

    const undoAction = () => {
        dispatch(undo())
    }

    const redoAction = () => {
        dispatch(redo())
    }

    return {
        present,
        undoAction,
        redoAction,
        addToHistory,
    }
}

export default useUndoRedo