import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [buttonText, setButtonText] = useState('Send');

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="contact">
      <Container>
        <Row className="align-items-center">
        <Col size={12} md={12}>
            <h2>Get In Touch</h2>
            <iframe
              id="map"
              className="map-control"
              // max-width="500px"
              width="100%"
              height="200px"
              title="map"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              // style={{ filter: "opacity(0.7)", borderRadius: "20px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325516.3770455822!2d30.532690549999998!3d50.40203550000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1677493573800!5m2!1suk!2sua"
            />
          </Col >
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div>
                  {/* <div>
                    <h3>
                      ADDRESS
                    </h3>
                    <p>
                      97 Warren St. <br />
                      New York, NY 10007
                    </p>
                  </div> */}
                  {/* <div>
                    <h3>
                      EMAIL
                    </h3>
                    <a href={`mailto: k.belchinskaya@gmail.com`}>
                      k.belchinskaya@gmail.com
                    </a>
                    <h3>
                      PHONE
                    </h3>
                    <p>123-456-7890</p>
                  </div> */}
                </div>
              <form
                netlify
                name="contact"
                onSubmit={handleSubmit}
              >
                {/* <h2>Hire Me</h2> */}
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                  suscipit officia aspernatur veritatis. Asperiores, aliquid?
                </p>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      placeholder="Name"
                      type="text"
                      id="name"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      placeholder="Email Address"
                      type="email"
                      id="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                  <Col size={12} className="px-1">
                  <textarea
                    rows="6"
                    placeholder="Message"
                    id="message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button type="submit"><span>{buttonText}</span></button>
                  </Col>
                </Row>
              </form>
            </div>}
          </TrackVisibility>
        </Col>
        </Row>
      </Container>
    </section>
  );
}