import React, {useRef} from 'react';
import { Container, Form } from 'react-bootstrap';

export default function Login() {

    const idRef = useRef()

    return (
        <div>
            <Container className="align-items-center d-flex" style={{height:'100vh' }}>
               <Form>
                   <Form.Group>
                       <Form.Label>Enter your ID</Form.Label>
                       <Form.Control type="text" ref={idRef} required />
                   </Form.Group>
               </Form>
            </Container>
        </div>
    )
}
