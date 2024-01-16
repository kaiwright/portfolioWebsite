import React from 'react';
import Container from '../components/Container'
import CardEl from '../components/CardEl';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <Container>
            <div style={{ padding: '5%'}}>
                <CardEl
                    imageUrl="path/to/image.jpg"
                    title="My Email"
                    description="kaimatthewwright@gmail.com"
                />
            </div>
            <div style={{ padding: '5%'}}>
                <Link target="_blank" to="https://www.linkedin.com/in/kai-wright/">
                <CardEl
                    imageUrl="/imgs/linkedin.png"
                    title="LinkedIn"
                    description="Click here to visit my LinkedIn"
                />
                </Link>
                <div style={{ padding: '5%'}}>
                <Link target="_blank" to="https://github.com/kaiwright">
                <CardEl
                    imageUrl="/imgs/linkedin.png"
                    title="GitHub"
                    description="Click here to visit my GitHub"
                />
                </Link>
            </div>

        </Container>
    )

}

export default Contact;