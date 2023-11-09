import { faFile, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFile as faFileRegular } from '@fortawesome/free-regular-svg-icons';
import useIconHover from '../../../hooks/useIconHover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './CreateCanvas.module.scss'
import { useState } from "react";
import Button from "../../../Shared/Button/Button";
import { Dimentions } from "../../../types";
import { useDispatch } from "react-redux";
import { setCanvasSize } from "../../../slices/canvasSlice";
import { Modal } from 'antd';

const CreateCanvas = () => {
    const dispatch = useDispatch();
    const classnames = require('classnames')
    const { iconHover, handleMouseOver, handleMouseOut } = useIconHover();
    const [open, setOpen] = useState(false);
    const [canvasDimentions, setCanvasDimentions] = useState<Dimentions>({ rows: 15, columns: 15 })
    const presetCanvasSizes: ['15x15', '25x25', '100x100'] = ['15x15', '25x25', '100x100']

    const handleCreateCanvas = () => {
        dispatch(setCanvasSize(canvasDimentions))
        setOpen(false)
    }

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCanvasDimentions({ ...canvasDimentions, [name]: parseInt(value) })
    }

    const handleClickCanvasOption = (rows: number, columns: number) => {
        setCanvasDimentions({ ...canvasDimentions, rows, columns })
    }

    return (
        <>
            <FontAwesomeIcon
                icon={iconHover.file ? faFile : faFileRegular}
                className={classnames(styles.icon, styles.selectable)}
                onMouseOver={() => handleMouseOver('file')}
                onMouseOut={() => handleMouseOut('file')}
                onClick={() => setOpen(true)}
            />
            <Modal
                // className={styles.modal}
                open={open}

            >
                <div className={styles.header}>
                    <div>
                        <FontAwesomeIcon
                            icon={faFileRegular}
                            className={styles.icon}
                        />
                        <span className={styles.titleText}>New Drawing Canvas</span>
                    </div>
                    <FontAwesomeIcon
                        icon={faXmark}
                        className={classnames(styles.icon, styles.selectable)}
                        onClick={() => setOpen(false)}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.section}>
                        <label className={styles.label} htmlFor='width'>Width</label>
                        <input
                            id='width'
                            name='columns'
                            value={canvasDimentions.columns}
                            onChange={(event) => handleChangeInput(event)}
                        />
                    </div>
                    <div className={styles.section}>
                        <label className={styles.label} htmlFor="height">Height</label>
                        <input
                            id='height'
                            name='rows'
                            value={canvasDimentions.rows}
                            onChange={(event) => handleChangeInput(event)}
                        />
                    </div>

                    <div className={styles.label}>Preset Canvas Sizes</div>
                    <div className={styles.presetCanvasesContainer}>

                        {presetCanvasSizes.map((size, key) => {
                            const rows = parseInt(size.split('x')[0])
                            const columns = parseInt(size.split('x')[1])
                            const isSelected = canvasDimentions.rows === rows && canvasDimentions.columns === columns

                            return (
                                <div
                                    key={key}
                                    className={classnames(styles.canvasSizes, isSelected && styles.selected)}
                                    onClick={() => { handleClickCanvasOption(rows, columns) }}
                                >
                                    {size}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button label='CREATE CANVAS' onClick={handleCreateCanvas} />
                </div>
            </Modal>
        </>
    )
}

export default CreateCanvas