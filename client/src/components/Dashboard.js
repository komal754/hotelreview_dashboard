import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

const Dashboard = () => {
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/api/hotel-reviews');
        const data = await response.json();

        if (Array.isArray(data)) {
          const chartData = processChartData(data);
          setChartData(chartData);
        } else {
          setError('Invalid response data');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const processChartData = (data) => {
    if (!data || !Array.isArray(data)) {
      return [];
    }

    return data.map((review, index) => ({
      id:   index,
      serviceQuality: review?.["ServiceQuality"]?.overall_rating || 0,
      roomQuality: review?.["RoomQuality"]?.overall_rating || 0,
    }));
  };

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Hotel Reviews Dashboard</CardTitle>
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : (
                <LineChart width={500} height={300} data={chartData}>
                  <Line type="monotone" dataKey="serviceQuality" stroke="#8884d8" />
                  <Line type="monotone" dataKey="roomQuality" stroke="#82ca9d" />
                  <XAxis dataKey="id" />
                  <YAxis />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <Tooltip />
                  <Legend />
                </LineChart>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;