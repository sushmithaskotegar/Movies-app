import React, { useState, useEffect } from "react";
import "./BookingPage.css"; // Import your custom CSS file
import QRCode from "react-qr-code"; // Import QRCode component

const BookingPopup = ({ bookingDetails, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Ticket Booked!</h2>
        <p>Date: {bookingDetails.date}</p>
        <p>Show Timing: {bookingDetails.showTiming}</p>
        <p>Number of Seats: {bookingDetails.numSeats}</p>
        <QRCode value={`Date: ${bookingDetails.date}\nShow Timing: ${bookingDetails.showTiming}\nNumber of Seats: ${bookingDetails.numSeats}`} />
        <div className="close-button-container">
          <button className="book-now-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};


const BookingPage = () => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showTimings, setShowTimings] = useState([]);
  const [selectedShowTiming, setSelectedShowTiming] = useState(null);
  const [numSeats, setNumSeats] = useState(1);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    // Mock data for demonstration
    const mockDates = ["2024-03-25", "2024-03-26", "2024-03-27"];
    setDates(mockDates);
  }, []);

  useEffect(() => {
    // Mock data for demonstration
    const mockShowTimings = ["10:00 AM", "2:00 PM", "6:00 PM"];
    setShowTimings(mockShowTimings);
  }, [selectedDate]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedShowTiming(null);
  };

  const handleShowTimingSelect = (timing) => {
    setSelectedShowTiming(timing);
  };

  const handleNumSeatsChange = (e) => {
    setNumSeats(parseInt(e.target.value));
  };

  const handleConfirmBooking = () => {
    setBookingDetails({
      date: selectedDate,
      showTiming: selectedShowTiming,
      numSeats: numSeats,
    });
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleBookNow = () => {
    // Navigate to the QR code page with the booking details
    // Replace the console.log with the code to navigate to the QR code page
    console.log("Navigate to QR code page with booking details:", bookingDetails);
  };

  return (
    <div className="booking-container">
      <div className="section">
        <h2>Select Date:</h2>
        <ul>
          {dates.map((date) => (
            <li key={date}>
              <button
                className={date === selectedDate ? "selected" : ""}
                onClick={() => handleDateSelect(date)}
              >
                {date}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedDate && (
        <div className="section">
          <h2>Select Show Timing:</h2>
          <ul>
            {showTimings.map((timing) => (
              <li key={timing}>
                <button
                  className={timing === selectedShowTiming ? "selected" : ""}
                  onClick={() => handleShowTimingSelect(timing)}
                >
                  {timing}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedShowTiming && (
        <div className="section">
          <h2>Select Number of Seats:</h2>
          <input
            type="number"
            value={numSeats}
            onChange={handleNumSeatsChange}
            min={1}
          />
        </div>
      )}

      {selectedShowTiming && (
        <div className="section">
          <button className="confirm-btn" onClick={handleConfirmBooking}>
            Confirm Booking
          </button>
        </div>
      )}

      {/* Popup for displaying booking details */}
      {isPopupVisible && (
        <BookingPopup bookingDetails={bookingDetails} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default BookingPage;
