import React from 'react';
import ExploreProduct from '../ExploreProduct';

const Content = ({ activeSection }) => {

  console.log("activeSection", activeSection)
  return (
    <div className="row middle-component">
      {activeSection === "home" && <div className="upvc-experts">
        <div className="upvc-container">

          {/* LEFT CONTENT */}
          <div className="upvc-content">
            <span className="upvc-subtitle">OUR INTRODUCTION</span>

            <h2 className="upvc-title">
              We Are <span>UPVC Experts</span>
            </h2>

            <p className="upvc-description">
              We have created a new benchmark for PVC profiles with their undeterred
              efforts and incredibly creative designs. At a time when most consumers
              are giving preference to PVC, delivering products designed with a
              difference and customized to specific needs is what makes Decor Plast
              stand out among competitors.
            </p>

            <ul className="upvc-features">
              <li>Water Proof</li>
              <li>Maintenance Free</li>
              <li>Termite Proof</li>
              <li>Fire Retardant</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="upvc-image">
            <img src="/web-img/kitchen-img-1.jpg" alt="UPVC Window" />
            <img src="/web-img/kitchen-img-2.jpg" alt="UPVC Door" />
            <img src="/web-img/kitchen-img-3.jpg" alt="UPVC Slider" />
          </div>

        </div>
      </div>}

      {activeSection === "home" && <div className='explore'>
        <div className='explore-product-title'> Explore Our Main Products</div>
        <div className='explore-products'> <ExploreProduct /></div>
      </div>}

        {activeSection === "home" && <div className="why-choose-mahakal">
        <div className="why-container">

          <div className="why-header">
            <span className="why-subtitle">WHY CHOOSE US</span>
            <h2 className="why-title">
              Why Choose <span>Mahakal UPVC</span>
            </h2>
            <p className="why-description">
              At Mahakal Mahakal, we combine craftsmanship, innovation, and reliability
              to deliver UPVC solutions that elevate spaces with lasting beauty and
              unmatched performance.
            </p>
          </div>

          <div className="why-content">

            <div className="why-column">
              <div className="why-item">
                <h3>Diverse Selection</h3>
                <p>
                  A comprehensive range of UPVC products designed to meet varied
                  residential and commercial requirements.
                </p>
              </div>

              <div className="why-item">
                <h3>Uncompromising Quality</h3>
                <p>
                  Built to endure, our products follow stringent quality standards for
                  superior strength and long-term durability.
                </p>
              </div>

              <div className="why-item">
                <h3>Sustainable Approach</h3>
                <p>
                  Eco-conscious manufacturing ensures our solutions support a greener,
                  more sustainable future.
                </p>
              </div>

              <div className="why-item">
                <h3>Innovation Driven</h3>
                <p>
                  Continuous advancements keep us at the forefront of modern UPVC
                  technology and design.
                </p>
              </div>
            </div>

            <div className="why-column">
              <div className="why-item">
                <h3>Customer-Centric Philosophy</h3>
                <p>
                  Every solution is tailored with our customers’ comfort, needs, and
                  satisfaction in mind.
                </p>
              </div>

              <div className="why-item">
                <h3>Expert Guidance</h3>
                <p>
                  Our experienced professionals are always available to assist and
                  guide you through every decision.
                </p>
              </div>

              <div className="why-item">
                <h3>Affordable Luxury</h3>
                <p>
                  Premium finishes and refined aesthetics—priced sensibly for modern
                  homes and offices.
                </p>
              </div>

              <div className="why-item highlight">
                <h3>Royal Experience</h3>
                <p>
                  Discover an exclusive collection crafted to deliver elegance,
                  comfort, and a truly regal experience.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>}

      {activeSection === "home" && <div className="key-features">
        <div className="key-features-container">

          <div className="section-header">
            <span className="section-subtitle">UPVC KEY FEATURES</span>
            <h2 className="section-title">
              Smart, Durable & <span>Future-Ready UPVC Solutions</span>
            </h2>
            <p className="section-description">
              Our UPVC products are thoughtfully engineered to deliver long-lasting
              performance, aesthetic appeal, and practical benefits for modern living
              and working spaces.
            </p>
          </div>

          <div className="features-grid">

            <div className="feature-card">
              <img src="/icons/waterproof.png" alt="Water Proof" />
              <h3>Water Resistant</h3>
              <p>
                Designed to withstand moisture and humidity, UPVC furniture remains
                unaffected by water, rust, or rot—making it ideal for kitchens,
                bathrooms, and damp environments.
              </p>
            </div>

            <div className="feature-card">
              <img src="/icons/budget.png" alt="Budget Friendly" />
              <h3>Cost Effective</h3>
              <p>
                UPVC offers an affordable alternative to wood, tiles, and paint,
                delivering elegant finishes and modern designs without stressing your
                budget.
              </p>
            </div>

            <div className="feature-card">
              <img src="/icons/allround.png" alt="All Round Product" />
              <h3>Versatile Application</h3>
              <p>
                Suitable for wardrobes, modular kitchens, wall panels, ceilings, and
                more—UPVC adapts seamlessly to both residential and commercial spaces.
              </p>
            </div>

            <div className="feature-card">
              <img src="/icons/maintenance.png" alt="Low Maintenance" />
              <h3>Low Maintenance</h3>
              <p>
                The smooth surface prevents dust buildup and stains, requiring only
                simple cloth cleaning—no harsh chemicals or special treatments needed.
              </p>
            </div>

            <div className="feature-card">
              <img src="/icons/recycle.png" alt="Recyclable" />
              <h3>Eco-Friendly</h3>
              <p>
                UPVC panels are fully recyclable and reusable, allowing easy
                reinstallation without damage—supporting sustainable construction
                practices.
              </p>
            </div>

            <div className="feature-card">
              <img src="/icons/hygienic.png" alt="Hygienic" />
              <h3>Hygienic & Safe</h3>
              <p>
                With mold-resistant and antibacterial properties, UPVC ensures a clean,
                hygienic environment free from dampness and microbial growth.
              </p>
            </div>

          </div>
        </div>
      </div>}
    


      {activeSection === "about" && <div className="about-us">
        <div className="about-container">

          <div className="about-content">
            <span className="about-subtitle">ABOUT US</span>

            <h2 className="about-title">
              Crafting Excellence in <span>UPVC Solutions</span>
            </h2>

            <p className="about-text">
              Mahakal Mahakal is a trusted name in premium UPVC solutions, dedicated to
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
      </div>}


      {activeSection === "contactus" && <div className="contact-us">
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
                  Twisting Memoirs Publication<br />
                  45, Kailash Park, Behind Geetabhawan Mandir<br />
                  Indore – 452001, Madhya Pradesh, India
                </p>
              </div>

              <div className="info-item">
                <h4>Email Address</h4>
                <p>
                  <a href="mailto:mahakalupvc@gmail.com">
                    mahakalupvc@gmail.com
                  </a>
                </p>
              </div>

              <div className="info-item">
                <h4>Contact Number</h4>
                <p>
                  <a href="tel:+919067446328">
                    +91 90674 46328
                  </a>
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
      </div>}



    </div>
  );
};

export default Content;