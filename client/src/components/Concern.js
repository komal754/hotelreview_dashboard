// Concern.js
import React from 'react';
import './concern.css';
const Concern = () => {
  const data = {
    "Service Quality": {
      "probability": 0.8,
      "overall_rating": 8,
      "Staff Attitude": 0,
      "Staff Service": 8,
      "Customer Service": 8,
      "Staff Assistance": 0,
      "sub_string": "The service was very good"
    },
    "Room Quality": {
      "probability": 0.9,
      "overall_rating": 9,
      "Cleanliness": 9,
      "Room Condition": 9,
      "Comfort of Beds and Pillows": 0,
      "Room Size": 0,
      "Bathroom Size": 0,
      "Room Size Variability": 0,
      "Heating Issues": 0,
      "sub_string": "everything about this hotel is great because it is less than 1 year old"
    },
    "Location and Accessibility": {
      "probability": 1.0,
      "overall_rating": 10,
      "Location": 10,
      "Safe Walking Areas": 0,
      "Public Transportation Access": 0,
      "sub_string": "It is located next to the airport which is very important to most travellers"
    },
    "Value for Money": {
      "probability": 0.6,
      "overall_rating": 6,
      "Value for Money": 6,
      "sub_string": "Thanks to Priceline we ended up at this location and enjoyed our stay immensely"
    },
    "Dining and Facilities": {
      "probability": 0.7,
      "overall_rating": 7,
      "Breakfast Buffet": 0,
      "Nearby Dining Options": 0,
      "Convenient Hotel Dining": 7,
      "Lobby Bar": 0,
      "sub_string": "NO RESTAURANT, but you can purchase snacks"
    },
    "Safety and Security": {
      "probability": 0,
      "overall_rating": 0,
      "Safety and Security": 0,
      "Room Safety": 0
    },
    "Booking and Reservation Experience": {
      "probability": 0.5,
      "overall_rating": 5
    }
  };

  return (
    <div>
      <h1>Concerns</h1>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Probability</th>
            <th>Overall Rating</th>
            <th>Sub-string</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((category, index) => (
            <tr key={index}>
              <td>{category}</td>
              <td>{data[category].probability}</td>
              <td>{data[category].overall_rating}</td>
              <td>{data[category].sub_string}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Concern;