import styles from './Canvas.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setPixelsGrid } from "../../slices/canvasSlice";
import useUndoRedo from '../../hooks/useUndoRedo';
interface CanvasProps {
    drawingColor: string,
    canvasGrid: string[][]
}

const Canvas = ({ drawingColor, canvasGrid }: CanvasProps) => {
    const canvasParameters = useSelector((state: RootState) => state.canvasParameters)
    const { isEraseMode } = useSelector((state: RootState) => state.canvasActionTools)
    const dispatch = useDispatch()
    const { gridColor, pixelsGrid } = canvasParameters
    const { addToHistory } = useUndoRedo()


    const drawPixel = (x: number, y: number, color: string) => {
        const updatedPixels = [...pixelsGrid.map(row => [...row])];
        updatedPixels[x][y] = color;
        dispatch(setPixelsGrid(updatedPixels))
        addToHistory(updatedPixels)
    }

    const handleClick = (currentXIndex: number, currentYIndex: number) => {
        drawPixel(currentXIndex, currentYIndex, isEraseMode ? 'white' : drawingColor)
    }

    return <div className={styles.container}>
        {canvasGrid.map((rows: string[], xIndex: number) => (
            <div key={xIndex} className={styles.canvasRow}>
                {rows.map((pixelColor: string, yIndex: number) => (
                    <div
                        key={yIndex}
                        className={styles.canvasColumn}
                        style={{ background: pixelColor, borderColor: gridColor }}
                        onClick={() => handleClick(xIndex, yIndex)}>
                    </div>
                ))}
            </div>
        ))
        }
    </div >
}

export default Canvas
