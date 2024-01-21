import { faRotateLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './UndoRedo.module.scss'
import useUndoRedo from "../../../hooks/useUndoRedo"
import { useSelector } from "react-redux"
import { RootState } from "../../../store"

const Undo = () => {
    const { pixelsGrid } = useSelector((state: RootState) => state.canvasParameters)

    const { undo } = useUndoRedo(pixelsGrid)
    return (
        <FontAwesomeIcon className={styles.icon} icon={faRotateLeft} onClick={() => undo()} />
    )
}

export default Undo