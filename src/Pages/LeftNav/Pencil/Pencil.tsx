import { faPencil } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './Pencil.module.scss'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store"
import { triggerColorFillMode, triggerEraseMode } from "../../../slices/canvasActionToolsSlice"

const Pencil = () => {
    const dispatch = useDispatch();
    const classnames = require('classnames')
    const { isEraseMode, isColorFillMode } = useSelector((state: RootState) => state.canvasActionTools)

    const handleClickPencil = () => {
        dispatch(triggerEraseMode(false))
        dispatch(triggerColorFillMode(false))
    }

    return (
        <button
            onClick={handleClickPencil}
            className={classnames(styles.pencil, !isEraseMode && !isColorFillMode && styles.active)}
        >
            <FontAwesomeIcon icon={faPencil} />
        </button>
    )
}

export default Pencil

