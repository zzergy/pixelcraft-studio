import { Popover, Slider } from "antd"
import ToolButton from "../ToolButton/ToolButton"
import { faPencil } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { triggerDrawingMode } from "../../../slices/canvasActionToolsSlice"
import { RootState } from "../../../store"
import { useState } from "react"
import styles from './Pencil.module.scss'
import { setPencilSize } from "../../../slices/canvasSlice"
import { OddPixelSize } from "../../../types"

const isOddPixelSize = (num: number): num is OddPixelSize => {
    return [1, 3, 5, 7, 9].includes(num);
};
const Pencil = () => {
    const dispatch = useDispatch()
    const { isDrawingMode } = useSelector((state: RootState) => state.canvasActionTools)
    const { pencilSize } = useSelector((state: RootState) => state.canvasData)
    const [open, setOpen] = useState<boolean>(false)


    const handlePencilClick = () => {
        dispatch(triggerDrawingMode(!isDrawingMode))
    }

    const handleSliderChange = (value: number) => {
        if (isOddPixelSize(value)) {
            dispatch(triggerDrawingMode(true))
            dispatch(setPencilSize(value))
        }
    }

    return (
        <Popover
            trigger='click'
            open={open}
            arrow={false}
            onOpenChange={(open) => setOpen(open)}
            placement="right"
            className={styles.popover}
            content={<div className={styles.slider}>
                <Slider
                    defaultValue={pencilSize}
                    step={2}
                    min={1}
                    max={9}
                    value={pencilSize}
                    onChange={(value) => handleSliderChange(value)}
                />
            </div>}
        >
            <ToolButton
                icon={faPencil}
                onClick={handlePencilClick}
                isActive={isDrawingMode}
            />
        </Popover>
    )
}

export default Pencil