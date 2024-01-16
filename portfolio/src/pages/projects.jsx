import React from 'react';
import Container from '../components/Container';
import projectData from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';
import Row from 'react-bootstrap/Row';

function Projects() {
    const projects = projectData

    return (
        <Container>
            {/* Layout of cards */}
            <Row xs={1} md={2} lg={3}>
                {/* Maps project information onto each card */}
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            imgUrl={project.img}
                            title={project.name}
                            description={project.description}
                            projectLink={project.link}
                            repo={project.repo}
                        />
                    ))}
            </Row>
        </Container>
    )
}

export default Projects;