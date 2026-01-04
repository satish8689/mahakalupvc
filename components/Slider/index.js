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
            <h5>TMP Universal Journal of Advances in Pharmaceutical Sciences</h5>
            {/* <h4>Find Your Perfect Match</h4>
            <p>Some representative placeholder content for the second slide.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img src="/banner/2.jpg" className="banner-img d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>TMP Universal Journal of Medical Research and Surgical Techniques</h5>
            {/* <h4>Discover Your Next Must-Have</h4>
            <p>Some representative placeholder content for the second slide.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img src="/banner/3.jpg" className="banner-img d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>TMP Universal Journal of Dental Research and Health</h5>
            {/* <h4>Discover Your Next Must-Have</h4>
            <p>Some representative placeholder content for the second slide.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img src="/banner/4.jpg" className="banner-img d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>TMP Universal Journal of Research and Review Archives</h5>
            {/* <h4>Discover Your Next Must-Have</h4>
            <p>Some representative placeholder content for the second slide.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img src="/banner/5.webp" className="banner-img d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>TMP Universal Journal of Law, Business, and Management</h5>
            {/* <h4>Get Ready to Be Amazed</h4>
            <p>Some representative placeholder content for the second slide.</p> */}
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
