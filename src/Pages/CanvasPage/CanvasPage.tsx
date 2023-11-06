import { useState } from "react"
import Header from "../../Shared/Header/Header"
import PixelCanvas from "../Canvas/PixelCanvas"
import LeftNav from "../LeftNav/LeftNav"
import styles from './CanvasPage.module.scss'

const CanvasPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <LeftNav />
                {/* <ColorPicker drawingColor={drawingColor} setDrawingColor={setDrawingColor} /> */}
                <PixelCanvas drawingColor={'purple'} />
            </div>
        </div>)
}

export default CanvasPage