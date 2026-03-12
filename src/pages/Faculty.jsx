import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../components/common/components/HeroSection';
import { facultyHero } from '../components/common/data/heroData';

const Faculty = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const teachingStaff = [
        {
            name: "Prof. Chandrakant L. Shirsath",
            image: "/faculty/placeholder.jpg", // Replace with actual image path
            role: "Principal"
        },
        {
            name: "Prof. Neha Ahire",
            image: "/faculties/mrs-neha-ahire.png", // Replace with actual image path
            role: "Faculty Member"
        },
        {
            name: "Prof. Sunita Bhosale",
            image: "/faculties/mrs-sunita-bhosale.png", // Replace with actual image path
            role: "Faculty Member"
        },
        {
            name: "Prof. Dilip Shinde",
            image: "/faculties/mr-dilip-shinde.png", // Replace with actual image path
            role: "Faculty Member"
        }
    ];

    const nonTeachingStaff = [
        {
            name: "Dr. Dhanshree Gande",
            image: "/faculty/placeholder.jpg", // Replace with actual image path
            role: "Non-Teaching Staff"
        },
        {
            name: "Prof. Kavita S. Bhamare",
            image: "/faculty/placeholder.jpg", // Replace with actual image path
            role: "Non-Teaching Staff"
        },
        {
            name: "Prof. Sagar P. Bhojane",
            image: "/faculty/placeholder.jpg", // Replace with actual image path
            role: "Non-Teaching Staff"
        },
        {
            name: "Prof. Yadnya Karpe",
            image: "/faculty/placeholder.jpg", // Replace with actual image path
            role: "Non-Teaching Staff"
        },
        {
            name: "Prof. Puja S. Mahale",
            image: "/faculty/placeholder.jpg", // Replace with actual image path
            role: "Non-Teaching Staff"
        },
        {
            name: "Prof. Nitin Waikar",
            image: "/faculty/placeholder.jpg", // Replace with actual image path
            role: "Non-Teaching Staff"
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <HeroSection {...facultyHero} />

            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    
                    {/* Teaching Staff Section */}
                    <motion.section
                        ref={ref}
                        className="mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl md:text-4xl font-bold text-[#0b2c4d] mb-12 text-center"
                        >
                            Teaching Staff
                        </motion.h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teachingStaff.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                                >
                                    <div className="relative overflow-hidden">
                                        <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                            {member.image && member.image !== "/faculty/placeholder.jpg" ? (
                                                <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="text-gray-400 text-center">
                                                <div className="w-20 h-20 mx-auto mb-2 bg-blue-50 rounded-full flex items-center justify-center">
                                                    <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none">
                                                    <circle cx="50" cy="35" r="18" fill="#5b9bd5" />
                                                    <ellipse cx="50" cy="80" rx="28" ry="20" fill="#5b9bd5" />
                                                    </svg>
                                                </div>
                                                </div>
                                            )}
                                            </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="text-lg font-semibold text-[#0b2c4d] mb-2">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {member.role}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Non-Teaching Staff Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-3xl md:text-4xl font-bold text-[#0b2c4d] mb-12 text-center"
                        >
                            Non-Teaching Staff
                        </motion.h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {nonTeachingStaff.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
                                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                                >
                                    <div className="relative overflow-hidden">
                                        <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                            {member.image && member.image !== "/faculty/placeholder.jpg" ? (
                                                <img
                                                src={encodeURI(member.image)}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="text-gray-400 text-center">
                                                <div className="w-20 h-20 mx-auto mb-2 bg-blue-50 rounded-full flex items-center justify-center">
                                                    <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none">
                                                    <circle cx="50" cy="35" r="18" fill="#5b9bd5" />
                                                    <ellipse cx="50" cy="80" rx="28" ry="20" fill="#5b9bd5" />
                                                    </svg>
                                                </div>
                                                </div>
                                            )}
                                            </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="text-lg font-semibold text-[#0b2c4d] mb-2">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {member.role}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                </div>
            </div>
        </div>
    );
};

export default Faculty;
