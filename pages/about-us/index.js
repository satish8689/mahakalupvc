import Header from "@/components/Header";
import { useState } from "react";


export default function AboutUs() {
 

 return (
    <><Header />
    <div className="about-us">
        <div className="about-container">

          <div className="about-content">
            <span className="about-subtitle">ABOUT US</span>

            <h2 className="about-title">
              Crafting Excellence in <span>UPVC Solutions</span>
            </h2>

            <p className="about-text">
              Mahakal is a trusted name in premium UPVC solutions, dedicated to
              transforming living and working spaces with innovation, durability, and
              refined design. Our journey is driven by a passion for quality and a
              commitment to delivering products that stand the test of time.
            </p>

            <p className="about-text">
              With a strong focus on modern lifestyles, we combine advanced technology
              with expert craftsmanship to create UPVC products that are elegant,
              efficient, and environmentally responsible. Every solution we deliver
              reflects our attention to detail and customer-first philosophy.
            </p>

            <div className="about-highlights">
              <div>
                <h4>Quality First</h4>
                <p>Precision engineered products built for long-term performance.</p>
              </div>

              <div>
                <h4>Trusted Expertise</h4>
                <p>Backed by experienced professionals and industry knowledge.</p>
              </div>

              <div>
                <h4>Sustainable Vision</h4>
                <p>Eco-friendly materials supporting a greener tomorrow.</p>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-box">
              <span>UPVC</span>
              <p>Strength • Style • Sustainability</p>
            </div>
          </div>

        </div>
      </div></>
  );
}
