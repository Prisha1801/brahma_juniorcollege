import React from 'react';
import { motion } from 'framer-motion';
import { examinationNoticeHero } from '../components/common/data/heroData';

const ExaminationNotice = () => {
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Examination Notice</h1>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto">
                            Important announcements and updates
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Examination Notice Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Examination Notices
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Official examination announcements and schedules
                        </p>
                    </motion.div>

                    {/* Empty Table */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-full">
                                <thead className="bg-gradient-to-r from-[#0b2c4d] to-[#1a4d7d] text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                                            Notice Title
                                        </th>
                                        <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                                            Download
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {/* Empty table - no notices available */}
                                    <tr>
                                        <td colSpan="4" className="px-6 py-12 text-center text-gray-500">
                                            No examination notices available at this time.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExaminationNotice;
