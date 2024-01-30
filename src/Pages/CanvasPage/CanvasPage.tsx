import { useSelector } from "react-redux"
import Header from "../../Shared/Header/Header"
import Canvas from "../Canvas/Canvas"
import LeftNav from "../LeftNav/LeftNav"
import styles from './CanvasPage.module.scss'
import { RootState } from "../../store"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons"
import useUndoRedo from "../../hooks/useUndoRedo"

const CanvasPage = () => {
    const { present } = useUndoRedo()
    const canvasParameters = useSelector((state: RootState) => state.canvasData)
    const { drawingColor } = canvasParameters

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <LeftNav />

                {!present ?
                    <div className={styles.emptyCanvas}>
                        <FontAwesomeIcon icon={faHeartCrack} className={styles.heart} />
                        <p className={styles.text}>Oops! No canvas found!</p>
                    </div> :
                    <Canvas drawingColor={drawingColor} canvasGrid={present} />
                }
            </div>
        </div>)
}

export default CanvasPage