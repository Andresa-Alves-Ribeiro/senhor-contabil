import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//tostify

function MyModalConfirm({ show, onHide }: any) {

    const handleSaveChanges = () => {
        toast.success('Compra finalizada com sucesso!');
        onHide();
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Confirme</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Tem certeza que deseja finalizar a compra?</h5>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSaveChanges}>
                    Finalizar Compra
                </Button>
                <Button variant="secondary" onClick={onHide}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyModalConfirm;
