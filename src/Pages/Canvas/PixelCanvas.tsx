import { useState } from "react";
import styles from './Canvas.module.scss'
import { CanvasParameters } from "../../types";

interface PixelCanvasProps {
    canvasParameters: CanvasParameters,
    drawingColor: string
}

const PixelCanvas = ({ canvasParameters, drawingColor }: PixelCanvasProps) => {
    const { rows, columns, baseColor, gridColor } = canvasParameters
    const initialEmptyCanvas = Array(rows).fill(Array(columns).fill(baseColor));
    const [pixels, setPixels] = useState<string[][]>(initialEmptyCanvas)

    // checkered pattern background idea 
    const initiateCheckeredPixels = () => {
        const updatedPixels = [...pixels.map(row => [...row])];

        for (let x = 0; x < rows; x++) {
            for (let y = 0; y < columns; y++) {
                if ((x + y) % 2 === 0) {
                    updatedPixels[x][y] = 'lightGray'; // Set the first checker color
                } else {
                    updatedPixels[x][y] = 'white'; // Set the second checker color
                }
            }
        }

        setPixels(updatedPixels)
    }

    const handleDraw = (x: number, y: number) => {
        const updatedPixels = [...pixels.map(row => [...row])];
        updatedPixels[x][y] = drawingColor;
        setPixels(updatedPixels);
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

export default PixelCanvas
