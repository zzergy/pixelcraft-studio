import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover, Tooltip } from "antd"
import { useRef, useState } from "react"
import styles from './FileMenu.module.scss'
import useIconHover from "../../../hooks/useIconHover";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faFile as faFileRegular } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { setModalState } from "../../../slices/modalsSlice";
import CreateCanvas from "./CreateCanvas/CreateCanvas";
import DeleteCanvas from "./DeleteCanvas/DeleteCanvas";
import { RootState } from "../../../store";


const FileMenu = () => {
    const classnames = require('classnames')
    const dispatch = useDispatch();
    const popoverRef = useRef(null);
    const { iconHover, handleMouseOver, handleMouseOut } = useIconHover();

    const [open, setOpen] = useState<boolean>(false);
    const { pixelsGrid } = useSelector((state: RootState) => state.canvasParameters)
    const handleOpenModal = (modal: any) => {
        setOpen(!open)
        dispatch(setModalState({ [modal]: true }))
    }

    const data = [
        { title: 'New', modalName: 'createCanvasModal', visible: true },
        { title: 'Clear', modalName: 'clearCanvasModal', visible: pixelsGrid[0].length !== 0 },
        { title: 'Delete Canvas', modalName: 'deleteCanvasModal', visible: pixelsGrid[0].length !== 0 },
    ]

    return (
        <>
            <Popover
                ref={popoverRef}
                trigger='click'
                open={open}
                arrow={false}
                onOpenChange={(open) => setOpen(open)}
                placement="right"
                content={
                    <div className={styles.list}>
                        {data.map((item, key) =>

                            item.visible && <div
                                key={key}
                                className={classnames(styles.listItem, item.title === 'Delete Canvas' && styles.warning)}
                                onClick={() => handleOpenModal(item.modalName)}
                            >
                                {item.title}
                            </div>

                        )}
                    </div>
                }>
                <FontAwesomeIcon
                    icon={iconHover.file ? faFile : faFileRegular}
                    className={classnames(styles.icon, styles.selectable)}
                    onMouseOver={() => handleMouseOver('file')}
                    onMouseOut={() => handleMouseOut('file')}
                />
            </Popover>
            <CreateCanvas />
            <DeleteCanvas />
        </>
    )
}

export default FileMenu