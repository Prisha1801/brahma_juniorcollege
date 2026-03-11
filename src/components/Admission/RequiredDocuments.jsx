import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const RequiredDocuments = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const documents = [
        "School Leaving Certificate.",
        "Cumulative Record & Mark Sheet.",
        "Updated Aadhar Card of Child and Parents.",
        "2 Photo Graph of Child & Parents.",
        "Medical Fitness Certificate. (Residential Student)",
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Top dark brown/charcoal bar */}
            <div style={{ backgroundColor: '#4a4542', height: '56px' }} />

            {/* Content */}
            <motion.section
                ref={ref}
                className="py-14 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-4xl mx-auto">
                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl font-semibold text-center mb-10"
                        style={{ color: '#2563eb' }}
                    >
                        Required Documents
                    </motion.h2>

                    {/* Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-lg shadow-md overflow-hidden border border-gray-200"
                    >
                        <table className="w-full border-collapse">
                            <thead style={{ backgroundColor: '#3a3f4b' }} className="text-white">
                                <tr>
                                    <th className="px-6 py-3 text-left font-semibold text-xs uppercase tracking-wider w-24 border-r border-gray-600">
                                        NO
                                    </th>
                                    <th className="px-6 py-3 text-left font-semibold text-xs uppercase tracking-wider">
                                        LIST OF DOCUMENT
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {documents.map((doc, index) => (
                                    <motion.tr
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.3, delay: 0.3 + index * 0.07 }}
                                        className="border-t border-gray-200 bg-white hover:bg-gray-50 transition-colors duration-150"
                                    >
                                        <td className="px-6 py-3 text-sm text-gray-700 border-r border-gray-200 w-24 align-top">
                                            {index + 1}.
                                        </td>
                                        <td className="px-6 py-3 text-sm text-gray-700">
                                            {doc}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default RequiredDocuments;