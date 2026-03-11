import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { governingBodyHero } from '../common/data/heroData';

const GoverningBody = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    // const governingBodyMembers = [
    //     {
    //         srNo: "1",
    //         name: "Mr. Rajaram D. Pangavhane (Patil)",
    //         designation: "President",
    //         background: "Educationalist & Social Worker"
    //     },
    //     {
    //         srNo: "2",
    //         name: "Dr. Dhanisha G. Pangavhane (Patil)",
    //         designation: "Vice President",
    //         background: "Academician & Researcher"
    //     },
    //     {
    //         srNo: "3",
    //         name: "Mrs. Ashwini A. Bhosale",
    //         designation: "Vice President",
    //         background: "Educationalist"
    //     },
    //     {
    //         srNo: "4",
    //         name: "Mr. Gaurav R. Pangavhane (Patil)",
    //         designation: "General Secretary",
    //         background: "Educational Administrator"
    //     },
    //     {
    //         srNo: "5",
    //         name: "Mrs. Prabhavati R. Pangavhane",
    //         designation: "Joint Secretary",
    //         background: "Social Worker"
    //     },
    //     {
    //         srNo: "6",
    //         name: "Mrs. Rohini A. Bhosle",
    //         designation: "Member",
    //         background: "Educationalist"
    //     },
    //     {
    //         srNo: "7",
    //         name: "Mrs. Sheetal Y. Mule",
    //         designation: "Member",
    //         background: "Educationalist"
    //     },
    //     {
    //         srNo: "8",
    //         name: "Dr. Suresh Patil",
    //         designation: "Campus Director",
    //         background: "Academic Administrator"
    //     }
    // ];

    return (
        <div>
            {/* Hero Section */}
            <HeroSection {...governingBodyHero} />

            <motion.section
                ref={ref}
                className="bg-gray-50 py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-center text-3xl md:text-4xl font-bold text-[#0b2c4d] mb-12"
                    >
                        Governing Body
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
                                            SR.NO
                                        </th>
                                        <th className="px-6 py-4 text-left font-semibold text-sm md:text-base uppercase tracking-wider">
                                            NAME OF MEMBER
                                        </th>
                                        <th className="px-6 py-4 text-left font-semibold text-sm md:text-base uppercase tracking-wider">
                                            DESIGNATION
                                        </th>
                                        <th className="px-6 py-4 text-left font-semibold text-sm md:text-base uppercase tracking-wider">
                                            BACKGROUND
                                        </th>
                                    </tr>
                                </thead>
                                {/* <tbody className="divide-y divide-gray-200">
                                    {governingBodyMembers.map((member, index) => (
                                        <motion.tr
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                                            className="hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            <td className="px-6 py-4 text-sm md:text-base text-gray-900 font-medium">
                                                {member.srNo}
                                            </td>
                                            <td className="px-6 py-4 text-sm md:text-base text-gray-900">
                                                {member.name}
                                            </td>
                                            <td className="px-6 py-4 text-sm md:text-base text-gray-700 font-medium">
                                                {member.designation}
                                            </td>
                                            <td className="px-6 py-4 text-sm md:text-base text-gray-600">
                                                {member.background}
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody> */}
                            </table>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            The Governing Body of Brahma Valley Group of Institutions comprises distinguished 
                            individuals from various fields who bring their expertise and vision to guide the 
                            institution towards academic excellence and holistic development of students.
                        </p>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default GoverningBody;
