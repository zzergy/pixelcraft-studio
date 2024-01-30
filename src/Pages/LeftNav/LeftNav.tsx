import useUndoRedo from '../../hooks/useUndoRedo'
import ColorPicker from './ColorPicker/ColorPicker'
import Eraser from './Eraser/Eraser'
import FileMenu from './FileMenu/FileMenu'
import styles from './LeftNav.module.scss'
import Redo from './UndoRedo/Redo'
import Undo from './UndoRedo/Undo'

const LeftNav = () => {
    const { present } = useUndoRedo()

    return (
        <div className={styles.container}>
            <FileMenu />

            {present && <>
                <Eraser />
                <Undo />
                <Redo />
                <ColorPicker />
            </>}
        </div>
    )
}

export default LeftNav