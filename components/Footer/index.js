const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-container">

          <div className="footer-top">

            <div className="footer-brand">
              <h3>Mahakal UPVC</h3>
              <p>
                Delivering premium UPVC solutions that combine durability, elegance,
                and innovation to enhance modern living spaces.
              </p>

              <div className="social-icons">
                <a
                  href="tel:+919067446328"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icon/phone.png" alt="Phone" width={"40px"}/>
                </a>
                <a
                  href="https://wa.me/919067446328"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icon/whatsapp-white-icon.png" alt="WhatsApp" />
                </a>

                <a
                  href="https://www.instagram.com/mahakalupvc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icon/instagram.png" alt="Instagram" />
                </a>
              </div>

            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/policies">Policies</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact Info</h4>
              <p>
                P-110, Kalindi Gold City, Bhangiya<br />
                Indore – 452001, Madhya Pradesh<br />
                <a
      href="https://www.google.com/maps/dir/Indore,+Madhya+Pradesh/22.7922745,75.8621953/@22.7923545,75.8619538,19z/data=!4m9!4m8!1m5!1m1!1s0x3962fcad1b410ddb:0x96ec4da356240f4!2m2!1d75.8577258!2d22.7195687!1m0!3e0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#9ca3af", textDecoration:"none", fontWeight: "600" }}
    >
      📍 Get Directions
      <br />
    </a>
              </p>
              
              <p>
                <a href="mailto:mahakalupvc@gmail.com">mahakalupvc@gmail.com</a><br />
                <a href="tel:+919067446328">+91 90674 46328</a>, <a href="tel:+919752929902">+91 9752929902</a>
              </p>
            </div>

          </div>

        </div>

        {/* COPYRIGHT BAR */}
        <div className="footer-bottom">
  <p>© {new Date().getFullYear()} Mahakal. All Rights Reserved.</p>

  <span className="footer-dev">
    Developed by Satish Hargod |
    <a href="tel:+91918602148689"> 918602148689</a>
  </span>
</div>

      </footer>

    </>
  );
};

export default Footer; 