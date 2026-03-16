import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { principalDeskHero } from '../common/data/heroData';

const PrincipalDesk = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...principalDeskHero} />

            {/* PRINCIPAL Desk */}
            <motion.section
                ref={ref}
                className="bg-gray-50 py-16"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="bg-white rounded-2xl shadow-md p-8 lg:p-12"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                            {/* LEFT SIDE - IMAGE */}
                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.45, delay: 0.15 }}
                                className="text-center"
                            >
                                <img
                                    src="/images/person1.jpeg"
                                    alt="Principal"
                                    className="w-full max-h-[450px] object-contain rounded-xl shadow-md"
                                />

                                <div className="mt-6">
                                    <h4 className="text-xl font-semibold text-[#0b2c4d]">
                                        Mr. Chandrakant L. Shirsath
                                    </h4>
                                    <p className="text-gray-600 mt-2">Principal</p>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Brahma Valley Junior College
                                    </p>
                                </div>
                            </motion.div>

                            {/* RIGHT SIDE - MESSAGE */}
                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.45, delay: 0.2 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-[#0b2c4d] mb-6">
                                    From The Principal's Desk
                                </h2>

                                <p className="text-gray-600 leading-8 text-justify mb-4">
                                    In every child, there is a world waiting to be explored. We are committed in our mission to inculcate a state of happiness in every child especially tribal child to ensure a peace-loving and pleasant world.
                                </p>

                                <p className="text-gray-600 leading-8 text-justify mb-4">
                                    Since its inception, Brahma Valley Public School & Junior College (BVPS&JC) has endeavored to transcend learning beyond boundaries to Tribal students. We are devoted to set benchmarks in nurturing children to grow into strong, matured, kind and intelligent adults, who are original in their ideas and decisive in their actions.
                                </p>

                                <p className="text-gray-600 leading-8 text-justify mb-4">
                                    Our aim to nurture our students so that they are well equipped to face the competitive society with value-based knowledge and skills that have contributed towards the growth and vision in building global citizens.
                                </p>

                                <p className="text-gray-600 leading-8 text-justify">
                                    Keeping in mind that to teach is to touch a life forever, we believe in holistic education that encompasses academics, co-curricular activities, sports education and life-skills learning. The campus, sports and academic facilities all bear testimony to this belief. Activities and events related to value education, environment, health education, games and sports, visual and performing arts, culture and heritage, personality development are effectively woven into the main fabric of school curriculum.
                                </p>

                                <p className="text-gray-600 leading-8 text-justify">
                                    Braham Mahotsav is celebrated every year in the month of Jan/Feb every year in which various extracurricular activities and competition carries out to build self-belief and competitiveness among Tribal students. District Administration and District Education Department praise for the same.
                                </p>

                                <p className="text-gray-600 leading-8 text-justify">
                                    As parents are the primary educators of children, but as the child starts schooling, we must devote ourselves to shoulder the responsibility together. As Principal, I would like to personally welcome you to our BVPS & JC family. We hope that your child’s journey with us will surely help in yielding fruitful results and envisage our shared dreams and to dream anew.
                                </p>
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};

export default PrincipalDesk;