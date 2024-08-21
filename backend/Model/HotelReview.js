
const mongoose = require('mongoose');

const serviceQualitySchema = new mongoose.Schema({
  probability: { type: Number },
  overall_rating: { type: Number },
  "Staff Attitude": { type: Number },
  "Staff Assistance": { type: Number },
  sub_string: { type: String }
});

const roomQualitySchema = new mongoose.Schema({
  probability: { type: Number },
  overall_rating: { type: Number },
  Cleanliness: { type: Number },
  "Comfort of Beds and Pillows": { type: Number },
  sub_string: { type: String }
});

const locationAndAccessibilitySchema = new mongoose.Schema({
  probability: { type: Number },
  overall_rating: { type: Number },
  Location: { type: Number },
  sub_string: { type: String }
});

const valueForMoneySchema = new mongoose.Schema({
  probability: { type: Number },
  overall_rating: { type: Number },
  "Value for Money": { type: Number },
  sub_string: { type: String }
});

const diningAndFacilitiesSchema = new mongoose.Schema({
  probability: { type: Number },
  overall_rating: { type: Number },
  "Breakfast Buffet": { type: Number },
  "Nearby Dining Options": { type: Number },
  "Convenient Hotel Dining": { type: Number },
  sub_string: { type: String }
});

const safetyAndSecuritySchema = new mongoose.Schema({
  probability: { type: Number },
  overall_rating: { type: Number },
  "Safety and Security": { type: Number },
  sub_string: { type: String }
});

const bookingAndReservationExperienceSchema = new mongoose.Schema({
  probability: { type: Number },
  overall_rating: { type: Number },
  "Booking Experience": { type: Number },
  "Booking Directly with Hotel": { type: Number },
  "Online Check-in Process": { type: Number },
  sub_string: { type: String }
});

const hotelReviewSchema = new mongoose.Schema({
  "Service Quality": { type: serviceQualitySchema },
  "Room Quality": { type: roomQualitySchema },
  "Location and Accessibility": { type: locationAndAccessibilitySchema },
  "Value for Money": { type: valueForMoneySchema },
  "Dining and Facilities": { type: diningAndFacilitiesSchema },
  "Safety and Security": { type: safetyAndSecuritySchema },
  "Booking and Reservation Experience": { type: bookingAndReservationExperienceSchema },
  "customer feedback": { type: String }
});

const HotelReview = mongoose.model('HotelReview', hotelReviewSchema);

module.exports = HotelReview;