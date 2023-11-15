import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover, Tooltip } from "antd"
import { useRef, useState } from "react"
import styles from './FileMenu.module.scss'
import useIconHover from "../../../hooks/useIconHover";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faFile as faFileRegular } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from "react-redux";
import { setModalState } from "../../../slices/modalsSlice";
import CreateCanvas from "./CreateCanvas/CreateCanvas";
import DeleteCanvas from "./DeleteCanvas/DeleteCanvas";


const FileMenu = () => {
    const classnames = require('classnames')
    const dispatch = useDispatch();
    const popoverRef = useRef(null);
    const { iconHover, handleMouseOver, handleMouseOut } = useIconHover();

    const [open, setOpen] = useState<boolean>(false);

    const handleOpenModal = (modal: any) => {
        setOpen(!open)
        dispatch(setModalState({ [modal]: true }))
    }

    const data = [
        { title: 'New', modalName: 'createCanvasModal' },
        { title: 'Clear', modalName: 'clearCanvasModal' },
        { title: 'Delete Canvas', modalName: 'deleteCanvasModal' },
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
                            <div
                                key={key}
                                className={styles.listItem}
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