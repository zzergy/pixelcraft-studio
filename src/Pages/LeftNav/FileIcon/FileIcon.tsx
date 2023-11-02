import { Input, Modal } from "semantic-ui-react"
import { faFile, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFile as faFileRegular } from '@fortawesome/free-regular-svg-icons';
import useIconHover from '../../../hooks/useIconHover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './File.module.scss'
import { useState } from "react";
import Button from "../../../Shared/Button/Button";

const File = () => {
    const classnames = require('classnames')
    const { iconHover, handleMouseOver, handleMouseOut } = useIconHover();
    const [open, setOpen] = useState(false);

    const handleCreateCanvas = () => {

    }

    return (
        <Modal
            className={styles.modal}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            open={open}
            size="small"
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
                        icon={faFileRegular}
                        className={classnames(styles.icon, styles.selectable)}
                    />
                    <span className={styles.titleText}>New Drawing Canvas</span>
                </div>
                <FontAwesomeIcon
                    icon={faXmark}
                    className={classnames(styles.icon, styles.selectable)}
                    onClick={() => setOpen(false)}
                />
            </Modal.Header>
            <Modal.Content className={styles.content}>
                <div className={styles.section}>
                    <label className={styles.label} htmlFor='width'>Width</label>
                    <input id='width' name='width' />
                </div>
                <div className={styles.section}>
                    <label className={styles.label} htmlFor="height">Height</label>
                    <input id='height' name='height' />
                </div>

                <div className={styles.label}>Preset Canvas Sizes</div>
                <div className={styles.presetCanvasesContainer}>
                    <div className={classnames(styles.canvasSizes, styles.selected)}>15 x 15</div>
                    <div className={styles.canvasSizes}>25 x 25</div>
                    <div className={styles.canvasSizes}>100 x 100</div>
                </div>
            </Modal.Content>
            <Modal.Actions className={styles.actions}>
                <Button label='CREATE CANVAS' onClick={handleCreateCanvas} />
            </Modal.Actions>
        </Modal>
    )
}

export default File