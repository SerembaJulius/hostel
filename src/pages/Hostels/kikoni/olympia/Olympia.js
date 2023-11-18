import React from 'react';
import './Olympia.css';

const Olympia = () => {
  return (
    <div className="container">
      <section className="a">
        <div className="container1">
          <div className="outer">
            <div className="details">
              <h1>Olympia hostel</h1>
              <h2>
                <span>Makerere Kikoni</span>
                <span>3.6km from campus</span>
              </h2>
              <br />
              <span className="fa fa-star fa-3x checked"></span>
              <span className="fa fa-star fa-3x checked"></span>
              <span className="fa fa-star fa-3x checked"></span>
              <span className="fa fa-star fa-3x checked"></span>
              <span className="fa fa-star fa-3x checked"></span>
            </div>
          </div>
        </div>
      </section>

      <section className="p">
        <h1 className="d">Rooms</h1>
        <div className="rooms">
          <div className="room-item">
            {/* <img src={require('./images/oli.jpg')} alt="Room" /> */}
            <img alt= ""/>
            <div className="room-details">
              <a href="#" class="btn">
                <span>Single Self Contained</span>
                <i></i>
              </a>
              <a href="#" class="btn">
                <span>View more</span>
                <i></i>
              </a>
              <a href="payments.html" class="btn">
                <span>Book now</span>
                <i></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="box">Price: 2000000/=</h4>
          </div>
          {/* Similar block for Double Self Contained */}
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
            Swimming pool: Our hostel has a swimming pool available within the
            hostel premises, and it's accessible to all hostel residents at no
            cost.
          </p>

          <p>
            Wifi: The hostel provides free wifi to all hostel residents 24 hours
            a day
          </p>

          <p>
            Standby generator: Olympia hostel is not faced with power shortages
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

        <div className="testimonial-box-container">
          {/* Testimonial boxes go here */}
        </div>
      </section>

      <section className="n">
        <div className="container">
          <main className="row">
            {/* Your contact form section goes here */}
          </main>
        </div>
      </section>
    </div>
  );
};

export default Olympia;
