import React from 'react';
import HeroSection from "../common/components/HeroSection";
import { studentManagementCommitteeHero } from "../common/data/heroData";

const StudentManagementCommittee = () => {
    const committeeMembers = [
        {
            srNo: 1,
            name: "CHADRAKANT LAXMAN SHIRSATH",
            profession: "PRESIDENT",
            appointedAs: "PRINCIPAL",
            contactNumber: "9850943415"
        },
        {
            srNo: 2,
            name: "SHARAD BALASAHE SONAWANE",
            profession: "VICE.PRESIDENT",
            appointedAs: "PARENT",
            contactNumber: "9763993578"
        },
        {
            srNo: 3,
            name: "GAURAV PANGAVAHANE PATIL",
            profession: "SECRETARY",
            appointedAs: "N.G.S.P.M. SECRETARY",
            contactNumber: "9922588885"
        },
        {
            srNo: 4,
            name: "DR. GOKUL TALELE",
            profession: "JOINT SECRETARY",
            appointedAs: "CAMPUS DIRECTOR",
            contactNumber: "9822779611"
        },
        {
            srNo: 5,
            name: "DILIP MOTILAL SHINDE",
            profession: "MEMBER",
            appointedAs: "CO-ORDINATOR",
            contactNumber: "7385647255"
        },
        {
            srNo: 6,
            name: "NITIN DATTATRY WAIKAR",
            profession: "MEMBER",
            appointedAs: "OFFICE STAFF",
            contactNumber: "9890949788"
        },
        {
            srNo: 7,
            name: "DHIRAJ JAGADISH JANEKAR",
            profession: "MEMBER",
            appointedAs: "TEACHER",
            contactNumber: "9422873082"
        },
        {
            srNo: 8,
            name: "WAMAN AACHARI",
            profession: "MEMBER",
            appointedAs: "PARENT",
            contactNumber: "9767952522"
        },
        {
            srNo: 9,
            name: "RAJARAM CHAVAN",
            profession: "MEMBER",
            appointedAs: "PARENT",
            contactNumber: "9767385004"
        },
        {
            srNo: 10,
            name: "OM MILIND NAGARE",
            profession: "MEMBER",
            appointedAs: "PARENT",
            contactNumber: "9766810633"
        },
        {
            srNo: 11,
            name: "DR. VIJAY WAMANRAO BAGUL",
            profession: "MEMBER",
            appointedAs: "PARENT",
            contactNumber: "9922934974"
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <HeroSection {...studentManagementCommitteeHero} />

            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    
                    {/* Committee Members Table */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-[#0b2c4d] to-[#1a4d7d] text-white">
                                    <tr>
                                        <th className="px-4 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                                            SR. NO
                                        </th>
                                        <th className="px-4 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                                            NAME OF THE COMMITTEE MEMBER
                                        </th>
                                        <th className="px-4 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                                            PROFESSION / DESIGNATION
                                        </th>
                                        <th className="px-4 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                                            APPOINTED AS
                                        </th>
                                        <th className="px-4 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                                            CONTACT NO.
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {committeeMembers.map((member, index) => (
                                        <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                                            <td className="px-4 py-4 text-sm text-center text-gray-900">
                                                {member.srNo}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-900 font-medium">
                                                {member.name}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-700">
                                                {member.profession}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-700">
                                                {member.appointedAs}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-center text-gray-900">
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

export default StudentManagementCommittee;
