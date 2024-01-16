import React from 'react';
import Container from '../components/Container'
import CardEl from '../components/CardEl';

function Contact() {
    return (
        <Container>
            <div style={{ padding: '5%'}}>
                <CardEl
                    imageUrl="path/to/image.jpg"
                    title="Custom Card Title"
                    description="Custom card description"
                    buttontxt="Custom Button Text"
                />
            </div>
            <div style={{ padding: '5%'}}>
                <CardEl
                    imageUrl="path/to/image.jpg"
                    title="Custom Card Title"
                    description="Custom card description"
                    buttontxt="Custom Button Text"
                />
            </div>

        </Container>
    )

}

export default Contact;