import { useEffect, useState } from "react";
import styles from './Canvas.module.scss'
import { CanvasParameters } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setPixels } from "../../slices/canvasSlice";

interface CanvasProps {
    drawingColor: string
}

const Canvas = ({ drawingColor }: CanvasProps) => {
    const canvasParameters = useSelector((state: RootState) => state.canvasParameters)
    const dispatch = useDispatch()
    const { gridColor, pixels } = canvasParameters

    const handleDraw = (x: number, y: number) => {
        const updatedPixels = [...pixels.map(row => [...row])];
        updatedPixels[x][y] = drawingColor;
        dispatch(setPixels(updatedPixels))
    }

    return <div className={styles.container}>
        {pixels.map((rows: string[], xIndex: number) => (
            <div key={xIndex} className={styles.canvasRow}>
                {rows.map((pixelColor: string, yIndex: number) => (
                    <div
                        key={yIndex}
                        className={styles.canvasColumn}
                        style={{ background: pixelColor, borderColor: gridColor }}
                        onClick={() => handleDraw(xIndex, yIndex)}>
                    </div>
                ))}
            </div>
        ))
        }
    </div >
}

export default Canvas
