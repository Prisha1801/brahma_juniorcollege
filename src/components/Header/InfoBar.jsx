import React from 'react';

const InfoBar = () => {
    return (
        <div className="bg-white py-5 relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-40 h-40 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-white rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <p className="uppercase font-heading font-medium mb-1 tracking-[0.15em] md:tracking-[0.25em] text-[20px] md:text-[20px]">
                    NASHIK GRAMIN SHIKSHAN PRASARAK MANDAL’s
                </p>
                <h1 className="font-heading font-extrabold text-lg md:text-2xl lg:text-3xl text-[#4B8E3F] tracking-wide mb-2 leading-tight">
                    BRAHMA VALLEY PUBLIC SCHOOL & JUNIOR COLLEGE
                </h1>
                <p className="text-[15px] md:text-[15px] leading-relaxed font-medium max-w-3xl mx-auto">
                    Approved By Maharashtra State Board Secondary & Higher secondary Nashik(Pune).
                </p>
                <p className="text-[11px] md:text-[13px] leading-relaxed font-medium max-w-3xl mx-auto">
                    <strong>UDISE No: </strong>27201400606   | <strong>INDEX No: </strong>S.13.14.032 & J.13.14.004
                </p>
            </div>
        </div>
    );
};

export default InfoBar;
