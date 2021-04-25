import React, {useRef} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';


export default function NewContactsModal({closeModal}) {

    const idRef = useRef();
    const nameRef = useRef();

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div>
            <Modal.Header closeButton>
                Create a contact
            </Modal.Header>
            <Modal.Body onSubmit={handleSubmit}>
                <Form>
                    <Form.Group>
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" ref={idRef} required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required/>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </div>
    )
}
