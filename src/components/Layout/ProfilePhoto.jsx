import React from 'react'
import { Row,Col,Image } from 'react-bootstrap'
import ProfileImage from '../Images/Shereen.jpg'

export default function ProfilePhoto() {
    return (
        <div className="pCard social">
            <Row>
                <Col>
                    <Image className="profile" src={ProfileImage} roundedCircle />  
                    <h1>
                        Shereen Haj Mahmoud
                    </h1>
                    <h2>
                        IT Specialist
                    </h2>
                </Col>
            </Row>
            <Row className="social">
                <Col>
                    <a href="https://www.linkedin.com/in/sherehar/" target='_blank' className="fa fa-linkedin"></a>
                    <a href="https://github.com/sherehar" target='_blank' className="fa fa-github"></a>
                </Col>
            </Row>
            
        </div>
    )
}
