import { faEraser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './Eraser.module.scss'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store"
import { setEraseMode } from "../../../slices/canvasActionToolsSlice"

const Eraser = () => {
    const classnames = require('classnames')
    const dispatch = useDispatch();
    const { pixelsGrid } = useSelector((state: RootState) => state.canvasParameters)
    const { isEraseMode } = useSelector((state: RootState) => state.canvasActionTools)

    return (
        <button disabled={pixelsGrid[0].length === 0}
            className={classnames(styles.eraseButton,
                pixelsGrid[0].length !== 0 && isEraseMode && styles.active,
                pixelsGrid[0].length === 0 && styles.disabled)}
            onClick={() => dispatch(setEraseMode({ isEraseMode: !isEraseMode }))}>
            <FontAwesomeIcon icon={faEraser} />
        </button>
    )
}

export default Eraser