import styles from './Canvas.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setCanvasPosition, setPixelsGrid } from "../../slices/canvasSlice";
import useUndoRedo from '../../hooks/useUndoRedo';
import { updateHistoryIndex } from '../../slices/canvasActionToolsSlice';
import { useEffect, useRef, useState } from 'react';
import { LEFT_NAV_WIDTH, TOP_NAV_HEIGHT } from '../../types';
import useCalculateCenterPosition from '../../hooks/useCalculateCenterPosition';

interface CanvasProps {
    drawingColor: string,
    canvasGrid: string[][]
}

interface RelPosition {
    x: number | null,
    y: number | null
}

const Canvas = ({ drawingColor, canvasGrid }: CanvasProps) => {
    const canvasParameters = useSelector((state: RootState) => state.canvasData)
    const { isColorFillMode, isCanvasDragMode, isDrawingMode } = useSelector((state: RootState) => state.canvasActionTools)
    const { canvasPosition } = useSelector((state: RootState) => state.canvasData)
    const dispatch = useDispatch()
    const { addToHistory, present, canvasHistory } = useUndoRedo()
    const { gridColor, baseColor, rows, columns } = canvasParameters

    const { centerX, centerY } = useCalculateCenterPosition(rows, columns)
    const [relPosition, setRelPosition] = useState<RelPosition>({ x: null, y: null });
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const canvasRef = useRef<HTMLDivElement>(null);
    const cursorGrab = isCanvasDragMode && (isDragging ? 'grabbing' : 'grab') || ''

    useEffect(() => {
        dispatch(setCanvasPosition({ x: centerX, y: centerY }))
    }, [])

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (isDragging && relPosition.x !== null && relPosition.y !== null) {
                const rect = canvasRef.current?.getBoundingClientRect();
                if (rect) {
                    let newX = event.pageX - relPosition.x;
                    let newY = event.pageY - relPosition.y - TOP_NAV_HEIGHT;

                    // Calculate the maximum allowed positions
                    const maxX = window.innerWidth - rect.width;
                    const maxY = window.innerHeight - rect.height - TOP_NAV_HEIGHT;

                    // Ensure the canvas stays within the boundaries
                    newX = Math.min(Math.max(newX, LEFT_NAV_WIDTH), maxX);
                    newY = Math.min(Math.max(newY, 0), maxY);

                    dispatch(setCanvasPosition({ x: newX, y: newY }))
                }
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            setRelPosition({ x: null, y: null });
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, relPosition]);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsDragging(true);
        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect) {
            setRelPosition({ x: event.pageX - rect.left, y: event.pageY - rect.top });
        }
    };

    const handlePixelClick = (xIndex: number, yIndex: number) => {
        if (!isCanvasDragMode) {
            const color = isDrawingMode ? drawingColor : baseColor
            drawPixel(xIndex, yIndex, color)
        }
    }

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


    return (
        <div
            ref={canvasRef}
            className={styles.container}
            style={{
                position: 'absolute',
                transform: `translate(${canvasPosition.x}px, ${canvasPosition.y}px)`
                // left: canvasPosition.x,
                // top: canvasPosition.y
            }}
            onMouseDown={(event) => { isCanvasDragMode && handleMouseDown(event) }}
        >
            {canvasGrid.map((rows: string[], xIndex: number) => (
                <div key={xIndex} className={styles.canvasRow}>
                    {rows.map((pixelColor: string, yIndex: number) => (
                        <div
                            key={yIndex}
                            className={styles.canvasColumn}
                            style={{ background: pixelColor, borderColor: gridColor, cursor: cursorGrab, }}
                            onClick={() => handlePixelClick(xIndex, yIndex)}
                        >
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Canvas
