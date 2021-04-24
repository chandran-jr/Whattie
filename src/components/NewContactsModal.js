import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'


export default function NewContactsModal({closeModal}) {

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

                </Form>
            </Modal.Body>
        </div>
    )
}
