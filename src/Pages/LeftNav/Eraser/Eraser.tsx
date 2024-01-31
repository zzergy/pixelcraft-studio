import { faEraser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './Eraser.module.scss'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store"
import { triggerEraseMode } from "../../../slices/canvasActionToolsSlice"
import useUndoRedo from "../../../hooks/useUndoRedo"

const Eraser = () => {
    const classnames = require('classnames')
    const dispatch = useDispatch();
    const { isEraseMode } = useSelector((state: RootState) => state.canvasActionTools)
    const { canvasHistory } = useUndoRedo()

    return (
        <button
            disabled={canvasHistory.length === 1}
            onClick={() => dispatch(triggerEraseMode())}
            className={classnames(styles.eraseButton, isEraseMode && styles.active)}
        >
            <FontAwesomeIcon icon={faEraser} />
        </button>
    )
}

export default Eraser