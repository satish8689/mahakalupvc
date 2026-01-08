import React from 'react';
import ExploreProduct from '../ExploreProduct';
import Products from '../Products';

const Content = ({ activeSection }) => {

  return (
    <div className="row middle-component">
       <div className="upvc-experts">
        <div className="safeupvc">
          <div className="marquee">
            <span>
              🌱 UPVC फर्नीचर में दीमक और कॉकरोच नहीं लगते, यह पानी से खराब नहीं होता और लंबे समय तक टिकाऊ रहता है। लकड़ी के फर्नीचर के मुकाबले यह पेड़ों की कटाई को रोकने में मदद करता है, जिससे पर्यावरण सुरक्षित रहता है। 🌱
              &nbsp;&nbsp;|&nbsp;&nbsp;
              UPVC furniture is resistant to termites and cockroaches, does not get damaged by water, and remains durable for a long time. Compared to wooden furniture, it helps prevent tree cutting, thereby protecting the environment. 🌱 
            </span>
          </div>
        </div>
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
            <a href="/products">  <img src="/web-img/1 (1).jpg" alt="UPVC Window" /> </a> 
            <a href="/products">  <img src="/web-img/1 (3).jpg" alt="UPVC Slider" /> </a> 
            <a href="/products">  <img src="/web-img/1 (4).jpg" alt="UPVC Slider" />  </a>
            <a href="/products">  <img src="/web-img/1 (5).jpg" alt="UPVC Slider" />  </a>
            <a href="/products">  <img src="/web-img/1 (6).jpg" alt="UPVC Slider" />  </a>
            <a href="/products">  <img src="/web-img/1 (7).jpg" alt="UPVC Door" /> </a>
             <a href="/products">  <img src="/web-img/1 (8).jpg" alt="UPVC Door" /> </a>
 
          </div>

        </div>
      </div>

       <div className='explore'>
        <div className='explore-product-title'> Explore Our Main Products</div>
        <div className='explore-products'> <ExploreProduct /></div>
      </div>

       <div className="why-choose-mahakal">
        <div className="why-container">

          <div className="why-header">
            <span className="why-subtitle">WHY CHOOSE US</span>
            <h2 className="why-title">
              Why Choose <span>Mahakal UPVC</span>
            </h2>
            <p className="why-description">
              At Mahakal, we combine craftsmanship, innovation, and reliability
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
      </div>

      <div className="key-features">
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
              <img className="waterproof" src="/icon/waterproof-removebg-preview.png" alt="Water Proof" />
              <h3>Water Resistant</h3>
              <p>
                Designed to withstand moisture and humidity, UPVC furniture remains
                unaffected by water, rust, or rot—making it ideal for kitchens,
                bathrooms, and damp environments.
              </p>
            </div>

            <div className="feature-card">
              <img className="cost-effective" src="/icon/cost-effective-removebg-preview.png" alt="Budget Friendly" />
              <h3>Cost Effective</h3>
              <p>
                UPVC offers an affordable alternative to wood, tiles, and paint,
                delivering elegant finishes and modern designs without stressing your
                budget.
              </p>
            </div>

            <div className="feature-card">
              <img className="product-vector" src="/icon/product-vector-removebg-preview.png" alt="All Round Product" />
              <h3>Versatile Application</h3>
              <p>
                Suitable for wardrobes, modular kitchens, wall panels, ceilings, and
                more—UPVC adapts seamlessly to both residential and commercial spaces.
              </p>
            </div>

            <div className="feature-card">
              <img className="maintenance" src="/icon/all-maintenance-removebg-preview.png" alt="Low Maintenance" />
              <h3>Low Maintenance</h3>
              <p>
                The smooth surface prevents dust buildup and stains, requiring only
                simple cloth cleaning—no harsh chemicals or special treatments needed.
              </p>
            </div>

            <div className="feature-card">
              <img className="recycling" src="/icon/black-recycling-removebg-preview.png" alt="Recyclable" />
              <h3>Eco-Friendly</h3>
              <p>
                UPVC panels are fully recyclable and reusable, allowing easy
                reinstallation without damage—supporting sustainable construction
                practices.
              </p>
            </div>

            <div className="feature-card">
              <img className="healthcare" src="/icon/healthcare-removebg-preview.png" alt="Hygienic" />
              <h3>Hygienic & Safe</h3>
              <p>
                With mold-resistant and antibacterial properties, UPVC ensures a clean,
                hygienic environment free from dampness and microbial growth.
              </p>
            </div>

          </div>
        </div>
      </div>


    </div>
  );
};

export default Content;