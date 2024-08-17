// HomePage.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './home.css';
function HomePage() {
  const [reviews, setReviews] = useState([
    {
      ServiceQuality: {
        sub_string: 'Excellent service',
        overall_rating: 9
      },
      RoomQuality: {
        sub_string: 'Clean and comfortable room'
      }
    },
    {
      ServiceQuality: {
        sub_string: 'Good service',
        overall_rating: 8
      },
      RoomQuality: {
        sub_string: 'Spacious room with great view'
      }
    },
    {
      ServiceQuality: {
        sub_string: 'Fair service',
        overall_rating: 7
      },
      RoomQuality: {
        sub_string: 'Basic room with limited amenities'
      }
    }
  ]);

  return (
    <Container className="container">
      <Row>
        <Col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>Hotel Reviews</h1>
        </Col>
      </Row>
      <Row>
        {reviews.map((review, index) => (
          <Col xs="12" sm="6" md="4" lg="3" xl="3" key={index}>
            <Card className="card">
              <CardBody className="card-body">
                <CardTitle className="card-title">{review.ServiceQuality.sub_string}</CardTitle>
                <CardText className="card-text">
                  <p>Rating: {review.ServiceQuality.overall_rating}/10</p>
                  <p>Review: {review.RoomQuality.sub_string}</p>
                  {/* Add more review categories here */}
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;