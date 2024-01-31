import { ColorPicker as AntColorPicker } from "antd"
import { Color } from "antd/es/color-picker"
import { useDispatch, useSelector } from "react-redux"
import { changeDrawingColor } from "../../../slices/canvasSlice"
import { RootState } from "../../../store"
import styles from './ColorPicker.module.scss'

const ColorPicker = () => {
    const drawingColor = useSelector((state: RootState) => state.canvasData.drawingColor)
    const dispatch = useDispatch()

    const handleColorChange = (_value: Color, hex: string) => {
        dispatch(changeDrawingColor(hex))
    }

    return (
        <AntColorPicker className={styles.colorPicker} size="small" defaultValue={drawingColor} value={drawingColor} onChange={(value, hex) => handleColorChange(value, hex)} />
    )
}

export default ColorPicker