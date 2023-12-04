import React from 'react';
import './Hostelrooms.css';

const RoomItem = ({ room }) => {
  return (
    <div className="room-item">
      <div className="room-type">
        <h3>{room.type}</h3>
      </div>
      <div className="room-price">
        <span>Price:</span> Ugsh{room.price} per sem
      </div>
    </div>
  );
};

const HostelRooms = () => {
  const rooms = [
    { type: 'Single Room', price: 2000000 },
    { type: 'Double Room', price: 1200000 },
    { type: 'Triple Room', price: 90 },
    // { type: 'Dorm Room (4 beds)', price: 40 },
    // { type: 'Dorm Room (6 beds)', price: 35 },
  ];

  return (
    <section className="hostel-rooms">
      <div className="container">
        <h2>Rooms</h2>

        <div className="row">
          {rooms.map((room) => (
            <div key={room.type} className="col-sm-6 col-md-4">
              <RoomItem room={room} />
            </div>
          ))}
        </div>
      </div>

      <a href="payments.html" class="btn">
                <span>Book now</span>
      </a>
    </section>
  );
};

export default HostelRooms;
