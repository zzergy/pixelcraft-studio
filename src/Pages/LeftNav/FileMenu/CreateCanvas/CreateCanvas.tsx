import { faFile as faFileRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './CreateCanvas.module.scss'
import { useState } from "react";
import { Dimentions } from "../../../../types";
import { useDispatch, useSelector } from "react-redux";
import { setCanvasSize } from "../../../../slices/canvasSlice";
import { Button, Modal, message } from 'antd';
import { RootState } from '../../../../store';
import { setModalState } from '../../../../slices/modalsSlice';

const CreateCanvas = () => {
    const validationPattern = /^(?:[5-9]|[1-5]\d|60)$/;
    const initialDimentions = { rows: 0, columns: 0 }
    const [messageApi, contextHolder] = message.useMessage();

    const dispatch = useDispatch();
    const classnames = require('classnames')

    const { createCanvasModal } = useSelector((state: RootState) => state.modalsOpenState)
    const [error, setError] = useState({ rows: false, columns: false });
    const [canvasDimentions, setCanvasDimentions] = useState<Dimentions>(initialDimentions)
    const presetCanvasSizes: ['5x5', '15x15', '25x25', '60x60'] = ['5x5', '15x15', '25x25', '60x60']

    const handleCreateCanvas = () => {
        dispatch(setCanvasSize(canvasDimentions))
        handleClose()
        success()
    }

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCanvasDimentions({ ...canvasDimentions, [name]: parseInt(value) })

        if (!validationPattern.test(value)) {
            setError({ ...error, [name]: true })
            return
        }

        setError({ ...error, [name]: false })
    }

    const handleClickCanvasOption = (rows: number, columns: number) => {
        setCanvasDimentions({ ...canvasDimentions, rows, columns })
    }

    const handleClose = () => {
        dispatch(setModalState({ createCanvasModal: false }))
        setError({ columns: false, rows: false })
        setCanvasDimentions(initialDimentions)
    }

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Your canvas is all set!',
        });
    };

    return (
        <>
            {contextHolder}
            <Modal
                mask
                maskClosable
                className={styles.modal}
                open={createCanvasModal}
                onCancel={handleClose}
                footer={null}
            >
                <div>
                    <FontAwesomeIcon
                        icon={faFileRegular}
                        className={styles.icon}
                    />
                    <span className={styles.titleText}>New Drawing Canvas</span>
                </div>

                <div className={styles.content}>
                    <div className={styles.section}>
                        <label className={styles.label} htmlFor='width'>Width</label>
                        <input
                            id='width'
                            name='columns'
                            className={classnames(styles.input, error.columns && styles.error)}
                            value={!canvasDimentions.columns ? '' : canvasDimentions.columns}
                            onChange={(event) => handleChangeInput(event)}
                        />
                        {error.columns && <div className={styles.errorMessage}>Canvas width must be between 5 and 60</div>}
                    </div>
                    <div className={styles.section}>
                        <label className={styles.label} htmlFor="height">Height</label>
                        <input
                            id='height'
                            name='rows'
                            className={classnames(styles.input, error.rows && styles.error)}
                            value={!canvasDimentions.rows ? "" : canvasDimentions.rows}
                            onChange={(event) => handleChangeInput(event)}
                        />
                        {error.rows && <div className={styles.errorMessage}>Canvas height must be between 5 and 60</div>}
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
                <div className={styles.createCanvas}>
                    <Button
                        disabled={error.columns ||
                            error.rows ||
                            !canvasDimentions.rows ||
                            !canvasDimentions.columns
                        }
                        onClick={handleCreateCanvas}
                        size='large'
                        type='primary'
                    >
                        Create Canvas
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export default CreateCanvas