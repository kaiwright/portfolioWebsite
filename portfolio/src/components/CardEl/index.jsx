import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css";

function CardEl(props) {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={props.imgUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">{props.buttontxt}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardEl;