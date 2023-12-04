import React, { useState } from 'react';
import './BookNow.css';

const RoomSelectionModal = () => {
  const [selectedRoomType, setSelectedRoomType] = useState(null);

  const handleSelectRoom = (event) => {
    setSelectedRoomType(event.target.value);
  };

  const handleConfirmSelection = () => {
    // Store the selected room type in a session or persistent storage
    localStorage.setItem('selectedRoomType', selectedRoomType);

    // Redirect to the payments page after selecting a room type
    window.location.href = 'payments.html';
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Choose Room Type</h3>
        <select id="roomTypeSelect" onChange={handleSelectRoom}>
          <option value="standard">Standard Room</option>
          <option value="deluxe">Deluxe Room</option>
          <option value="suite">Suite</option>
        </select>

        <button id="selectRoomButton" onClick={handleConfirmSelection}>Confirm Selection</button>
      </div>
    </div>
  );
};

const BookNowButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBookNowClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <a href="#" className="btn" onClick={handleBookNowClick}>
        <span>Book now</span>
      </a>

      {showModal && <RoomSelectionModal />}
    </>
  );
};

export default BookNowButton;
