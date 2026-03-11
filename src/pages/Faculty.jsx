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
            image: "/faculty/placeholder.jpg", // Replace with actual image path
            role: "Faculty Member"
        },
        {
            name: "Prof. Sunita Bhosale",
            image: "/faculty/placeholder.jpg", // Replace with actual image path
            role: "Faculty Member"
        },
        {
            name: "Prof. Dilip Shinde",
            image: "/faculty/placeholder.jpg", // Replace with actual image path
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
                                            <div className="text-gray-400 text-center">
                                                <div className="w-20 h-20 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                                                    <svg className="w-10 h-10 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <p className="text-sm">Faculty</p>
                                            </div>
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
                                            <div className="text-gray-400 text-center">
                                                <div className="w-20 h-20 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                                                    <svg className="w-10 h-10 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <p className="text-sm">Faculty</p>
                                            </div>
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
