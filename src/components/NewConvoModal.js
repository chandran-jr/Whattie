import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import {useContacts} from '../contexts/ContactsProvider';

export default function NewConvoModal() {

    const [selectedContactIds, setSelectedContactIds] = useState([]);
    const {contacts} = useContacts();

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleCheckboxChange(contactId) {
        setSelectedContactIds(prevSelectedContactIds => {
            if(prevSelectedContactIds.includes(contactId)){
                return prevSelectedContactIds.filter(prevId => {
                    return contactId !== prevId
                })
            }
            else {
                return [...prevSelectedContactIds, contactId]
            }
        })
    }



    return (
        <div>
            <Modal.Header closeButton>
                Create conversation
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                   {contacts.map(contact => (
                        <Form.Group controlId={contact.id} key={contact.id}>
                            <Form.Check 
                                type="checkbox"
                                value={selectedContactIds.includes(contact.id)}
                                label={contact.name}
                                onChange={() => handleCheckboxChange(contact.id)}
                            />
                        </Form.Group>
                   ))}
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </div>
    )
}
