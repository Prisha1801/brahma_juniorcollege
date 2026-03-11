import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CourseOffered = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const courses = [
        {
            srNo: "1.",
            stream: "Science",
            class: "11th & 12th",
            coreSubject: "Physics, Chemistry, Mathematics, Biology, English",
            optionalSubject: "Information Technology / Computer Science",
            competitiveExam: "NEET (Medical Entrance), JEE (Engineering Entrance), MHT-CET (State Level Engineering/Pharmacy)",
            focusEmphasis: "Strong academic foundation with practical labs, test series, and career guidance."
        },
        {
            srNo: "2.",
            stream: "Commerce",
            class: "11th & 12th",
            coreSubject: "Accountancy, Economics, Business Studies, Secretarial Practice, English",
            optionalSubject: "Mathematics / Information Technology",
            competitiveExam: "-",
            focusEmphasis: "Practical knowledge, entrepreneurship, financial literacy, and real-world applications."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Course Details Section */}
            <motion.section
                ref={ref}
                className="py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
                    >
                        Courses Offered
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="overflow-hidden border border-gray-300"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead style={{ backgroundColor: '#3a3f4b' }} className="text-white">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider border-r border-gray-600 whitespace-nowrap">
                                            SR. NO.
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider border-r border-gray-600 whitespace-nowrap">
                                            STREAM
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider border-r border-gray-600 whitespace-nowrap">
                                            CLASS
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider border-r border-gray-600 min-w-[180px]">
                                            CORE SUBJECT
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider border-r border-gray-600 min-w-[160px]">
                                            OPTIONAL SUBJECT
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider border-r border-gray-600 min-w-[220px]">
                                            COMPETITIVE EXAM
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider min-w-[200px]">
                                            FOCUS/EMPHASIS
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.map((course, index) => (
                                        <motion.tr
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                            className={`border-t border-gray-300 ${index % 2 === 0 ? 'bg-white' : 'bg-white'}`}
                                        >
                                            <td className="px-4 py-4 text-sm text-gray-800 align-top border-r border-gray-300">
                                                {course.srNo}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-800 align-top border-r border-gray-300">
                                                {course.stream}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-800 align-top border-r border-gray-300 whitespace-nowrap">
                                                {course.class}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-700 align-top border-r border-gray-300">
                                                {course.coreSubject}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-700 align-top border-r border-gray-300">
                                                {course.optionalSubject}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-700 align-top border-r border-gray-300">
                                                {course.competitiveExam}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-700 align-top">
                                                {course.focusEmphasis}
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default CourseOffered;