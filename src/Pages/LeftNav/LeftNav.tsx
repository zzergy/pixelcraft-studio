import useUndoRedo from '../../hooks/useUndoRedo'
import ColorPicker from './ColorPicker/ColorPicker'
import FileMenu from './FileMenu/FileMenu'
import styles from './LeftNav.module.scss'
import ToolButton from './ToolButton/ToolButton'
import { faEraser, faFillDrip, faPencil, faRotateLeft, faRotateRight, faHand } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { triggerCanvasDragMode, triggerColorFillMode, triggerDrawingMode, triggerEraseMode } from '../../slices/canvasActionToolsSlice'
import { RootState } from '../../store'

const LeftNav = () => {
    const { present: hasCanvas } = useUndoRedo()
    const dispatch = useDispatch();
    const { isEraseMode,
        isColorFillMode,
        isCanvasDragMode,
        isDrawingMode
    } = useSelector((state: RootState) => state.canvasActionTools)
    const { canvasHistory, undoAction, redoAction } = useUndoRedo()

    const handlePencilClick = () => {
        dispatch(triggerDrawingMode(!isDrawingMode))
    }

    const handleEraserClick = () => {
        dispatch(triggerEraseMode(!isEraseMode))
    }

    const handleUndoRedoClick = (action: 'undo' | 'redo') => {
        action === 'undo' ? undoAction() : redoAction()
    }

    const handleColorfillClick = () => {
        dispatch(triggerColorFillMode(!isColorFillMode))
    }

    const handleDrag = () => {
        dispatch(triggerCanvasDragMode(!isCanvasDragMode))
    }

    return (
        <div className={styles.container}>
            <FileMenu />

            {hasCanvas && <>
                <ToolButton
                    icon={faRotateLeft}
                    onClick={() => { handleUndoRedoClick('undo') }}
                    isDisabled={canvasHistory.length === 1 || hasCanvas === canvasHistory[0]}
                />
                <ToolButton
                    icon={faRotateRight}
                    onClick={() => { handleUndoRedoClick('redo') }}
                    isDisabled={hasCanvas === canvasHistory[canvasHistory.length - 1]}
                />
                <ToolButton
                    icon={faPencil}
                    onClick={handlePencilClick}
                    isActive={isDrawingMode}
                />
                <ToolButton
                    icon={faHand}
                    onClick={handleDrag}
                    isActive={isCanvasDragMode}
                />
                <ColorPicker />
                <ToolButton
                    icon={faEraser}
                    onClick={handleEraserClick}
                    isActive={isEraseMode}
                    isDisabled={canvasHistory.length === 1}
                />
                <ToolButton
                    icon={faFillDrip}
                    onClick={handleColorfillClick}
                    isActive={isColorFillMode}
                    isDisabled={!hasCanvas}
                />
            </>
            }
        </div>
    )
}

export default LeftNav