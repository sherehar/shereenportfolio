import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

export default function About() {
    return (
        <Card id='about'>
            <Row className="padd">
                <Col>
                    <h4>About me</h4>
                    <p>I am an IT Specialist</p>
                    <p>I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations.</p>
                    <p> I am always willing to learn new skills. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.</p>
                    <p>I love meeting new people, send me an email if you want to know more about me.</p>
                </Col>
                <Col>
                    <h4>Basic Information</h4>
                    <p><strong>Email:</strong><br/>shereen.haj@gmail.com</p>
                    <p><strong>Address:</strong><br/>Pr.Marijkestraat 19B<br/> 6039BW Stramproy</p>
                    <p><strong>Date of Birth:</strong><br/>January, 30th,1987</p>
                </Col>
            </Row>
           

            
        </Card>
    );
}
