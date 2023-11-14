import styles from './Canvas.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setPixelsGrid } from "../../slices/canvasSlice";
interface CanvasProps {
    drawingColor: string
}

const Canvas = ({ drawingColor }: CanvasProps) => {
    const canvasParameters = useSelector((state: RootState) => state.canvasParameters)
    const dispatch = useDispatch()
    const { gridColor, pixelsGrid } = canvasParameters

    const drawPixel = (x: number, y: number) => {
        const updatedPixels = [...pixelsGrid.map(row => [...row])];
        updatedPixels[x][y] = drawingColor;
        dispatch(setPixelsGrid(updatedPixels))
    }

    return <div className={styles.container}>
        {pixelsGrid.map((rows: string[], xIndex: number) => (
            <div key={xIndex} className={styles.canvasRow}>
                {rows.map((pixelColor: string, yIndex: number) => (
                    <div
                        key={yIndex}
                        className={styles.canvasColumn}
                        style={{ background: pixelColor, borderColor: gridColor }}
                        onClick={() => drawPixel(xIndex, yIndex)}>
                    </div>
                ))}
            </div>
        ))
        }
    </div >
}

export default Canvas
