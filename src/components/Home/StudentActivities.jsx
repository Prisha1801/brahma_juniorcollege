import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const activityImages = [
    { src: "/activities/a1.jpeg", alt: "Student Activity" },
    { src: "/activities/a2.jpg", alt: "Student Activity" },
];

const StudentActivities = () => {
    const navigate = useNavigate();

    return (
        <section className="py-16 bg-[#f5f7fa]">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-[#0d1b2a]">Student Activities</h2>
                    <div className="w-16 h-[3px] bg-[#0d1b2a] mx-auto mt-3 rounded"></div>
                </div>

                {/* Images Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mb-10"
                >
                    {activityImages.map((img, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-48 object-cover"
                                onError={(e) => { e.target.src = "/images/person.jpg"; }}
                            />
                        </div>
                    ))}
                </motion.div>

                {/* View All Photos Button */}
                <div className="flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/gallery")}
                        className="bg-[#d94040] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-colors duration-300"
                    >
                        View All Photos
                    </motion.button>
                </div>

            </div>
        </section>
    );
};

export default StudentActivities;