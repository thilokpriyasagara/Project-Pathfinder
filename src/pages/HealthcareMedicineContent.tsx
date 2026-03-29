import React from 'react';
import { Stethoscope, Heart, Activity, Building2, GraduationCap, Calendar, Award, Clock, Globe, ShieldCheck } from 'lucide-react';
import './CareerFields.css';

const HealthcareMedicineContent: React.FC = () => {
    return (
        <div className="tech-computing-extended">
            {/* 1. The Career Paths */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>1. The Career Paths</h2>
            <div className="grid-3-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#fef2f2', color: '#ef4444' }}>
                            <Stethoscope size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Surgeon / Doctor (MBBS)</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "healers." Doctors diagnose illnesses, while Surgeons perform operations to repair injuries or treat diseases.</li>
                        <li><strong>The Path:</strong> This is the most rigorous path, requiring a 5-year MBBS degree followed by a mandatory 1-year internship in a government hospital.</li>
                        <li><strong>Specialization:</strong> After MBBS, you can specialize in areas like Cardiology (heart), Neurology (brain), or Pediatrics (children).</li>
                    </ul>
                </div>

                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                            <Heart size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Nurse / Nurse Practitioner</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "backbone of care." Nurses monitor patients 24/7, administer medications, and assist doctors during procedures.</li>
                        <li><strong>The Reality:</strong> In Sri Lanka, Nursing is a high-demand profession with many opportunities to work in the UK, Australia, or Middle East after gaining a few years of experience.</li>
                        <li><strong>Career Ladder:</strong> Staff Nurse → Ward Sister/Head Nurse → Matron → Nursing Administrator.</li>
                    </ul>
                </div>

                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#f0fdf4', color: '#22c55e' }}>
                            <Activity size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Physical Therapist (Physiotherapist)</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "movement experts." They help people recover from injuries, strokes, or surgeries using exercise and physical techniques instead of drugs or surgery.</li>
                        <li><strong>In Sri Lanka:</strong> With an aging population and rising sports culture, the demand for Physiotherapists is skyrocketing in both hospitals and private sports clinics.</li>
                    </ul>
                </div>
            </div>

            {/* 2. Where to Study in Sri Lanka */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>2. Where to Study in Sri Lanka</h2>

            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                <div className="content-block">
                    <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <Building2 size={24} /> A. State Universities (High Z-Score Required)
                    </h3>
                    <p className="text-secondary mb-4">These programs are free but extremely competitive (Biological Science stream):</p>
                    <ul className="custom-list">
                        <li><strong>Medicine (MBBS):</strong> Available at Colombo, Peradeniya, Sri Jayewardenepura, Kelaniya, Ragama, Ruhuna, Jaffna, Rajarata, and Eastern Universities.</li>
                        <li><strong>BSc Nursing / Physiotherapy / Pharmacy:</strong> Offered by the <strong>Allied Health Sciences</strong> faculties at Peradeniya, Colombo, Sri Jayewardenepura, and Kotelawala Defence University (KDU).</li>
                    </ul>
                </div>
                <div className="content-block">
                    <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <GraduationCap size={24} /> B. Government Nursing Schools (NTS)
                    </h3>
                    <p className="text-secondary mb-4">The Ministry of Health runs <strong>Nurses Training Schools (NTS)</strong> across the country (e.g., Colombo, Kandy, Galle).</p>
                    <ul className="custom-list">
                        <li><strong>Admission:</strong> Based on A/L results (usually any stream, but Science is preferred). Students receive a monthly allowance while training and are guaranteed a government job upon completion.</li>
                    </ul>
                </div>
            </div>

            <div className="content-block mb-8">
                <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                    <Award size={24} /> C. Private Institutes (Self-Funded)
                </h3>
                <p className="text-secondary mb-4">Excellent if you want to enter the private sector or work abroad:</p>
                <ul className="custom-list">
                    <li><strong>IIHS (International Institute of Health Sciences):</strong> Famous for Nursing and Physiotherapy pathways to Australia and the UK.</li>
                    <li><strong>SLIIT:</strong> Offers a Higher Diploma in Nursing (accredited locally and globally).</li>
                    <li><strong>KAATSU / Amrak / Lanka Hospitals Academy:</strong> Offer specialized diplomas in Nursing, Biomedical Science, and Pharmacy.</li>
                </ul>
            </div>

            {/* 2026 Intake Information */}
            <h2 className="section-title mt-10 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>
                <Calendar size={28} style={{ display: 'inline', marginRight: '0.5rem', color: '#8b5cf6' }} />
                2026 Intake Information
            </h2>

            <p className="text-secondary text-lg mb-8" style={{ lineHeight: 1.6 }}>
                For a student pursuing a career in <strong>Healthcare & Medicine</strong>, the 2026 intake cycles offer a variety of
                entry points depending on whether you are targeting government training or private institutions.
            </p>

            <h3 className="mb-3 font-bold text-xl" style={{ color: '#1e293b' }}>1. Government Nursing Schools (NTS)</h3>
            <p className="text-secondary mb-4">These schools offer a 3-year diploma, a monthly allowance, and a guaranteed job in the government sector.</p>

            <div className="entry-reqs-details grid-3-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                <div className="req-card">
                    <h4 className="font-bold text-lg mb-3" style={{ color: '#2563eb' }}>A/L Requirements</h4>
                    <ul>
                        <li>Minimum of <strong>3 "S" passes</strong> in any stream (though Science is preferred) in one sitting.</li>
                    </ul>
                </div>
                <div className="req-card">
                    <h4 className="font-bold text-lg mb-3" style={{ color: '#2563eb' }}>O/L Requirements</h4>
                    <ul>
                        <li>At least <strong>6 passes</strong> in no more than 2 attempts, including Credit (C) passes in <strong>Sinhala/Tamil, Mathematics, English, and Science</strong>.</li>
                    </ul>
                </div>
                <div className="req-card">
                    <h4 className="font-bold text-lg mb-3" style={{ color: '#2563eb' }}>Physical Requirements</h4>
                    <ul>
                        <li>Typically requires a minimum height of <strong>4' 10"</strong> for females.</li>
                        <li>Must be between <strong>18–25 years</strong> of age.</li>
                    </ul>
                </div>
            </div>

            <div className="highlight-box mb-8" style={{ backgroundColor: '#fefce8', borderLeft: '4px solid #eab308', padding: '1.5rem', borderRadius: '0 8px 8px 0' }}>
                <h4 className="font-bold mb-3 flex items-center gap-2" style={{ color: '#1e293b' }}>
                    <Calendar size={20} color="#eab308" /> Status for 2026
                </h4>
                <ul className="custom-list">
                    <li><strong>Sri Jayewardenepura General Hospital (SJGH):</strong> Their 2026 intake application recently closed on February 2, 2026. If you missed this, keep an eye on the Gazette for the next Ministry of Health general intake.</li>
                    <li><strong>Ministry of Health (MOH):</strong> Recruitments are currently active for specific batches (e.g., the 2025 batch was recently being finalized). The next general call is expected via the <strong>Government Gazette</strong> later this year.</li>
                </ul>
            </div>

            <h3 className="mb-4 font-bold text-xl" style={{ color: '#1e293b' }}>2. Private Nursing &amp; Health Science Intakes</h3>
            <p className="text-secondary mb-4">Private institutes are ideal for students looking for global pathways (to the UK or Australia) or more flexible entry.</p>

            <div className="table-container mb-8">
                <table className="custom-table w-full">
                    <thead>
                        <tr>
                            <th>Institute</th>
                            <th>Program</th>
                            <th>Intake Period</th>
                            <th>Key Requirements</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>SLIIT</strong></td>
                            <td>Higher Diploma in Nursing</td>
                            <td><strong>February / June 2026</strong></td>
                            <td>3 "S" passes in A/Ls (Any stream). A/L Science is an advantage.</td>
                        </tr>
                        <tr>
                            <td><strong>IIHS</strong></td>
                            <td>Adv. Diploma in Nursing / Physiotherapy</td>
                            <td><strong>May &amp; September 2026</strong></td>
                            <td>3 "S" passes in A/Ls. Offers pathways to Deakin University (Australia).</td>
                        </tr>
                        <tr>
                            <td><strong>Amrak (Durdans)</strong></td>
                            <td>Higher Diploma in Nursing (NVQ 6)</td>
                            <td><strong>Rolling Intakes</strong></td>
                            <td>O/L with Science &amp; English. A/Ls preferred for degree top-ups.</td>
                        </tr>
                        <tr>
                            <td><strong>Asiri Academy</strong></td>
                            <td>Diploma in Nursing (NVQ 6)</td>
                            <td><strong>Early 2026</strong></td>
                            <td>Height 5' 0"+, below 24 years, O/L Credit in English.</td>
                        </tr>
                        <tr>
                            <td><strong>Lanka Hospitals</strong></td>
                            <td>Diploma in General Nursing</td>
                            <td><strong>Mid 2026</strong></td>
                            <td>3 A/L passes (Any stream) or 1–2 passes in Science stream.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* 3. Important Deadlines & Actions */}
            <h2 className="section-title mt-10 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>3. Important Deadlines &amp; Actions</h2>
            <div className="content-block mb-8">
                <ul className="custom-list">
                    <li><strong>UGC Applications:</strong> If you are aiming for a <strong>Medical (MBBS)</strong> or <strong>Allied Health Science</strong> degree in a State University (e.g., University of Colombo or Peradeniya), you must apply through the <strong>UGC portal</strong> once the 2025/2026 Handbook is released (usually a few months after A/L results).</li>
                    <li><strong>KDU (Kotelawala Defence University):</strong> Often opens applications for its Faculty of Medicine and Allied Health Sciences in <strong>September/October</strong> for the following year's intake. This is a great alternative for students with high A/L results.</li>
                    <li><strong>The "Foundation" Route:</strong> If you do not have Science for A/Ls, institutes like <strong>IIHS</strong> or <strong>Amrak</strong> offer a <strong>"Foundation in Biological Sciences"</strong> which allows you to enter a Nursing or Physiotherapy degree after 6–12 months of study.</li>
                </ul>
            </div>

            <div className="highlight-box mb-8" style={{ backgroundColor: '#f0fdf4', borderLeft: '4px solid #22c55e', padding: '1.5rem', borderRadius: '0 8px 8px 0' }}>
                <h4 className="font-bold mb-3" style={{ color: '#1e293b' }}>Summary Checklist for You:</h4>
                <ul className="custom-list">
                    <li><strong>Check your O/Ls:</strong> Ensure you have those "C" passes in Math, Science, and English.</li>
                    <li><strong>Verify Registration:</strong> Ensure your chosen private school is recognized by the <strong>Private Health Services Regulatory Council (PHSRC)</strong>.</li>
                    <li><strong>Medical Fitness:</strong> Almost all nursing and medical programs require a physical fitness test and a height check.</li>
                </ul>
            </div>

            {/* Courses & Why Unique split layout */}
            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '2rem' }}>
                {/* Courses Right Now */}
                <div>
                    <h2 className="section-title mb-6" style={{ fontSize: '1.8rem', color: '#1e293b' }}>3. Courses You Can Do Right Now</h2>
                    <p className="text-secondary mb-4">If you have just finished school, you don't have to wait for your results to start exploring.</p>
                    <div className="table-container">
                        <table className="custom-table w-full">
                            <thead>
                                <tr>
                                    <th>Course / Goal</th>
                                    <th>Recommended Pathway</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Foundation in Health Science</strong></td>
                                    <td><strong>Amrak</strong> or <strong>Asiri Academy</strong>. Ideal if you didn't do Science for A/Ls but want to enter healthcare.</td>
                                </tr>
                                <tr>
                                    <td><strong>Caregiving Certificate</strong></td>
                                    <td>NVQ Level 3/4 at Lanka Hospitals or St. John Ambulance. Great for immediate jobs locally or abroad.</td>
                                </tr>
                                <tr>
                                    <td><strong>First Aid &amp; BLS</strong></td>
                                    <td><strong>Sri Lanka Red Cross</strong> or <strong>St. John Ambulance</strong>. A vital certificate for any healthcare CV.</td>
                                </tr>
                                <tr>
                                    <td><strong>Pharmacy Technician</strong></td>
                                    <td><strong>Ceylon Pharma College</strong> or <strong>NIBM</strong>. A 3–6 month course to work in pharmacies.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Why This Field is Unique */}
                <div>
                    <div className="content-block premium-card" style={{ height: '100%', borderTop: '4px solid #ef4444' }}>
                        <h3 className="flex items-center gap-2 mb-6" style={{ color: '#1e293b', fontSize: '1.5rem' }}>
                            <Globe size={24} color="#ef4444" />
                            4. Why This Field is Unique in Sri Lanka
                        </h3>
                        <ul className="custom-list space-y-4">
                            <li className="flex items-start gap-3">
                                <ShieldCheck className="flex-shrink-0 mt-1" size={20} color="#ef4444" />
                                <div>
                                    <strong>Government Job Security:</strong>
                                    <p className="text-sm text-secondary mt-1">Once you join the government health sector (as a doctor, nurse, or pharmacist), you have a permanent job with a pension.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Globe className="flex-shrink-0 mt-1" size={20} color="#ef4444" />
                                <div>
                                    <strong>Global Portability:</strong>
                                    <p className="text-sm text-secondary mt-1">Sri Lankan healthcare training is highly regarded. Nurses and Physiotherapists from Sri Lanka are in high demand in the UK (NHS) and Middle East.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Heart className="flex-shrink-0 mt-1" size={20} color="#ef4444" />
                                <div>
                                    <strong>Personal Fulfillment:</strong>
                                    <p className="text-sm text-secondary mt-1">Unlike a desk job, you see the results of your work in the recovery of your patients every day.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="tip-box mt-6 p-4 rounded-lg" style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca' }}>
                            <p className="text-sm font-medium m-0 flex gap-2" style={{ color: '#991b1b' }}>
                                <span className="font-bold">⚠️ Important Note:</span> To practice as a Nurse or Doctor in Sri Lanka, you must eventually be registered with the <strong>Sri Lanka Medical Council (SLMC)</strong> or the <strong>Sri Lanka Nursing Council (SLNC)</strong>. Always check if a private course is recognized by these bodies!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gap Year / Bridge Timeline */}
            <div className="content-block premium-card mt-8" style={{ borderTop: '4px solid #8b5cf6' }}>
                <h3 className="flex items-center gap-2 mb-6" style={{ color: '#1e293b', fontSize: '1.5rem' }}>
                    <Clock size={24} color="#8b5cf6" />
                    Your Action Plan for 2026
                </h3>
                <p className="text-sm text-secondary mb-4">A practical roadmap whether you are targeting government or private healthcare pathways.</p>
                <div className="timeline-steps">
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>1</div>
                        <div className="step-content">
                            <strong>Now – March 2026: Check Your Results</strong>
                            <p className="text-sm text-secondary mt-1">Verify your O/L credits in Math, Science, and English. These are the baseline for almost every healthcare program.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>2</div>
                        <div className="step-content">
                            <strong>April – June 2026: Apply &amp; Enroll</strong>
                            <p className="text-sm text-secondary mt-1">Apply via the UGC portal for state university programs, or directly enroll at SLIIT / IIHS / Amrak for private intakes (May–June 2026 windows).</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>3</div>
                        <div className="step-content">
                            <strong>Immediately: Get Certified</strong>
                            <p className="text-sm text-secondary mt-1">Do a First Aid &amp; BLS course at the Sri Lanka Red Cross or St. John Ambulance. It costs little but adds real value to your CV and helps you decide if healthcare is your passion.</p>
                        </div>
                    </div>
                    <div className="timeline-step" style={{ paddingBottom: 0, borderLeft: 'none' }}>
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>4</div>
                        <div className="step-content">
                            <strong>Keep Watching the Government Gazette</strong>
                            <p className="text-sm text-secondary mt-1">The next MOH general nursing intake will be announced in the Gazette. Set a reminder to check it every few weeks — spots fill up extremely fast.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-secondary italic mb-4">Healthcare is one of the most stable, globally portable, and personally rewarding careers you can choose in Sri Lanka.</p>

            </div>
        </div>
    );
};

export default HealthcareMedicineContent;
