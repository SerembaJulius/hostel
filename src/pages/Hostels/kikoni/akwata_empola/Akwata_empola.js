import React from 'react';
// import BookNowButton from './pages/Hostels/BookNowButton';
import './akwata_empola.css';

const AKwata_empola = () => {
  return (
    <div className="container">
      <section className="a">
        <div className="container1">
          <div className="outer">
            <div className="details">
              <h1>AKWATA EMPOLA HOSTEL</h1>
              <h2>
                <span>Located: Makerere Kikoni</span> <br></br>
                <span>Custodian's contact : 0704578111</span> <br></br>
                <span>Rating : 3.9</span>
                
              </h2>
              <br />
              <span className="fa fa-star fa-3x checked"></span>
              <span className="fa fa-star fa-3x checked"></span>
              <span className="fa fa-star fa-3x checked"></span>
              <span className="fa fa-star-half fa-3x checked" style={{ color: 'orange' }}></span>
              <span className="fa fa-star fa-3x empty"></span>
            </div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=Akwata+Empola+Hostel+Makerere+Kikoni" target="_blank" class="btn-directions">
                  Get Directions
               </a>
          </div>
        </div>
      </section>

      <section className="p">
       
            <div className="room-details">
             
            <section className="hotel-rooms">
      <h2>Hostel Rooms and Pricing</h2>

      <div className="room">
        <h3>Double Room</h3>
        <p>Spacious room with basic amenities</p>
        <p className="price">Ugsh 750000 per semmester</p>
      </div>

      <div className="room">
        <h3>Double Self Contained Room</h3>
        <p>Luxurious room with additional features</p>
        <p className="price">Ugsh 850000 per semmester</p>
      </div>

      <div className="room">
        <h3>Single Room</h3>
        <p>Exclusive with the best feactures</p>
        <p className="price">Ugsh 1200000 per semmester</p>
      </div>

      {/* <BookNowButton /> */}
    </section>

              
            
        </div>
      </section>

      <section className="k">
        <div className="x">
          <h1>Amenities</h1>
          <p>
            Shuttles: Our hostel provides students with transport to and from
            campus with working hours of 6:30 am up to 9:00 pm
          </p>


          <p>
            Wifi: The hostel provides free wifi to all hostel residents 24 hours
            a day
          </p>

          <p>
          Restaurant: The hostel has a restaurant where students can by all their meals from
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
      <p>“Akwata Hostel is a good place to stay for students. The rooms are clean and comfortable, the staff is friendly and helpful, and the amenities are excellent.”</p>
      <p>— Jane Francis, Student</p>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="testimonial-box">
      <p>“I have been staying at this Hostel for the past three years and I have never had any problems. The hostel is always clean and well-maintained, and the staff is always willing to go the extra mile to help.”</p>
      <p>— John Mary, Student</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-sm-6">
    <div class="testimonial-box">
      <p>“I love staying at Akwata Empola Hostel because it feels like home away from home. The staff is like family, and the other residents are always friendly and welcoming.”</p>
      <p>— Mary Jones, Student</p>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="testimonial-box">
      <p>“I highly recommend Akwata Empola Hostel to any student looking for a safe, comfortable, and affordable place to stay.”</p>
      <p>— Denis  Brown, Student</p>
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

export default AKwata_empola;
