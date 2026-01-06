import { useState } from "react";

const categories = [
  "All",
  "Bed",
  "Kitchen",
  "Wardrobe",
  "Ceiling Interior",
  "Stair Railing",
  "Temple",
  "Sofa",
  "Other",
];

let idCounter = 1;

const generateCategory = (category, folder, count) =>
  Array.from({ length: count }, (_, i) => ({
    id: idCounter++,
    category,
    img: `/products/${folder}/1 (${i + 1}).jpg`,
  }));

const productsData = [
  ...generateCategory("Bed", "bed", 9),
  ...generateCategory("Kitchen", "kitchen", 34),
  ...generateCategory("Wardrobe", "wardrobe", 26),
  ...generateCategory("Ceiling Interior", "ceiling-interior", 5),
  ...generateCategory("Stair Railing", "stair-railing", 8),
  ...generateCategory("Temple", "temple", 1),
  ...generateCategory("Sofa", "sofa", 2),
  ...generateCategory("Other", "other", 16),
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);
  const [zoom, setZoom] = useState(1);

  const filteredProducts =
    activeCategory === "All"
      ? productsData
      : productsData.filter(
          (item) => item.category === activeCategory
        );

        const closeModal = () => {
    setSelectedImg(null);
    setZoom(1);
  };

 return (
    <section className="products">
      <h2 className="section-title">Our Interior Gallery</h2>

      {/* Categories */}
      <div className="product-category">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="product-gallery">
        {filteredProducts.map((item) => (
          <div
            className="gallery-item"
            key={item.id}
            onClick={() => setSelectedImg(item.img)}
          >
            <img src={item.img} alt={item.category} />
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImg && (
        <div className="image-modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImg}
              alt="Preview"
              style={{ transform: `scale(${zoom})` }}
            />

            {/* Controls */}
            <div className="modal-controls">
              <button onClick={() => setZoom((z) => Math.min(z + 0.2, 3))}>
                +
              </button>
              <button onClick={() => setZoom((z) => Math.max(z - 0.2, 1))}>
                −
              </button>
              <button onClick={closeModal}>✕</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
