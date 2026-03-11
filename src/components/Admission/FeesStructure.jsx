import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { feesHero } from '../common/data/heroData';

const FeesStructure = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const collegeFees = [
        {
            year: "2025-2026",
            fee: "25000",
            status: "Approved",
            dateOfMeeting: "01/05/2025"
        },
        {
            year: "2024-2025",
            fee: "23000",
            status: "Approved",
            dateOfMeeting: "01/05/2024"
        },
        {
            year: "2023-2024",
            fee: "23000",
            status: "Approved",
            dateOfMeeting: "01/05/2023"
        },
        {
            year: "2022-2023",
            fee: "21000",
            status: "Approved",
            dateOfMeeting: "01/05/2022"
        },
        {
            year: "2021-2022",
            fee: "21000",
            status: "Approved",
            dateOfMeeting: "01/05/2021"
        }
    ];

    const hostelFees = [
        {
            year: "2025-2026",
            fees: "80000",
            status: "Approved",
            dateOfMeeting: "01/05/2025"
        },
        {
            year: "2024-2025",
            fees: "75000",
            status: "Approved",
            dateOfMeeting: "01/05/2024"
        },
        {
            year: "2023-2024",
            fees: "75000",
            status: "Approved",
            dateOfMeeting: "01/05/2023"
        },
        {
            year: "2022-2023",
            fees: "70000",
            status: "Approved",
            dateOfMeeting: "01/05/2022"
        },
        {
            year: "2021-2022",
            fees: "70000",
            status: "Approved",
            dateOfMeeting: "01/05/2021"
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <HeroSection {...feesHero} />

            <div className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    
                    {/* College Fee Structure */}
                    <motion.section
                        ref={ref}
                        className="mb-16"
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
                            College Fee Structure
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gradient-to-r from-[#0b2c4d] to-[#1a4d7d] text-white">
                                        <tr>
                                            <th className="px-6 py-4 text-left font-semibold text-sm md:text-base uppercase tracking-wider">
                                                YEAR
                                            </th>
                                            <th className="px-6 py-4 text-left font-semibold text-sm md:text-base uppercase tracking-wider">
                                                FEE
                                            </th>
                                            <th className="px-6 py-4 text-left font-semibold text-sm md:text-base uppercase tracking-wider">
                                                STATUS
                                            </th>
                                            <th className="px-6 py-4 text-left font-semibold text-sm md:text-base uppercase tracking-wider">
                                                DATE OF MEETING
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {collegeFees.map((fee, index) => (
                                            <motion.tr
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                                                className="hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                <td className="px-6 py-4 text-sm md:text-base text-gray-900 font-medium">
                                                    {fee.year}
                                                </td>
                                                <td className="px-6 py-4 text-sm md:text-base text-gray-900">
                                                    ₹{fee.fee}
                                                </td>
                                                <td className="px-6 py-4 text-sm md:text-base">
                                                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        {fee.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm md:text-base text-gray-600">
                                                    {fee.dateOfMeeting}
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </motion.section>

                    {/* Hostel Fee Structure */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-3xl md:text-4xl font-bold text-[#0b2c4d] mb-12 text-center"
                        >
                            Hostel Fee Structure
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gradient-to-r from-[#0b2c4d] to-[#1a4d7d] text-white">
                                        <tr>
                                            <th className="px-6 py-4 text-left font-semibold text-sm md:text-base uppercase tracking-wider">
                                                YEAR
                                            </th>
                                            <th className="px-6 py-4 text-left font-semibold text-sm md:text-base uppercase tracking-wider">
                                                FEES
                                            </th>
                                            <th className="px-6 py-4 text-left font-semibold text-sm md:text-base uppercase tracking-wider">
                                                STATUS
                                            </th>
                                            <th className="px-6 py-4 text-left font-semibold text-sm md:text-base uppercase tracking-wider">
                                                DATE OF MEETING
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {hostelFees.map((fee, index) => (
                                            <motion.tr
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.4, delay: 0.7 + index * 0.08 }}
                                                className="hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                <td className="px-6 py-4 text-sm md:text-base text-gray-900 font-medium">
                                                    {fee.year}
                                                </td>
                                                <td className="px-6 py-4 text-sm md:text-base text-gray-900">
                                                    ₹{fee.fees}
                                                </td>
                                                <td className="px-6 py-4 text-sm md:text-base">
                                                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        {fee.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm md:text-base text-gray-600">
                                                    {fee.dateOfMeeting}
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </motion.section>

                    {/* Additional Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-200"
                    >
                        <h3 className="text-xl font-semibold text-[#0b2c4d] mb-4">
                            Important Notes
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 mt-1">•</span>
                                <span>All fees are subject to revision as per the management committee decisions.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 mt-1">•</span>
                                <span>Hostel fees include accommodation and mess facilities.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 mt-1">•</span>
                                <span>Additional charges may apply for laboratory, library, and examination fees.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 mt-1">•</span>
                                <span>Please contact the administration office for detailed fee breakdown.</span>
                            </li>
                        </ul>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default FeesStructure;
