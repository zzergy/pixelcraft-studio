import useUndoRedo from '../../hooks/useUndoRedo'
import ColorPicker from './ColorPicker/ColorPicker'
import FileMenu from './FileMenu/FileMenu'
import styles from './LeftNav.module.scss'
import ToolButton from './ToolButton/ToolButton'
import { faEraser, faFillDrip, faPencil, faRotateLeft, faRotateRight, faHand } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { triggerCanvasDragMode, triggerColorFillMode, triggerDrawingMode, triggerEraseMode } from '../../slices/canvasActionToolsSlice'
import { RootState } from '../../store'
import { useEffect } from 'react'

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

    const handleDragClick = () => {
        dispatch(triggerCanvasDragMode(!isCanvasDragMode))
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase()

            if (event.ctrlKey && event.shiftKey && key === 'Z') {
                handleUndoRedoClick('redo');
            } else if (event.ctrlKey && key === 'z') {
                handleUndoRedoClick('undo');
            } else if (key === 'p') {
                handlePencilClick()
            } else if (key === 'h') {
                handleDragClick()
            } else if (key === 'g') {
                handleColorfillClick()
            } else if (key === 'e') {
                handleEraserClick()
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            //Cleanup
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [isEraseMode, isColorFillMode, isCanvasDragMode, isDrawingMode, useUndoRedo])

    return (
        <div className={styles.container}>
            <FileMenu />

            {hasCanvas && <>
                <ToolButton
                    icon={faRotateLeft}
                    onClick={() => { handleUndoRedoClick('undo') }}
                    isDisabled={canvasHistory.length === 1 || hasCanvas === canvasHistory[0]}
                    tooltipText='Undo'
                />
                <ToolButton
                    icon={faRotateRight}
                    onClick={() => { handleUndoRedoClick('redo') }}
                    isDisabled={hasCanvas === canvasHistory[canvasHistory.length - 1]}
                    tooltipText='Redo'
                />
                <ToolButton
                    icon={faPencil}
                    onClick={handlePencilClick}
                    isActive={isDrawingMode}
                    tooltipText='Pencil'
                />
                <ToolButton
                    icon={faHand}
                    onClick={handleDragClick}
                    isActive={isCanvasDragMode}
                    tooltipText='Move Canvas'
                />
                <ColorPicker />
                <ToolButton
                    icon={faEraser}
                    onClick={handleEraserClick}
                    isActive={isEraseMode}
                    isDisabled={canvasHistory.length === 1}
                    tooltipText='Eraser'
                />
                <ToolButton
                    icon={faFillDrip}
                    onClick={handleColorfillClick}
                    isActive={isColorFillMode}
                    isDisabled={!hasCanvas}
                    tooltipText='Bucket Tool'
                />
            </>
            }
        </div>
    )
}

export default LeftNav