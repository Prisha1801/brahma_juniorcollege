import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Container animation (stagger effect)
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Child animation
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function BVCTE() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            About Brahma Valley Junior College
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mt-4 rounded"></div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >

          {/* Video */}
          <motion.div variants={itemVariants}>
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
              <iframe
                className="w-full h-[250px] md:h-[350px] lg:h-[400px]"
                src="https://www.youtube.com/embed/IGlUUQ56wrw"
                title="Brahma Valley Polytechnic Nashik"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <h3 className="text-gray-700 mb-5 leading-relaxed">
              Brahma Valley Public School & Junior College is a residential, English-medium institution committed to providing holistic education for students of classes 9th, 10th, 11th, and 12th.
            </h3>

            <p className="text-gray-700 mb-5 leading-relaxed">
              Our mission is to nurture young minds, combining strong academic foundations with value-based learning, discipline, and co-curricular development. Located on a spacious and serene campus near Anjaneri, Nashik, the environment is thoughtfully designed to promote focused study, creativity, and personal growth.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              At Brahma Valley, we emphasize academic excellence, ethical values, and critical thinking. Our dedicated faculty, modern classrooms, well-equipped laboratories, and residential facilities ensure that students receive a supportive and inspiring environment for learning and overall development.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              We prepare students to excel in board examinations and beyond, equipping them with confidence, leadership skills, and the ability to face global challenges.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Join us at Brahma Valley Public School & Junior College, where education is comprehensive, values-driven, and prepares students for a bright future.
            </p>

            <Link
              to="/chairman-desk"
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition"
            >
              Learn More
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default BVCTE;