import { useEffect } from 'react';

const Slider = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap').then((bootstrap) => {
        const carouselElement = document.getElementById('carouselExampleFade');
        new bootstrap.Carousel(carouselElement, {
          interval: 6000, // Slower transition (7 seconds)
          ride: 'carousel',
          pause: 'hover', // Pause on hover
          wrap: true, // Keep looping
        });
      });
    }
  }, []);

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/banner/1.jpg" className="banner-img d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Premium UPVC Windows</h5>
            <h4>Strength Meets Elegance</h4>
            <p>Durable, weather-resistant, and energy-efficient solutions.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/banner/2.jpg" className="banner-img d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Modern UPVC Doors</h5>
            <h4>Secure & Stylish Living</h4>
            <p>High insulation and long-lasting performance.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/banner/3.jpg" className="banner-img d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Custom UPVC Furniture</h5>
            <h4>Designed for Comfort</h4>
            <p>Perfect fit for homes, offices, and commercial spaces.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/banner/4.jpg" className="banner-img d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Sliding UPVC Systems</h5>
            <h4>Smooth & Silent Operation</h4>
            <p>Maximize ventilation with modern sliding designs.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/banner/5.webp" className="banner-img d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Office UPVC Solutions</h5>
            <h4>Professional & Practical</h4>
            <p>Low maintenance with premium finishing.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/banner/5.webp" className="banner-img d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>UPVC Interior Designs</h5>
            <h4>Smart Living Spaces</h4>
            <p>Elegant interiors with long-term durability.</p>
          </div>
        </div>
      </div>

      {/* Left button */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      {/* Right button */}
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
