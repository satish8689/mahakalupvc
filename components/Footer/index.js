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
                45, Kailash Park, Behind Geetabhawan Mandir<br />
                Indore – 452001, Madhya Pradesh
              </p>
              <p>
                <a href="mailto:mahakalupvc@gmail.com">mahakalupvc@gmail.com</a><br />
                <a href="tel:+919067446328">+91 90674 46328</a>
              </p>
            </div>

          </div>

        </div>

        {/* COPYRIGHT BAR */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Mahakal. All Rights Reserved.
          </p>
        </div>
      </footer>

    </>
  );
};

export default Footer; 