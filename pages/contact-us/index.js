import Header from "@/components/Header";
import { useState } from "react";


export default function AboutUs() {
 

 return (
    <><Header />
    <div className="contact-us">
        <div className="contact-container">

          <div className="contact-header">
            <span className="contact-subtitle">CONTACT US</span>
            <h2 className="contact-title">
              Get in Touch With <span>Mahakal UPVC</span>
            </h2>
            <p className="contact-description">
              We’re here to assist you with all your UPVC requirements. Reach out to us
              for product inquiries, expert guidance, or business collaborations.
            </p>
          </div>

          <div className="contact-content">

            <div className="contact-info">
              <div className="info-item">
                <h4>Our Location</h4>
                <p>
                  P-110, Kalindi Gold City, Bhangiya<br />
                  Indore – 452001, Madhya Pradesh
                </p>
                <a
                  href="https://www.google.com/maps/dir/Indore,+Madhya+Pradesh/22.7922745,75.8621953/@22.7923545,75.8619538,19z/data=!4m9!4m8!1m5!1m1!1s0x3962fcad1b410ddb:0x96ec4da356240f4!2m2!1d75.8577258!2d22.7195687!1m0!3e0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#454141ff", textDecoration: "none", fontWeight: "600" }}
                >
                  📍 Get Directions
                  <br />
                </a>
              </div>

              <div className="info-item">
                <h4>Email Address</h4>
                <p>
                  <a href="mailto:mahakalmahakal3794@gmail.com">
                    mahakalmahakal3794@gmail.com
                  </a>
                </p>
              </div>

              <div className="info-item">
                <h4>Contact Number</h4>
                <p>
                  <a href="tel:+919067446328">
                    +91 90674 46328
                  </a>
                  <a href="tel:+919752929902">+91 9752929902</a>
                </p>
              </div>
            </div>

            <div className="contact-cta">
              <h3>Let’s Build Something Exceptional</h3>
              <p>
                Connect with our team to explore premium UPVC solutions designed for
                durability, style, and long-term value.
              </p>
            </div>

          </div>
        </div>
      </div></>
  );
}
