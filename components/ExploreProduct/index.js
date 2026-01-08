import React from 'react';
import Slider from "react-slick";


const indexImgs = [
  {
    image: "/products/kitchen/1 (19).jpg",
    url: "",
    title: "Modular Kitchen Interior",
  },
  {
    image: "/products/bed/1 (1).jpg",
    url: "",
    title: "Modern Bedroom Design",
  },
  {
    image: "/products/wardrobe/1 (12).jpg",
    url: "",
    title: "Premium Wardrobe Solutions",
  },
   {
    image: "/products/kitchen/1 (26).jpg",
    url: "",
    title: "Modular Kitchen Interior",
  },
   {
    image: "/products/wardrobe/1 (17).jpg",
    url: "",
    title: "Premium Wardrobe Solutions",
  },
  {
    image: "/products/tv-unit/1 (5).jpg",
    url: "",
    title: "Stylish TV Unit Interior",
  },
   
   {
    image: "/products/kitchen/1 (17).jpg",
    url: "",
    title: "Modular Kitchen Interior",
  },
   {
    image: "/products/wardrobe/1 (3).jpg",
    url: "",
    title: "Premium Wardrobe Solutions",
  },
  {
    image: "/products/tv-unit/1 (2).jpg",
    url: "",
    title: "Stylish TV Unit Interior",
  },
];

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
           <a href="/products"> <TMPECard
            key={index}
            image={product.image}
            title={product.title}
            onClick={() => onProductClick && onProductClick(product)}
          /> </a>
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