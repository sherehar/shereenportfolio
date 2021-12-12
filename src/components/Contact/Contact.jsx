import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';

function Contact() {
    return (
        <>
            <h3 id='contact'>Contact me</h3>
            <Card>
                <Form className='padd'>
                    <Form.Group className="mb-3" controlId="Name">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Name">
                        <Form.Label>Your Mobile number</Form.Label>
                        <Form.Control type="text" placeholder="Your Mobile number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button buttonType='submit'>Send</Button>
                </Form>
            </Card>
        </>
    )
}

export default (Contact);
