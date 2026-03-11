import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EligibilityCard = ({ title, points, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            className="bg-white rounded-lg shadow-md border border-gray-200 px-10 py-8 mb-6"
        >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
            <ul className="space-y-2">
                {points.map((point, index) => (
                    <li key={index} className="flex items-start text-gray-700 text-sm md:text-base">
                        <span className="mr-2 mt-1 text-gray-700">•</span>
                        <span dangerouslySetInnerHTML={{ __html: point }} />
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

const Eligibility = () => {
    const eligibilityData = [
        {
            title: "Class IXth & Xth",
            points: [
                "Must have Passed Class 8th / 9th from a recognized school.",
                "School Leaving Certificate & Progress Card required.",
                "Admission based on seat availability & performance.",
            ],
        },
        {
            title: "Class XIth – Commerce Stream (English Medium)",
            points: [
                "Must have passed Class 10th (SSC/CBSE/ICSE).",
                "Minimum: <strong>40% overall</strong>.",
                "Open to all backgrounds.",
                "Admission by merit & counselling.",
            ],
        },
        {
            title: "Class XIth – Science Stream",
            points: [
                "Must have passed Class 10th (SSC/CBSE/ICSE).",
                "Minimum: <strong>40% overall</strong> (60% in Science & Math preferred).",
                "Choice of groups: PCM / PCB.",
                "Admission by merit & counselling.",
                "Choose Languages: – Marathi, Hindi, Sanskrit, IT.",
            ],
        },
        {
            title: "Class XIIth (Science & Commerce)",
            points: [
                "Must have passed Class 11th in the same stream.",
                "TC & Class 11th Mark-sheet required.",
                "Admission based on performance in Class 11th.",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {eligibilityData.map((item, index) => (
                    <EligibilityCard
                        key={index}
                        title={item.title}
                        points={item.points}
                        delay={index * 0.1}
                    />
                ))}
            </div>
        </div>
    );
};

export default Eligibility;