
import Container from '../components/Container'
import Hero from '../components/Hero';
import Row from 'react-bootstrap/Row';
import projectData from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';


function Home() {
    const projects = projectData

    return (
        <div>
            <Container>
                <Hero/>

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
                                link={project.link}
                                repo={project.repo}
                            />
                        ))}
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Home;