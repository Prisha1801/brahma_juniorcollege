import React from 'react';
import HeroSection from "../common/components/HeroSection";
import { studentCommitteeHero } from "../common/data/heroData";

const StudentCommittee = () => {
    const committeeMembers = [
        {
            name: "test",
            profession: "test",
            appointedAs: "test",
            contactNumber: "7057187342"
        },
        {
            name: "test",
            profession: "test", 
            appointedAs: "test",
            contactNumber: "7057187342"
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <HeroSection {...studentCommitteeHero} />

            <section className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    
                    {/* Committee Members Table */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-[#0b2c4d] to-[#1a4d7d] text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-semibold text-sm md:text-base uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th className="px-6 py-4 text-left font-semibold text-sm md:text-base uppercase tracking-wider">
                                            Profession/Designation
                                        </th>
                                        <th className="px-6 py-4 text-left font-semibold text-sm md:text-base uppercase tracking-wider">
                                            Appointed As
                                        </th>
                                        <th className="px-6 py-4 text-left font-semibold text-sm md:text-base uppercase tracking-wider">
                                            Contact Number
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {committeeMembers.map((member, index) => (
                                        <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                                            <td className="px-6 py-4 text-sm md:text-base text-gray-900">
                                                {member.name}
                                            </td>
                                            <td className="px-6 py-4 text-sm md:text-base text-gray-700">
                                                {member.profession}
                                            </td>
                                            <td className="px-6 py-4 text-sm md:text-base text-gray-700">
                                                {member.appointedAs}
                                            </td>
                                            <td className="px-6 py-4 text-sm md:text-base text-gray-900">
                                                {member.contactNumber}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StudentCommittee;
