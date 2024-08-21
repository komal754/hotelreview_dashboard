
// import React, { useState, useEffect } from "react";
// import "./dashboard.css";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";
// import { Container, Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
// import { FaFilter, FaSync } from 'react-icons/fa';

// const Dashboard = () => {
//   const [chartData, setChartData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:3000/api/hotel-reviews");
//         const data = await response.json();

//         if (Array.isArray(data)) {
//           const chartData = processChartData(data);
//           setChartData(chartData);
//         } else {
//           setError("Invalid response data");
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const processChartData = (data) => {
//     if (!data) {
//       return [];
//     }
//     return data.map((review, index) => ({
//       index: index + 1,
//       serviceQuality: review["Service Quality"]?.overall_rating || 0,
//       roomQuality: review["Room Quality"]?.overall_rating || 0,
//       locationAndAccessibility: review["Location and Accessibility"]?.overall_rating || 0,
//       valueForMoney: review["Value for Money"]?.overall_rating || 0,
//       diningAndFacilities: review["Dining and Facilities"]?.overall_rating || 0,
//       safetyAndSecurity: review["Safety and Security"]?.overall_rating || 0,
//       bookingAndReservationExperience: review["Booking and Reservation Experience"]?.overall_rating || 0,
//     }));
//   };

//   return (
//     <Container fluid className="dashboard-container">
//       <Row>
//         <Col md={12} className="text-right">
//           <Button color="primary" className="mr-2">
//             <FaFilter /> Apply Filter
//           </Button>
//           <Button color="secondary">
//             <FaSync /> Refresh Data
//           </Button>
//         </Col>
//         <Col md={12}>
//           <Card className="dashboard-card">
//             <CardBody>
//               <CardTitle tag="h3" className="dashboard-title">
//                 Hotel Reviews Dashboard
//               </CardTitle>
//               <h6 className="dashboard-subtitle">
//                 Insights and Trends from Recent Reviews
//               </h6>
//               {loading ? (
//                 <p>Loading...</p>
//               ) : error ? (
//                 <p>Error: {error}</p>
//               ) : (
//                 <LineChart
//                   width={800}
//                   height={400}
//                   data={chartData}
//                   className="line-chart"
//                 >
//                   <Line
//                     type="monotone"
//                     dataKey="serviceQuality"
//                     stroke="#8884d8"
//                     strokeWidth={2}
//                     dot={{ stroke: "#8884d8", strokeWidth: 2 }}
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="roomQuality"
//                     stroke="#82ca9d"
//                     strokeWidth={2}
//                     dot={{ stroke: "#82ca9d", strokeWidth: 2 }}
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="locationAndAccessibility"
//                     stroke="#34A85A"
//                     strokeWidth={2}
//                     dot={{ stroke: "#34A85A", strokeWidth: 2 }}
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="valueForMoney"
//                     stroke="#FFC107"
//                     strokeWidth={2}
//                     dot={{ stroke: "#FFC107", strokeWidth: 2 }}
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="diningAndFacilities"
//                     stroke="#8E24AA"
//                     strokeWidth={2}
//                     dot={{ stroke: "#8E24AA", strokeWidth: 2 }}
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="safetyAndSecurity"
//                     stroke="#4CAF50"
//                     strokeWidth={2}
//                     dot={{ stroke: "#4CAF50", strokeWidth: 2 }}
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="bookingAndReservationExperience"
//                     stroke="#03A9F4"
//                     strokeWidth={2}
//                     dot={{ stroke: "#03A9F4", strokeWidth: 2 }}
//                   />
//                   <XAxis dataKey="index" />
//                   <YAxis />
//                   <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//                   <Tooltip />
//                   <Legend />
//                 </LineChart>
//               )}
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import "./dashboard.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";
import { Container, Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { FaFilter, FaSync } from 'react-icons/fa';

const Dashboard = () => {
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/api/hotel-reviews");
        const data = await response.json();

        if (Array.isArray(data)) {
          const chartData = processChartData(data);
          setChartData(chartData);
        } else {
          setError("Invalid response data");
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
    if (!data) {
      return [];
    }
    return data.map((review, index) => ({
      index: index + 1,
      serviceQuality: review["Service Quality"]?.overall_rating || 0,
      roomQuality: review["Room Quality"]?.overall_rating || 0,
      locationAndAccessibility: review["Location and Accessibility"]?.overall_rating || 0,
      valueForMoney: review["Value for Money"]?.overall_rating || 0,
      diningAndFacilities: review["Dining and Facilities"]?.overall_rating || 0,
      safetyAndSecurity: review["Safety and Security"]?.overall_rating || 0,
      bookingAndReservationExperience: review["Booking and Reservation Experience"]?.overall_rating || 0,
    }));
  };

  // Prepare data for bar chart and pie chart
  const barChartData = chartData.map(data => ({
    index: data.index,
    serviceQuality: data.serviceQuality,
    roomQuality: data.roomQuality,
  }));

  const pieChartData = [
    { name: "Service Quality", value: chartData.reduce((sum, data) => sum + data.serviceQuality, 0) },
    { name: "Room Quality", value: chartData.reduce((sum, data) => sum + data.roomQuality, 0) },
    // Add other categories as needed
  ];

  return (
    <Container fluid className="dashboard-container">
      <Row>
        <Col md={12} className="text-right">
          <Button color="primary" className="mr-2">
            <FaFilter /> Apply Filter
          </Button>
          <Button color="secondary">
            <FaSync /> Refresh Data
          </Button>
        </Col>
        <Col md={12}>
          <Card className="dashboard-card">
            <CardBody>
              <CardTitle tag="h3" className="dashboard-title">
                Hotel Reviews Dashboard
              </CardTitle>
              <h6 className="dashboard-subtitle">
                Insights and Trends from Recent Reviews
              </h6>
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : (
                <>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={chartData} className="line-chart">
                      <Line type="monotone" dataKey="serviceQuality" stroke="#8884d8" strokeWidth={2} dot={{ stroke: "#8884d8", strokeWidth: 2 }} />
                      <Line type="monotone" dataKey="roomQuality" stroke="#82ca9d" strokeWidth={2} dot={{ stroke: "#82ca9d", strokeWidth: 2 }} />
                      <Line type="monotone" dataKey="locationAndAccessibility" stroke="#34A85A" strokeWidth={2} dot={{ stroke: "#34A85A", strokeWidth: 2 }} />
                      <Line type="monotone" dataKey="valueForMoney" stroke="#FFC107" strokeWidth={2} dot={{ stroke: "#FFC107", strokeWidth: 2 }} />
                      <Line type="monotone" dataKey="diningAndFacilities" stroke="#8E24AA" strokeWidth={2} dot={{ stroke: "#8E24AA", strokeWidth: 2 }} />
                      <Line type="monotone" dataKey="safetyAndSecurity" stroke="#4CAF50" strokeWidth={2} dot={{ stroke: "#4CAF50", strokeWidth: 2 }} />
                      <Line type="monotone" dataKey="bookingAndReservationExperience" stroke="#03A9F4" strokeWidth={2} dot={{ stroke: "#03A9F4", strokeWidth: 2 }} />
                      <XAxis dataKey="index" />
                      <YAxis />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <Tooltip />
                      <Legend />
                    </LineChart>
                  </ResponsiveContainer>

                  <Row className="mt-4">
                    <Col md={6}>
                      <Card className="dashboard-card">
                        <CardBody>
                          <CardTitle tag="h5">Bar Chart</CardTitle>
                          <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={barChartData}>
                              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                              <XAxis dataKey="index" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="serviceQuality" fill="#8884d8" />
                              <Bar dataKey="roomQuality" fill="#82ca9d" />
                            </BarChart>
                          </ResponsiveContainer>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card className="dashboard-card">
                        <CardBody>
                          <CardTitle tag="h5">Pie Chart</CardTitle>
                          <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                              <Pie
                                data={pieChartData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label
                              >
                                {pieChartData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#8884d8" : "#82ca9d"} />
                                ))}
                              </Pie>
                              <Tooltip />
                              <Legend />
                            </PieChart>
                          </ResponsiveContainer>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
