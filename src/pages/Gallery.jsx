import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryHero } from "../components/common/data/heroData";
import HeroSection from "../components/common/components/HeroSection";

// ✅ Correct approach: Import images directly
import a1 from "../../public/activities/a1.jpeg";
import a2 from "../../public/activities/a2.jpg";
import a3 from "../../public/activities/a3.jpeg";
import a4 from "../../public/activities/a4.jpeg";
import a5 from "../../public/activities/a5.jpeg";
import a6 from "../../public/activities/a6.jpeg";

const galleryData = [
  {
    title: "Activities",
    folder: "activities",
    images: [a1, a2, a3, a4, a5, a6],
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(null);

  const openModal = (category, index) => {
    setCurrentCategory(category);
    setCurrentIndex(index);
    setSelectedImage(category.images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentCategory(null);
  };

  const nextImage = () => {
    const next = (currentIndex + 1) % currentCategory.images.length;
    setCurrentIndex(next);
    setSelectedImage(currentCategory.images[next]);
  };

  const prevImage = () => {
    const prev =
      (currentIndex - 1 + currentCategory.images.length) %
      currentCategory.images.length;
    setCurrentIndex(prev);
    setSelectedImage(currentCategory.images[prev]);
  };

  return (
    <>
      <HeroSection {...GalleryHero} />

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {galleryData.map((category, catIndex) => (
            <div key={catIndex}>

              {/* Section Title */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <h2 className="text-4xl font-bold text-blue-600">
                  {category.title}
                </h2>
                <p className="text-gray-500 mt-2">
                  {category.images.length} images found
                </p>
              </motion.div>

              {/* Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.images.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer rounded-xl overflow-hidden shadow-md bg-white"
                    onClick={() => openModal(category, index)}
                  >
                    {/* ✅ img is already a resolved URL from the import */}
                    <img
                      src={img}
                      alt={`${category.title} ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-8 text-white text-4xl z-10"
              onClick={closeModal}
            >
              ×
            </button>

            {/* Left Button */}
            {currentCategory.images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-6 text-white text-5xl px-4 z-10"
              >
                ‹
              </button>
            )}

            {/* Image */}
            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt="Gallery fullscreen"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Right Button */}
            {currentCategory.images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-6 text-white text-5xl px-4 z-10"
              >
                ›
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;