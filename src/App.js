import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import { productData } from './product';

const App = () => {
  const firstName = 'Molka'; 

  return (
    <Container className="py-5">
      <Card>
        <Card.Body>
          <Row>
            <Col md={4}>
              <Image image={productData.image} />
            </Col>
            <Col md={8}>
              <Name name={productData.name} />
              <Price price={productData.price} />
              <Description description={productData.description} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <div className="mt-4">
        <p className="lead">Hello, {firstName ? firstName : 'there'}!</p>
        {firstName && <Image image="/iphone.jpg" />}
      </div>
    </Container>
  );
};

export default App;
