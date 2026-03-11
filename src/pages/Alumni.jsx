import React from 'react';
import { motion } from 'framer-motion';
import { alumniHero } from '../components/common/data/heroData';

const Alumni = () => {
    const alumniData = [
        
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Alumni</h1>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto">
                            Success stories from our graduates who are making their mark in the industry
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Alumni Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Distinguished Alumni
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Meet the talented engineers who graduated from our institution and are now contributing to the industry
                        </p>
                    </motion.div>

                    {/* Alumni Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {alumniData.map((alumni, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Alumni Image */}
                                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-50">
                                    <img
                                        src={alumni.image}
                                        alt={alumni.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Alumni Info */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {alumni.name}
                                    </h3>
                                    <p className="text-sm font-medium text-blue-600 mb-1">
                                        {alumni.year}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        {alumni.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Alumni;