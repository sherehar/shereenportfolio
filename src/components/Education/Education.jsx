import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function Education() {
    return (
        <>
            <h3 id='education'>Education</h3>
            <Card>
                <Row>
                    <Col className='main-col'>
                        <h5>September 2021 - December 2021 </h5>
                        <h5>Full Stack Developer 2021 </h5>
                    </Col>
                    <Col xs={8}>
                        <h5>Matrix Master/MERN Stacks </h5>
                        <p>One Program is an three months intensive program that divided in 3 section. I have learned the concept of self-sufficiency. First part was coverd Front End (Html&Css, Javascript) whereas the second was MERN stack (Mongodb, Express, Reactjs, Nodejs)</p>
                    </Col>
                </Row>

            </Card>
            <Card>
                <Row>
                    <Col className='main-col'>
                        <h5>2010 - 2013 </h5>
                        <h5>Bachelor's Degree</h5>
                    </Col>
                    <Col xs={8}>
                        <h5>Syrian Virtual University  </h5>
                        <h5>Bachelor in Information Technology </h5>
                    </Col>
                </Row>

            </Card>
            <Card>
                <Row>
                    <Col className='main-col'>
                        <h5>2006 - 2008 </h5>
                        <h5>High School Diploma  </h5>
                    </Col>
                    <Col xs={8}>
                        <h5>Technical Institute For The Computer </h5>
                        <h5>Diploma in Computer Engineering </h5>
                    </Col>
                </Row>

            </Card>
        </>
        
    )
}
