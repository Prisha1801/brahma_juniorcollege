import React, { useState } from 'react';
import HeroSection from '../common/components/HeroSection';
import { admissionFormHero } from '../common/data/heroData';

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        sat: '',
        sabm: '',
        sccs: '',
        sgnd: '',
        sname: '',
        scno: '',
        email: '',
        sdob: '',
        spob: '',
        slsc: '',
        sn: 'Indian',
        sr: '',
        sc: '',
        ssc: '',
        sfname: '',
        sfcno: '',
        stasa: '',
        stad: 'Nashik',
        stas: 'Maharashtra',
        stac: 'India',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.sat) newErrors.sat = 'Admission Type is required.';
        if (!formData.sabm) newErrors.sabm = 'Admission Base Mode is required.';
        if (!formData.sccs) newErrors.sccs = 'Course Code is required.';
        if (!formData.sgnd) newErrors.sgnd = 'Gender is required.';
        if (!formData.sname.trim()) newErrors.sname = 'Student Full Name is required.';
        if (!formData.scno || !/^[0-9]{10}$/.test(formData.scno)) newErrors.scno = 'Enter a valid 10-digit contact number.';
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email address.';
        if (!formData.sdob) newErrors.sdob = 'Date of Birth is required.';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const form = document.createElement('form');
        form.method = 'post';
        form.action = 'https://juniorcollege.brahmavalley.edu.in/student-admission-submit';
        form.enctype = 'multipart/form-data';

        Object.entries(formData).forEach(([key, value]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
    };

    const inputClass = (field) =>
        `w-full border rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white ${errors[field] ? 'border-red-500' : 'border-gray-300'}`;

    const selectClass = (field) =>
        `w-full border rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white appearance-none ${errors[field] ? 'border-red-500' : 'border-gray-300'}`;

    const SectionTitle = ({ title }) => (
        <h5 className="text-base font-bold text-gray-800 border-b border-gray-300 pb-2 mb-5">{title}</h5>
    );

    const Field = ({ label, required, error, children }) => (
        <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {children}
            {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
        </div>
    );

    const SelectWrapper = ({ children }) => (
        <div className="relative">
            {children}
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
        </div>
    );

    return (
        <div>
            {/* Hero Section */}
            <HeroSection {...admissionFormHero} />

            <section className="bg-white py-10 px-4">
                <div className="max-w-4xl mx-auto">

                    <h3 className="text-xl font-bold text-center text-gray-900 mb-8">Student Admission Form</h3>

                    <form onSubmit={handleSubmit} noValidate>

                        {/* ── Admission Details ── */}
                        <div className="mb-8">
                            <SectionTitle title="Admission Details" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">

                                <Field label="Admission Type" required error={errors.sat}>
                                    <SelectWrapper>
                                        <select name="sat" value={formData.sat} onChange={handleChange} className={selectClass('sat')}>
                                            <option value="">Select</option>
                                            <option value="DFY">Direct 1st Year</option>
                                            <option value="DSY">Direct 2nd Year</option>
                                            <option value="DTY">Direct 3rd Year</option>
                                        </select>
                                    </SelectWrapper>
                                </Field>

                                <Field label="Admission Base Mode" required error={errors.sabm}>
                                    <SelectWrapper>
                                        <select name="sabm" value={formData.sabm} onChange={handleChange} className={selectClass('sabm')}>
                                            <option value="">Select</option>
                                            <option>After 10th</option>
                                            <option>12th</option>
                                            <option>MCVC</option>
                                            <option>ITI</option>
                                            <option>COE</option>
                                        </select>
                                    </SelectWrapper>
                                </Field>

                                <Field label="Course Code" required error={errors.sccs}>
                                    <SelectWrapper>
                                        <select name="sccs" value={formData.sccs} onChange={handleChange} className={selectClass('sccs')}>
                                            <option value="">Select</option>
                                            <option value="CM">Computer Technology</option>
                                            <option value="IF">Information Technology</option>
                                            <option value="EE">Electrical Engineering</option>
                                            <option value="EJ">Electronics &amp; Telecommunication</option>
                                            <option value="ME">Mechanical Engineering</option>
                                            <option value="CE">Civil Engineering</option>
                                        </select>
                                    </SelectWrapper>
                                </Field>

                                <Field label="Gender" required error={errors.sgnd}>
                                    <SelectWrapper>
                                        <select name="sgnd" value={formData.sgnd} onChange={handleChange} className={selectClass('sgnd')}>
                                            <option value="">Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                    </SelectWrapper>
                                </Field>

                            </div>
                        </div>

                        {/* ── Student Details ── */}
                        <div className="mb-8">
                            <SectionTitle title="Student Details" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">

                                <Field label="Student Full Name" required error={errors.sname}>
                                    <input type="text" name="sname" value={formData.sname} onChange={handleChange}
                                        placeholder="As on mark sheet" className={inputClass('sname')} />
                                </Field>

                                <Field label="Student Contact No" required error={errors.scno}>
                                    <input type="tel" name="scno" value={formData.scno} onChange={handleChange}
                                        maxLength={10} pattern="[0-9]{10}" className={inputClass('scno')} />
                                </Field>

                                <Field label="Email" required error={errors.email}>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                                        className={inputClass('email')} />
                                </Field>

                                <Field label="Date of Birth" required error={errors.sdob}>
                                    <input type="date" name="sdob" value={formData.sdob} onChange={handleChange}
                                        className={inputClass('sdob')} />
                                </Field>

                                <Field label="Place of Birth">
                                    <input type="text" name="spob" value={formData.spob} onChange={handleChange}
                                        className={inputClass('spob')} />
                                </Field>

                                <Field label="Latest School Completed">
                                    <input type="text" name="slsc" value={formData.slsc} onChange={handleChange}
                                        className={inputClass('slsc')} />
                                </Field>

                                <Field label="Nationality">
                                    <input type="text" name="sn" value={formData.sn} readOnly
                                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white text-gray-800" />
                                </Field>

                                <Field label="Religion">
                                    <SelectWrapper>
                                        <select name="sr" value={formData.sr} onChange={handleChange} className={selectClass('sr')}>
                                            <option value="">Select</option>
                                            <option>Hindu</option>
                                            <option>Muslim</option>
                                            <option>Buddhist</option>
                                            <option>Christian</option>
                                            <option>Sikh</option>
                                            <option>Jain</option>
                                            <option>Parsi</option>
                                        </select>
                                    </SelectWrapper>
                                </Field>

                                <Field label="Category">
                                    <SelectWrapper>
                                        <select name="sc" value={formData.sc} onChange={handleChange} className={selectClass('sc')}>
                                            <option value="">Select</option>
                                            {['OPEN','SC','ST','VJ','DT','NT-A','NT-B','NT-C','NT-D','OBC','SBC'].map(c => (
                                                <option key={c}>{c}</option>
                                            ))}
                                        </select>
                                    </SelectWrapper>
                                </Field>

                                <Field label="Sub-Caste">
                                    <input type="text" name="ssc" value={formData.ssc} onChange={handleChange}
                                        className={inputClass('ssc')} />
                                </Field>

                                <Field label="Father's Name">
                                    <input type="text" name="sfname" value={formData.sfname} onChange={handleChange}
                                        className={inputClass('sfname')} />
                                </Field>

                                <Field label="Father/Guardian Contact No">
                                    <input type="tel" name="sfcno" value={formData.sfcno} onChange={handleChange}
                                        maxLength={10} pattern="[0-9]{10}" className={inputClass('sfcno')} />
                                </Field>

                            </div>
                        </div>

                        {/* ── Address ── */}
                        <div className="mb-8">
                            <SectionTitle title="Address" />

                            <div className="mb-5">
                                <label className="text-sm text-gray-700 block mb-1">Street Address</label>
                                <textarea name="stasa" value={formData.stasa} onChange={handleChange}
                                    rows={2}
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-400 resize-y" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5">
                                <div>
                                    <label className="text-sm text-gray-700 block mb-1">District</label>
                                    <input type="text" name="stad" value={formData.stad} onChange={handleChange}
                                        className={inputClass('stad')} />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-700 block mb-1">State</label>
                                    <input type="text" name="stas" value={formData.stas} onChange={handleChange}
                                        className={inputClass('stas')} />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-700 block mb-1">Country</label>
                                    <input type="text" name="stac" value={formData.stac} onChange={handleChange}
                                        className={inputClass('stac')} />
                                </div>
                            </div>
                        </div>

                        {/* ── Submit ── */}
                        <div className="flex justify-center mt-8">
                            <button
                                type="submit"
                                className="px-10 py-2.5 text-sm font-semibold text-white rounded transition-colors duration-200"
                                style={{ backgroundColor: '#1a3a5c' }}
                                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#15304e'}
                                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1a3a5c'}
                            >
                                Send Enquiry
                            </button>
                        </div>

                    </form>
                </div>
            </section>
        </div>
    );
};

export default AdmissionForm;