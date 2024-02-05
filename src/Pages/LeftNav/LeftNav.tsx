import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useUndoRedo from '../../hooks/useUndoRedo'
import ColorPicker from './ColorPicker/ColorPicker'
import FileMenu from './FileMenu/FileMenu'
import styles from './LeftNav.module.scss'
import ToolButton from './ToolButton/ToolButton'
import { faEraser, faFillDrip, faPencil, faRotateLeft, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { triggerColorFillMode, triggerEraseMode } from '../../slices/canvasActionToolsSlice'
import { RootState } from '../../store'

const LeftNav = () => {
    const { present: hasCanvas } = useUndoRedo()
    const dispatch = useDispatch();
    const { isEraseMode, isColorFillMode } = useSelector((state: RootState) => state.canvasActionTools)
    const { canvasHistory, undoAction, redoAction } = useUndoRedo()

    const handlePencilClick = () => {
        dispatch(triggerEraseMode(false))
        dispatch(triggerColorFillMode(false))
    }

    const handleEraserClick = () => {
        dispatch(triggerEraseMode(!isEraseMode))
    }

    const handleUndoRedoClick = (action: 'undo' | 'redo') => {
        if (action === 'undo') {
            undoAction()
        } else {
            redoAction()
        }
    }

    const handleColorfillClick = () => {
        dispatch(triggerColorFillMode(!isColorFillMode))
    }

    return (
        <div className={styles.container}>
            <FileMenu />

            {hasCanvas && <>
                <ToolButton
                    icon={faPencil}
                    onClick={handlePencilClick}
                    isActive={!isEraseMode && !isColorFillMode}
                />
                <ColorPicker />
                <ToolButton
                    icon={faEraser}
                    onClick={handleEraserClick}
                    isActive={isEraseMode}
                    isDisabled={canvasHistory.length === 1}
                />
                <ToolButton
                    icon={faRotateLeft}
                    onClick={() => { handleUndoRedoClick('undo') }}
                    isDisabled={canvasHistory.length === 1}
                />
                <ToolButton
                    icon={faRotateRight}
                    onClick={() => { handleUndoRedoClick('redo') }}
                // isDisabled={canvasHistory.length === 1}
                />
                <ToolButton
                    icon={faFillDrip}
                    onClick={handleColorfillClick}
                    isActive={isColorFillMode}
                    isDisabled={canvasHistory.length === 1}
                />
            </>
            }
        </div>
    )
}

export default LeftNav