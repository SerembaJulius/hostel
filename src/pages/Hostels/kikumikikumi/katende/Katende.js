import React, {useState} from 'react';
import './katende.css';

const Katende = () => {
               // State for room selection modal
const [selectedRoomType, setSelectedRoomType] = useState('');
const [showModal, setShowModal] = useState(false);

// Function to open the room selection modal
const openRoomSelectionModal = () => {
setShowModal(true);
};

// Function to confirm room selection and handle redirection
const confirmRoomSelection = () => {
// Route for the payment form
const paymentFormRoute = `/payment-form/${selectedRoomType}`;

// Redirect to the payment form route
window.location.href = paymentFormRoute;

// Close the modal
setShowModal(false);

// Alert for debugging purposes (you can remove this in production)
alert(`Selected Room Type: ${selectedRoomType}`);
};
  return (
    <div className="container">
      <section className="a">
        <div className="container1">
          <div className="outer">
            <div className="details">
              <h1>KATENDE HOSTEL</h1>
              <h2>
                <span>Located: Makerere Kikoni</span> <br></br>
                <span>Custodian's Contact : 0739328476</span><br></br>
                <span>Rating : 3.1</span>
                
              </h2>
              <br />
              <span className="fa fa-star fa-3x checked"></span>
              <span className="fa fa-star fa-3x checked"></span>
              <span className="fa fa-star fa-3x checked"></span>
              <span className="fa fa-star fa-3x empty"></span>
              <span className="fa fa-star fa-3x empty"></span>
            </div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=Katende+Hostel+Makerere+Kikumikikumi" target="_blank" class="btn-directions">
                  Get Directions
               </a>
          </div>
        </div>
      </section>

        {/* Hostel Rooms Section */}
    <section className="hotel-rooms">
        <h2>Hostel Rooms and Pricing</h2>

        {/* Double Room */}
        <div className="room">
          <h3>Double Room</h3>
          <p>Spacious room with basic amenities</p>
          <p className="price">Ugsh 450000  per semester</p>
        </div>

        {/* Double Self Contained Room */}
        <div className="room">
          <h3>Single Room</h3>
          <p>Luxurious room with additional features</p>
          <p className="price">Ugsh  700000 per semester</p>
        </div>

        {/* Room Booking Button */}
        <div className="room-buttons">
          <button id="bookNowButton" onClick={openRoomSelectionModal}>
            Book Now
          </button>
        </div>

        {/* Room Selection Modal */}
        {showModal && (
          <div id="roomSelectionModal" className="modal">
            <div className="modal-content">
              <h3>Choose Room Type</h3>
              <select
                id="roomTypeSelect"
                onChange={(e) => setSelectedRoomType(e.target.value)}
              >
                <option value="double">Double Room</option>
                <option value="self-contained">Double Self Contained Room</option>
              </select>

              <button id="selectRoomButton" onClick={confirmRoomSelection}>
                Confirm Selection
              </button>
            </div>
          </div>
        )}
      </section>

      <section className="k">
        <div className="x">
          <h1>Amenities</h1>
         
          <p>
            Wifi: The hostel provides free wifi to all hostel residents 24 hours
            a day
          </p>

          <p>
            Standby generator: Our hostel is not faced with power shortages
            because power is available 24/7
          </p>

          <p>
            Security: Available 24/7 to provide the safety of our residents and
            their property.
          </p>
        </div>
      </section>

      <section id="testimonials">
        <div className="testial-headingimon">
          <h1>Clients Say</h1>
        </div>

        <div class="row">
  <div class="col-sm-6">
    <div class="testimonial-box">
      <p>“Katende Hostel is a great place to stay for students. The rooms are clean and comfortable, the staff is friendly and helpful, and the amenities are excellent.”</p>
      <p>— Jane Doe, Student</p>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="testimonial-box">
      <p>“I have been staying at Katende Hostel for the past two years and I have never had any problems. The hostel is always clean and well-maintained, and the staff is always willing to go the extra mile to help.”</p>
      <p>— John Smith, Student</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-sm-6">
    <div class="testimonial-box">
      <p>“I love staying at Katende Hostel because it feels like home away from home. The staff is like family, and the other residents are always friendly and welcoming.”</p>
      <p>— Mary Jones, Student</p>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="testimonial-box">
      <p>“I highly recommend Katende Hostel to any student looking for a safe, comfortable, and affordable place to stay.”</p>
      <p>— David Brown, Student</p>
    </div>
  </div>
</div>

      </section>

 
    <section className="n">
      <div className="container">
        <main className="row">
          <div className="contact-form">
            <h1>Contact Us</h1>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email address" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Enter your message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </main>
      </div>
    </section>
 

    </div>
  );
};

export default Katende;
