import React from 'react';
import HeroSection from '../components/common/components/HeroSection';
import { approvalsHero } from '../components/common/data/heroData';

const Approvals = () => {

    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...approvalsHero} />

            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl text-center font-bold text-gray-900 mb-4">Approvals</h1>
                <p className="text-gray-600 text-center">This is the approvals page.</p>
            </div>
        </div>
    );
};

export default Approvals;