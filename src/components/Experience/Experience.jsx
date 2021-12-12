import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function Experience() {
    return (
        <>
            <h3 id='experience'>Experience</h3>
            <Card>
                <Row>
                    <Col className='main-col'>
                        <h5> April 2015– Sep 2016 </h5>
                        <h5>CDO & REACH organizations in Iraq </h5>
                    </Col>
                    <Col xs={7}>
                        <h5>Trainer</h5>
                        <li>MS Office Word & MS Office Excel courses. </li>
                    </Col>
                </Row>

            </Card>
            <Card>
                <Row>
                    <Col className='main-col'>
                        <h5>June 2011 – March 2013 </h5>
                        <h5>Directorate of Finance in Syria</h5>
                    </Col>
                    <Col xs={7}>
                        <h5>Manager Assistant</h5>
                        <ul>
                            <li>Prepared action plans for the department of operating plans including business requirements, identification of systems and equipments.</li>
                            <li>Implemented action plans and follows up's.</li>
                            <li>Reviewed and Reported to the Director of the Department, identifying needs of staff training, installation, operating systems, monitoring and maintenan</li>
                        </ul>
                    </Col>
                </Row>

            </Card>
            <Card>
                <Row>
                    <Col className='main-col'>
                        <h5> Oct 2009 - Feb 2012 </h5>
                        <h5>Secretariat of Raqqah governorate </h5>
                    </Col>
                    <Col xs={7}>
                        <h5>Trainer</h5>
                        <li>International Computer Driving License (ICDL) program. </li>
                    </Col>
                </Row>

            </Card>
            <Card>
                <Row>
                    <Col className='main-col'>
                        <h5>Feb 2010 – June 2011 </h5>
                        <h5>Secretariat of Raqqah governorate </h5>
                    </Col>
                    <Col xs={7}>
                        <h5>Executive Secretary </h5>
                        <ul>
                            <li>Supervising Secretarial work.</li>
                            <li>Receiving calls, coordinating with the scheduling manager on activities including meetings, secure access calls</li>
                        </ul>
                    </Col>
                </Row>
            </Card>
            
        </>
    )
}
