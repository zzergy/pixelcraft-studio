import { faRotateLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './UndoRedo.module.scss'
import useUndoRedo from "../../../hooks/useUndoRedo"

const Undo = () => {
    const { undoAction } = useUndoRedo()
    return (
        <FontAwesomeIcon className={styles.icon} icon={faRotateLeft} onClick={() => undoAction()} />
    )
}

export default Undo