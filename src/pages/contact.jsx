import React from 'react';
import Container from '../components/Container'
import CardEl from '../components/CardEl';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
    return (
        <Container className='contact-box'>
            <Row sm={1} lg={3}>

                <Col>
                    <div style={{ padding: '5%' }}>
                        <CardEl
                            imgUrl="/imgs/email.png"
                            title="My Email"
                            description="kaimatthewwright@gmail.com"
                        />
                    </div>
                </Col>

                <Col>
                    <div style={{ padding: '5%' }}>
                        <Link className='link-style' target="_blank" to="https://www.linkedin.com/in/kai-wright/">
                            <CardEl
                                imgUrl="/imgs/linkedin.png"
                                title="LinkedIn"
                                description="Click here to visit my LinkedIn"
                            />
                        </Link>
                    </div>
                </Col>

                <Col>
                    <div style={{ padding: '5%' }}>
                        <Link className='link-style' target="_blank" to="https://github.com/kaiwright">
                            <CardEl
                                imgUrl="/imgs/github-logo.png"
                                title="GitHub"
                                description="Click here to visit my GitHub"
                            />
                        </Link>
                    </div>
                </Col>

            </Row>


        </Container>
    )

}

export default Contact;