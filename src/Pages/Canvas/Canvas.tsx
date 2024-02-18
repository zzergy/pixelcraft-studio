import styles from './Canvas.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setPixelsGrid } from "../../slices/canvasSlice";
import useUndoRedo from '../../hooks/useUndoRedo';
import { updateHistoryIndex } from '../../slices/canvasActionToolsSlice';

interface CanvasProps {
    drawingColor: string,
    canvasGrid: string[][]
}

const Canvas = ({ drawingColor, canvasGrid }: CanvasProps) => {
    const canvasParameters = useSelector((state: RootState) => state.canvasData)
    const { isEraseMode, isColorFillMode } = useSelector((state: RootState) => state.canvasActionTools)
    const dispatch = useDispatch()
    const { addToHistory, present, canvasHistory } = useUndoRedo()
    const { gridColor, baseColor } = canvasParameters

    const drawPixel = (x: number, y: number, color: string) => {
        let updatedPixels: string[][] = [[]];

        if (isColorFillMode) {
            updatedPixels = present.map((row: string[]) => row.map((pixel: string) => pixel = color))
        } else {
            updatedPixels = [...present?.map(row => [...row])];
            updatedPixels[x][y] = color;
        }

        dispatch(setPixelsGrid(updatedPixels))
        present !== canvasHistory[canvasHistory.length - 1] && dispatch(updateHistoryIndex(canvasHistory.length - 1))
        addToHistory(updatedPixels)
    }

    const handleClick = (currentXIndex: number, currentYIndex: number) => {
        drawPixel(currentXIndex, currentYIndex, isEraseMode ? baseColor : drawingColor)
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
