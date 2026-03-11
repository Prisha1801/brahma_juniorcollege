import React from "react";
import { motion } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { campusDirectorHero } from '../common/data/heroData';
import CampusDirectorImage from '/posters/campus-director.png';

const CampusDirector = () => {
    return (
        <div className="bg-white pb-16">
            {/* HERO SECTION */}
            <HeroSection {...campusDirectorHero} />

            <section className="py-16 px-4 md:px-8 lg:px-16 container mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2d2e2e] relative inline-block pb-4">
                        From the Campus Director's Desk
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
                                        It gives me immense pleasure to welcome you to Brahma Valley Group of Institutions, Anjaneri, Nashik. Our campus has been established with the vision of providing quality education, holistic development, and opportunities that prepare our students to face the challenges of a rapidly changing world.
                                    </p>
                                    <p>
                                        At Brahma Valley, we firmly believe that education is not only about academic excellence but also about nurturing values, discipline, creativity, and leadership qualities. Our dedicated faculty, modern infrastructure, and student-centric approach ensure that every learner receives the right guidance, knowledge, and skills to succeed in their chosen field.
                                    </p>
                                    <p>
                                        We emphasize innovation, research, and industry collaboration, thereby creating a strong bridge between theoretical learning and practical application. Along with academics, equal importance is given to extracurricular and co-curricular activities to ensure the all-round development of our students.
                                    </p>
                                    <p>
                                        As Campus Director, my mission is to foster an environment where students are inspired to learn, empowered to explore, and encouraged to grow as responsible global citizens. I warmly invite you to become a part of the Brahma Valley family and join us in our journey of excellence.
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
                        className="w-full lg:w-[40%] flex flex-col items-center text-center"
                    >
                        <div className="relative group mb-8">
                            <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl blur opacity-25"></div>
                            <img
                                src={CampusDirectorImage}
                                alt="Dr. Suresh Patil"
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
                                Dr. Suresh Patil
                            </h3>
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-semibold text-gray-600 uppercase tracking-widest">
                                    Campus Director
                                </span>
                                <p className="text-gray-500 font-medium mt-1 text-sm">
                                    Brahma Valley Group of Institutions
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default CampusDirector;
