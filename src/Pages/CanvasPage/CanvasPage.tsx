import { useState } from "react"
import Header from "../../Shared/Header/Header"
import PixelCanvas from "../Canvas/PixelCanvas"
import LeftNav from "../LeftNav/LeftNav"
import styles from './CanvasPage.module.scss'
import { CanvasParameters } from "../../types"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { setCanvasParameters } from "../../slices/canvasSlice"

const CanvasPage = () => {
    // const counter = useSelector((state) => state.counter);
    // const dispatch = useDispatch();

    const canvasProperties = useSelector((state: RootState) => state.canvasParameters)
    const dispatch = useDispatch();

    return (<div className={styles.container}>
        <Header />
        <LeftNav />
        {/* <ColorPicker drawingColor={drawingColor} setDrawingColor={setDrawingColor} /> */}
        {/* <PixelCanvas drawingColor={drawingColor} canvasParameters={canvasParameters} /> */}
    </div>)
}

export default CanvasPage