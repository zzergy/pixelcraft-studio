import { Modal } from "semantic-ui-react"
import { faFile, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFile as faFileRegular } from '@fortawesome/free-regular-svg-icons';
import useIconHover from '../../../hooks/useIconHover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './File.module.scss'
import { useState } from "react";

const File = () => {
    const { iconHover, handleMouseOver, handleMouseOut } = useIconHover();
    const [open, setOpen] = useState(false);
    return (
        <Modal
            className={styles.modal}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            open={open}
            trigger={
                <FontAwesomeIcon
                    icon={iconHover.file ? faFile : faFileRegular}
                    className={styles.icon}
                    onMouseOver={() => handleMouseOver('file')}
                    onMouseOut={() => handleMouseOut('file')}
                />}
        >
            <Modal.Header className={styles.header}>
                <div>
                    <FontAwesomeIcon
                        icon={faFile}
                        className={styles.icon}
                    />
                    New Drawing Canvas
                </div>
                <FontAwesomeIcon icon={faXmark} className={styles.icon} />
            </Modal.Header>
        </Modal>
    )
}

export default File