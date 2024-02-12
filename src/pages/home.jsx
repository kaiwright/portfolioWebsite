import React from 'react';
import Container from '../components/Container'
import Hero from '../components/Hero';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
    return (
        <div>
            <Container>
            <Hero className='w-100'>
                
            </Hero>
            <Row>
                <Col>
                <img src='/imgs/Profile_Pic.jpg'  width={'500px'}></img>
                </Col>
                <Col>
                <h3 className='text'>👋 Hi there!</h3>
                <h4 className='text'>I'm Kai, a digital designer with experience in UI/UX Design and Front-end Web Development. I love combining my creative and technical knowledge to develop applications that are both visually appealing and user-friendly.</h4>
                </Col>
                
            </Row>
            
            </Container>
        </div>
    )
}

export default Home;