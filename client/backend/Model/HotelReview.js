const mongoose = require('mongoose');

const serviceQualitySchema = new mongoose.Schema({
  probability: { type: Number },
  overall_rating: { type: Number },
  StaffAttitude: { type: Number },
  StaffAssistance: { type: Number },
  sub_string: { type: String }
});

const roomQualitySchema = new mongoose.Schema({
  probability: { type: Number },
  overall_rating: { type: Number },
  Cleanliness: { type: Number },
  ComfortOfBedsAndPillows: { type: Number },
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
  ValueForMoney: { type: Number },
  sub_string: { type: String }
});

const diningAndFacilitiesSchema = new mongoose.Schema({
  probability: { type: Number },
  overall_rating: { type: Number },
  BreakfastBuffet: { type: Number },
  NearbyDiningOptions: { type: Number },
  ConvenientHotelDining: { type: Number },
  sub_string: { type: String }
});

const safetyAndSecuritySchema = new mongoose.Schema({
  probability: { type: Number },
  overall_rating: { type: Number },
  SafetyAndSecurity: { type: Number },
  sub_string: { type: String }
});

const bookingAndReservationExperienceSchema = new mongoose.Schema({
  probability: { type: Number },
  overall_rating: { type: Number },
  BookingExperience: { type: Number },
  BookingDirectlyWithHotel: { type: Number },
  OnlineCheckinProcess: { type: Number },
  sub_string: { type: String }
});

const hotelReviewSchema = new mongoose.Schema({
  ServiceQuality: { type: serviceQualitySchema },
  RoomQuality: { type: roomQualitySchema },
  LocationAndAccessibility: { type: locationAndAccessibilitySchema },
  ValueForMoney: { type: valueForMoneySchema },
  DiningAndFacilities: { type: diningAndFacilitiesSchema },
  SafetyAndSecurity: { type: safetyAndSecuritySchema },
  BookingAndReservationExperience: { type: bookingAndReservationExperienceSchema },
  customerFeedback: { type: String }
});

const HotelReview = mongoose.model('HotelReview', hotelReviewSchema);

module.exports = HotelReview;