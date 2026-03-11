import { motion } from 'framer-motion';
import HeroSection from '../components/common/components/HeroSection';
import { campusPlacementHero } from '../components/common/data/heroData';

const CampusPlacement = () => {
    const placementData = [

    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                <HeroSection {...campusPlacementHero} />
            </div>

            {/* Placement Statistics Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Placement Success
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Leading companies recruit our talented graduates
                        </p>
                    </motion.div>

                    {/* Placement Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {placementData.map((placement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Company Logo Placeholder */}
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16a2 2 0 002 2m0-18a2 2 0 00-2-2v16a2 2 0 002 2" />
                                    </svg>
                                </div>

                                {/* Company Name */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {placement.company}
                                </h3>

                                {/* Students Placed */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-gray-600">
                                        <span className="text-2xl font-bold text-blue-600">{placement.students}</span>
                                        <span className="text-sm ml-1">Students Placed</span>
                                    </div>
                                </div>

                                {/* Package */}
                                <div className="bg-blue-50 rounded-lg p-4">
                                    <p className="text-sm text-gray-600 mb-1">Package</p>
                                    <p className="text-2xl font-bold text-blue-600">{placement.package}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CampusPlacement;