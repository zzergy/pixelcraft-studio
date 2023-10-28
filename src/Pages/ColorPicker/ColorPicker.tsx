import { ChromePicker, ColorResult } from 'react-color';
import styles from './ColorPicker.module.scss'

interface ColorPickerProps {
    drawingColor: string
    setDrawingColor: (color: string) => void
}

const ColorPicker = ({ drawingColor, setDrawingColor }: ColorPickerProps) => {
    const handleColorChange = (color: ColorResult) => {
        setDrawingColor(color.hex)
    }

    return (
        <ChromePicker
            color={drawingColor}
            onChange={handleColorChange}
        />
    )
}

export default ColorPicker;
