import { useState } from "react"
import Header from "../../Shared/Header/Header"
import PixelCanvas from "../Canvas/PixelCanvas"
import LeftNav from "../LeftNav/LeftNav"
import styles from './CanvasPage.module.scss'
import { CanvasParameters } from "../../types"

const CanvasPage = () => {

    return (<div className={styles.container}>
        <Header />
        <LeftNav />
        {/* <ColorPicker drawingColor={drawingColor} setDrawingColor={setDrawingColor} /> */}
        {/* <PixelCanvas drawingColor={drawingColor} canvasParameters={canvasParameters} /> */}
    </div>)
}

export default CanvasPage