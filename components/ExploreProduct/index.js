import React from 'react';
import Slider from "react-slick";


const indexImgs = [
  {
    image: "/web-img/kitchen-img-1.jpg",
    url: "",
    title: "Author Services",
  },
  {
    image: "/web-img/kitchen-img-2.jpg",
    url: "",
    title: "SleepyHug AirCell Series",
  },
  {
    image: "/web-img/kitchen-img-3.jpg",
    url: "",
    title: "SleepyHug AirCell Series",
  },
   {
    image: "/web-img/kitchen-img-4.jpg",
    url: "",
    title: "SleepyHug AirCell Series",
  }
]

const TMPECard = ({ image, title }) => (
  <div className="index-card">
    <img src={image} alt={title} className="card-image" />
  </div>
);
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
const SlideSection = ({ title, products, onProductClick }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Small Tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Large Mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="ind-product-slider">
      {/* <h1>Indexed In </h1> */}
      <Slider {...settings}>
        {products.map((product, index) => (
          <TMPECard
            key={index}
            image={product.image}
            title={product.title}
            onClick={() => onProductClick && onProductClick(product)}
          />
        ))}
      </Slider>
    </div>
  );
};




const ExploreProduct = () => {
  return (
    <div class="row indexing">
      <SlideSection
        title="Explore Products"
        products={indexImgs}
        onProductClick={false}
      />
    </div>
  );
};

export default ExploreProduct;