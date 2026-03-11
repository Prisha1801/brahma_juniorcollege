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

function StudentAchivement() {
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
                        Student Achievements
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

                    {/* Text Content */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">
                            Hello everyone, Respected Principal, Teachers and Dear students.
                        </h3>

                        <p className="text-gray-700 mb-5 leading-relaxed">
                            It is a proud and emotional moment for me to stand here again, not as a student, but as an IAS officer. In "Great Achievement students" programme on 12th August 2025. Whatever I have achieved today is because of the values, discipline, and guidance I received from Brahma Valley Public school and Jr College. Where I studied Grade V to XII
                        </p>

                        <p className="text-gray-700 mb-8 leading-relaxed">
                            My journey was full of challenges, but hard work, patience, and never giving up helped me reach here. I want to tell all the students: dream big, stay disciplined, and believe in yourself. Success will surely follow.
                        </p>

                        <p className="text-gray-700 mb-8 leading-relaxed">
                            I dedicate my success to my teachers, parents, and this school. Thank you."
                        </p>
                    </motion.div>

                    {/* Video */}
                    <motion.div variants={itemVariants}>
                        <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
                            <img
                                src="../assets/images/achievements/IAS.jpg"
                                alt="Student Achievement"
                                className="w-full h-[250px] md:h-[350px] lg:h-[400px] object-contain"
                            />
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}

export default StudentAchivement;