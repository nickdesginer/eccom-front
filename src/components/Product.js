import { Button, Card } from "react-bootstrap";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <>
      <Card style={ { width: '18rem', marginBottom: "10px" } }>
        <Card.Img height={ 250 } variant="top" src={ imageUrl[0] } />
        <Card.Body>
          <Card.Title>{ name }</Card.Title>
          <Card.Text>
            { description.substring(0, 100) }...
          </Card.Text>
          <Link to={ `/product/${productId}` }>
            <Button size="lg" variant="primary">View</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
