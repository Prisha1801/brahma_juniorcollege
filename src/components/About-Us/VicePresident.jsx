import React from "react";
import { motion } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { vicePresidentHero } from '../common/data/heroData';
import VicePresidentImage from '/board-members/Dr.Dhanisha G. Pangavhane.png';

const VicePresident = () => {
    return (
        <div className="bg-white pb-16">
            {/* HERO SECTION */}
            <HeroSection {...vicePresidentHero} />

            <section className="py-16 px-4 md:px-8 lg:px-16 container mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2d2e2e] relative inline-block pb-4">
                        From the Vice President's Desk
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#ea1f28]"></div>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-start lg:items-start gap-12 lg:gap-20">

                    {/* LEFT SIDE: Message Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[60%]"
                    >
                        <div className="bg-[#f8f9fa] p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                            <div className="space-y-6 text-[#444] leading-relaxed">
                                <p className="text-lg font-medium">Dear Students,</p>

                                <div className="space-y-6 text-[16px] md:text-[17px]">
                                    <p>
                                        Welcome to Brahma Valley Group of Institutions. At Brahma Valley, we firmly believe that innovation, integrity, and excellence form the foundation of everything we do. Our institution is built on the vision of creating an environment where education transforms lives, instills purpose, and empowers students to make a meaningful impact on the world.
                                    </p>
                                    <h3>Our Mission</h3>
                                    <p>
                                        Our mission is to nurture skilled, responsible, and future-ready students by providing quality education across diverse programs, supported by dedicated faculty, modern infrastructure, and a student-centric approach. We aim to build not only knowledge and technical expertise but also to foster character, leadership, and a love for lifelong learning.
                                    </p>
                                    <h3>Beyond Academics: Nurturing Human Beings</h3>
                                    <p>
                                        At Brahma Valley, education is not limited to producing graduates or functioning as an academic factory. We see it as a transformative journey, where young minds are guided with values, empathy, and wisdom.

                                        Our focus goes beyond textbooks and classrooms. We strive to nurture hearts and minds, preparing students to be responsible global citizens who will excel professionally and contribute positively to society, creating a better world for generations to come.
                                    </p>
                                    <h3>Our Teaching Culture</h3>
                                    <p>
                                        We believe that every child has unique potential, and it is our responsibility to help them discover and develop it. Through personalized mentoring, experiential learning, and value-driven education, our teaching culture inspires students to grow holistically.

                                    </p>
                                    <h4>Our approach empowers them to:</h4>
                                    <ul className="list-disc list-inside">
                                        <li>Think critically to solve complex problems</li>

                                        <li>Innovate boldly to drive change</li>

                                        <li>Lead with integrity</li>

                                        <li>Act with compassion in every sphere of life</li>
                                    </ul>
                                    <h3>Preparing for the Future</h3>
                                    <p>
                                        Across all our campuses, we combine strong academic foundations with value-based learning and practical exposure to equip students with the skills and mindset to face global challenges with confidence. By fostering curiosity, creativity, and resilience, we prepare our students to thrive in a rapidly changing world and to become leaders of tomorrow.

                                    </p>
                                    <h3>A Shared Journey of Growth</h3>
                                    <p>
                                        Thank you for being part of this journey of transformation and progress. Together, let us build a better future—one idea, one child, and one dream at a time.
                                    </p>
                                </div>

                                <div className="pt-6">
                                    <p className="text-[#ea1f28] font-bold text-lg italic tracking-wide">
                                        Dr. Dhanisha G Pangavhane(Patil)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: Image and Profile */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[40%] flex flex-col items-start text-center"
                    >
                        <div className="relative group mb-8">
                            <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl blur opacity-25"></div>
                            <img
                                src={VicePresidentImage}
                                alt="Dr. Dhanisha G Pangavhane"
                                className="relative 
               w-full 
               max-w-[320px] md:max-w-[360px] lg:max-w-[380px]
               h-[320px] md:h-[360px] lg:h-[420px]
               object-contain 
               rounded-2xl 
               shadow-xl 
               transition-transform duration-500 
               group-hover:scale-[1.02]"
                            />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#003366] tracking-tight">
                                Dr. Dhanisha G Pangavhane
                            </h3>
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-semibold text-gray-600 uppercase tracking-widest">
                                    Vice President
                                </span>
                                <p className="text-gray-500 font-medium mt-1 text-sm">
                                    Nashik Gramin Shikshan Prasarak Mandal.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default VicePresident;
