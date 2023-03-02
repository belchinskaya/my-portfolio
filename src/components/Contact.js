import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = useState({});
  // eslint-disable-next-line
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
      // .then(() => alert("Message sent!"))
      .then(() => setStatus({ success: true, message: 'Message sent! I will contact you soon'}))
      // .catch((error) => alert(error));
      .catch((error) => {(
        setStatus({ success: false, message: 'Something went wrong, please try again later.'})
      )})
  }

  return (
    <section id="contact" className="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={12}>
              <h2>Get In Touch</h2>
              {/* <iframe
                id="map"
                className="map-control"
                width="100%"
                height="200px"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325516.3770455822!2d30.532690549999998!3d50.40203550000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1677493573800!5m2!1suk!2sua"
              /> */}
            </Col >
            <Col size={12} md={6}>
              <img src={contactImg} alt="Contact Us"/>
            </Col>
            <Col size={12} md={6}>
                <div className="animate__animated animate__fadeIn animate__repeat-1">
                  <form
                    netlify="true"
                    name="contact"
                    onSubmit={handleSubmit}
                  >
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          value={name}
                          placeholder="Name"
                          type="text"
                          id="name"
                          name="name"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          value={email}
                          placeholder="Email Address"
                          type="email"
                          id="email"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          value={message}
                          rows="6"
                          placeholder="Message"
                          id="message"
                          name="message"
                          onChange={(e) => setMessage(e.target.value)}
                        />
                        {
                          status.message &&
                          <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                          </Col>
                        }
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    
                    </Row>
                  </form>
                </div>
            </Col>
          </Row>
      </Container>
    </section>
  );
}