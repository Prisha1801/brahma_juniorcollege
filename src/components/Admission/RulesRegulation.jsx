import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { rulesHero } from '../common/data/heroData';

const RulesRegulation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    
    const [expandedSection, setExpandedSection] = useState('admission-rules');

    const admissionRules = [
        "Application forms must be filled accurately and submitted with all required documents.",
        "Incomplete or false information will result in cancellation of admission.",
        "Admission is confirmed only after verification of documents.",
        "Entrance test/interview may be conducted if required."
    ];

    const admissionRegulations = [
        "Fees must be paid within the given time to secure admission.",
        "All admissions are subject to seat availability.",
        "The management reserves the right to accept or reject any application without giving reasons.",
        "Admission once granted will remain provisional until all formalities are completed."
    ];

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div>
            {/* Hero Section */}
            <HeroSection {...rulesHero} />

            <div className="bg-white py-16">
                <div className="max-w-5xl mx-auto px-6">

                    {/* Admission Rules Section */}
                    <motion.section
                        ref={ref}
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="border border-gray-200 rounded-sm overflow-hidden">
                            <button
                                onClick={() => toggleSection('admission-rules')}
                                className="w-full px-6 py-5 text-white text-left flex items-center justify-between transition-colors duration-200"
                                style={{ backgroundColor: '#1a1f2e' }}
                            >
                                <h2 className="text-lg font-semibold tracking-wide">Admission Rules</h2>
                                <svg
                                    className={`w-5 h-5 transform transition-transform duration-300 ${expandedSection === 'admission-rules' ? 'rotate-0' : 'rotate-180'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            </button>

                            {expandedSection === 'admission-rules' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white px-8 py-6"
                                >
                                    <ol className="list-decimal list-outside space-y-3 ml-4">
                                        {admissionRules.map((rule, index) => (
                                            <li key={index} className="text-gray-800 text-base leading-relaxed pl-1">
                                                {rule}
                                            </li>
                                        ))}
                                    </ol>
                                </motion.div>
                            )}
                        </div>
                    </motion.section>

                    {/* Admission Regulations Section */}
                    <motion.section
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="border border-gray-200 rounded-sm overflow-hidden">
                            <button
                                onClick={() => toggleSection('admission-regulations')}
                                className="w-full px-6 py-5 text-white text-left flex items-center justify-between transition-colors duration-200"
                                style={{ backgroundColor: '#1a1f2e' }}
                            >
                                <h2 className="text-lg font-semibold tracking-wide">Admission Regulations</h2>
                                <svg
                                    className={`w-5 h-5 transform transition-transform duration-300 ${expandedSection === 'admission-regulations' ? 'rotate-0' : 'rotate-180'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            </button>

                            {expandedSection === 'admission-regulations' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white px-8 py-6"
                                >
                                    <ol className="list-decimal list-outside space-y-3 ml-4">
                                        {admissionRegulations.map((regulation, index) => (
                                            <li key={index} className="text-gray-800 text-base leading-relaxed pl-1">
                                                {regulation}
                                            </li>
                                        ))}
                                    </ol>
                                </motion.div>
                            )}
                        </div>
                    </motion.section>

                </div>
            </div>
        </div>
    );
};

export default RulesRegulation;