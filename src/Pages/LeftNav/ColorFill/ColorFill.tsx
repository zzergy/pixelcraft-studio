import { faFillDrip } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { triggerColorFillMode, triggerEraseMode } from "../../../slices/canvasActionToolsSlice"
import { useDispatch, useSelector } from "react-redux"
import styles from './ColorFill.module.scss'
import { RootState } from "../../../store"

const ColorFill = () => {
    const dispatch = useDispatch()
    const classnames = require('classnames')
    const { isColorFillMode } = useSelector((state: RootState) => state.canvasActionTools)

    return (
        <button
            onClick={() => dispatch(triggerColorFillMode())}
            className={classnames(styles.colorFillButton, isColorFillMode && styles.active)}
        >
            <FontAwesomeIcon icon={faFillDrip} />
        </button>
    )
}

export default ColorFill