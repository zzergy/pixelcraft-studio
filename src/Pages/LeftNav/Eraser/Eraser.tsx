import { faEraser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './Eraser.module.scss'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store"
import { setEraseMode } from "../../../slices/canvasActionToolsSlice"
import useUndoRedo from "../../../hooks/useUndoRedo"

const Eraser = () => {
    const classnames = require('classnames')
    const dispatch = useDispatch();
    const { isEraseMode } = useSelector((state: RootState) => state.canvasActionTools)
    const { present } = useUndoRedo()

    return (
        <button
            disabled={!present}
            onClick={() => dispatch(setEraseMode(!isEraseMode))}
            className={classnames(styles.eraseButton,
                present && isEraseMode && styles.active,
                !present && styles.disabled)
            }
        >
            <FontAwesomeIcon icon={faEraser} />
        </button>
    )
}

export default Eraser