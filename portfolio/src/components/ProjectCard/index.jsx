import React from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'

function ProjectCard(props) {

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={props.imgUrl} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Link to={props.link} className='link-style'>Deployed Application</Link>
                    <Link to={props.repo} className='link-style'>Repository</Link>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default ProjectCard;
