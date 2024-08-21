import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import './home.css';

const data = [
  { name: 'Service Quality', value: 85 },
  { name: 'Room Quality', value: 75 },
  { name: 'Value for Money', value: 70 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const HomePage = () => {
  return (
    <Container className="home-container">
      <Row>
        <Col xs="12" className="text-center">
          <h1 className="animated-title">Welcome to the Hotel Review Dashboard</h1>
          <p className="sub-title">
            Your go-to platform for authentic hotel reviews and ratings.
          </p>
          <Button color="primary" size="lg" className="explore-button">
            Explore Reviews
          </Button>
        </Col>
      </Row>
      <Row className="features-row">
        <Col xs="12" md="6" className="chart-col">
          <h3 className="chart-title">Overall Ratings</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name }) => name}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Col>
        <Col xs="12" md="6" className="feature-col">
          <div className="feature-box">
            <h3>Service Quality</h3>
            <p>See how our guests rate the quality of our services.</p>
          </div>
          <div className="feature-box">
            <h3>Room Quality</h3>
            <p>Find out what makes our rooms stand out.</p>
          </div>
          <div className="feature-box">
            <h3>Value for Money</h3>
            <p>Discover the best value for your stay.</p>
          </div>
        </Col>
    </Row>
    </Container>
  );
};

export default HomePage;
