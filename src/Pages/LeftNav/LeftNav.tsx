import Eraser from './Eraser/Eraser'
import FileMenu from './FileMenu/FileMenu'
import styles from './LeftNav.module.scss'
import Redo from './UndoRedo/Redo'
import Undo from './UndoRedo/Undo'

const LeftNav = () => {

    return (
        <div className={styles.container}>
            <FileMenu />
            <Eraser />
            <Undo />
            <Redo />
        </div>
    )
}

export default LeftNav