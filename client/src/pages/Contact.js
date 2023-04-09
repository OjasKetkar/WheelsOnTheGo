import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Header from "../components/Header/Header";
import "../styles/contact.css";
import Footer from "../components/Footer/Footer";
const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
        <Header />
      <CommonSection title="Contact" />
      <section className="contactbg">
        <Container>
          <Row>
            <Col className="left-col">
              <h6 className="contact-header">Get In Touch</h6>

              <Form className="">
                <FormGroup className="contact__form">
                  <label htmlFor="name" className="labels">Your Name</label >
                  <Input className="Yourname" placeholder="Your Name" type="text" name="name"/>
                </FormGroup>

                <FormGroup className="contact__form">
                  <label htmlFor="email" className="labels">Your Email</label>
                  <Input name="email" placeholder="Email" type="email" />
                </FormGroup>

                <FormGroup className="contact__form">
                  <label htmlFor="message" className="labels">Your Message:</label> <br />
                  <textarea
                    rows="4"                  
                    placeholder="Enter Message"
                    className="textarea"
                    name="message"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  <p>
                  Send Message
                  </p>
                </button>
              </Form>
            </Col>

            <Col className="col-right">
              <div className="contact-info_section">
                <h6 className="cont_info-header">Contact Information</h6>
                <p className="section__description">
                  Pune, India
                </p>

                <div className="phone_section">
                  <h6 className="phone">Phone:</h6>
                  <p className="section__description ">+91 9852345623</p>
                </div>

                <div className="email_section">
                  <h6 className="email">Email:</h6>
                  <p className="section__description ">dsc@vit.edud</p>
                </div>

                <h6 className="follow-us-link_section">Follow Us</h6>

                <div className="">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </Helmet>
  );
};

export default Contact;