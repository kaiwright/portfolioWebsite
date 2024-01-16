import React from 'react';
import CardEl from '../components/CardEl';
import Container from '../components/Container';
import data from '../data/projects.json'


function Projects() {
    return (
        <Container>
            <CardEl
                imgUrl={data.projects.one.img}
                title={data.projects.one.name}
                description={data.projects.one.description}
                buttontxt="See more" />

            <CardEl
                imgUrl={data.projects.two.img}
                title={data.projects.two.name}
                description={data.projects.two.description}
                buttontxt="See more" />

            <CardEl
                imgUrl={data.projects.three.img}
                title={data.projects.three.name}
                description={data.projects.three.description}
                buttontxt="See more" />

            <CardEl
                imgUrl={data.projects.four.img}
                title={data.projects.four.name}
                description={data.projects.four.description}
                buttontxt="See more" />

            <CardEl
                imgUrl={data.projects.five.img}
                title={data.projects.five.name}
                description={data.projects.five.description}
                buttontxt="See more" />

            <CardEl
                imgUrl={data.projects.six.img}
                title={data.projects.six.name}
                description={data.projects.six.description}
                buttontxt="See more" />

        </Container>
    )
}

export default Projects;