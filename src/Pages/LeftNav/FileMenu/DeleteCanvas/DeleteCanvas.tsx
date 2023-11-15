import { Button, Modal, message } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../store"
import { setModalState } from "../../../../slices/modalsSlice";
import { deleteCanvas } from "../../../../slices/canvasSlice";

const DeleteCanvas = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const dispatch = useDispatch();
    const { deleteCanvasModal } = useSelector((state: RootState) => state.modalsOpenState);

    const handleClose = () => {
        dispatch(setModalState({ deleteCanvasModal: false }))
    }

    const handleDeleteCanvas = () => {
        dispatch(deleteCanvas())
        handleClose()
        success()
    }

    const success = () => {
        messageApi.open({
            type: 'info',
            content: 'Your canvas was deleted.',
        });
    };

    return (
        <>
            {contextHolder}
            <Modal
                mask
                maskClosable
                title="Are you sure you want to delete your canvas?"
                open={deleteCanvasModal}
                onCancel={handleClose}
                footer={() => (
                    <>
                        <Button size="small" onClick={handleClose}> Cancel</Button>
                        <Button size="small" type="primary" danger onClick={handleDeleteCanvas}>Delete</Button>
                    </>
                )}
            >
                <p>This action cannot be reversed</p>
            </Modal>
        </>

    )
}

export default DeleteCanvas