import { faRotateRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './UndoRedo.module.scss'
import { RootState } from "../../../store"
import { useSelector } from "react-redux"
import useUndoRedo from "../../../hooks/useUndoRedo"

const Redo = () => {
    const { redoAction } = useUndoRedo()
    return (
        <FontAwesomeIcon className={styles.icon} icon={faRotateRight} onClick={() => redoAction()} />
    )
}

export default Redo