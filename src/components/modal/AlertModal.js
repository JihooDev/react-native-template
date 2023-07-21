import React from 'react'
import Modal from 'react-native-modal';
import { useRecoilState } from 'recoil';
import { modalOpen } from '../../recoil/control';

const AlertModal = () => {
    const [modalState, setModalState] = useRecoilState(modalOpen);

    return (
        <Modal
            isVisible={modalState}
            onBackdropPress={() => setModalState(false)}
        >

        </Modal>
    )
}

export default AlertModal