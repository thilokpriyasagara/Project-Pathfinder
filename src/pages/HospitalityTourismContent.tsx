import React from 'react';
import { UtensilsCrossed, MapPin, Users, Phone, Mail, Clock, Globe, TrendingUp, Star, Award } from 'lucide-react';
import './CareerFields.css';

const HospitalityTourismContent: React.FC = () => {
    return (
        <div className="tech-computing-extended">

            {/* 1. The Core Career Paths */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>1. The Core Career Paths</h2>
            <div className="grid-3-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                {/* Hotel & Resort Management */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                            <Star size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Hotel &amp; Resort Management</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They ensure every guest has a "5-star" experience. This involves managing different departments like the <strong>Front Office</strong> (reception), <strong>Housekeeping</strong>, or <strong>Food &amp; Beverage (F&amp;B)</strong>.</li>
                        <li><strong>Key Skills:</strong> Problem-solving, cultural awareness, and leadership.</li>
                        <li><strong>Career Ladder:</strong> Trainee → Supervisor → Department Manager → General Manager.</li>
                    </ul>
                </div>

                {/* Culinary Arts */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#fff7ed', color: '#f97316' }}>
                            <UtensilsCrossed size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Culinary Arts (Professional Chef)</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "creators" in the kitchen. From traditional Sri Lankan cuisine to international fine dining, chefs manage food preparation, kitchen safety, and menu design.</li>
                        <li><strong>Key Skills:</strong> Creativity, stamina, and attention to detail.</li>
                    </ul>
                </div>

                {/* Travel & Event Management */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#f0fdf4', color: '#22c55e' }}>
                            <MapPin size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Travel &amp; Event Management</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "planners." They design tour itineraries for foreigners, manage large corporate conferences, or coordinate destination weddings on a beach in Bentota.</li>
                        <li><strong>Key Skills:</strong> Organization, negotiation, and deep knowledge of local geography.</li>
                    </ul>
                </div>
            </div>

            {/* 2. Where to Study */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>2. Where to Study in Sri Lanka (2026 Intakes)</h2>

            {/* SLITHM Section */}
            <div className="content-block mb-6">
                <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                    <Award size={22} /> A. SLITHM (The Government Route)
                </h3>
                <p className="text-secondary mb-4">
                    The <strong>Sri Lanka Institute of Tourism and Hotel Management</strong> is the only government-approved premier institute. It is highly respected and offers the most affordable path.
                </p>
                <ul className="custom-list mb-6">
                    <li><strong>National Diploma in Hospitality Management (3 Years):</strong> Requires 3 "S" passes in A/Ls and a Credit for O/L English.</li>
                    <li><strong>Craft Level Courses (3–6 Months):</strong> Short, practical courses in Cookery, Reception, or Housekeeping. Ideal if you want to start working immediately.</li>
                    <li><strong>2026 Status:</strong> Applications for many certificate levels closed in January, but <strong>Mid-year intakes</strong> usually open around June/July.</li>
                </ul>

                {/* SLITHM Colleges Table */}
                <h4 className="font-bold mt-8 mb-3 gap-20" style={{ color: '#1e293b' }}>SLITHM College Contact Details</h4>
                <div className="table-container">
                    <table className="custom-table w-full">
                        <thead>
                            <tr>
                                <th>College</th>
                                <th>Phone Number</th>
                                <th>Email Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Colombo (Head Office)</strong></td>
                                <td style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <Phone size={13} color="#2563eb" /> 011 2208312
                                </td>
                                <td style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <Mail size={13} color="#2563eb" /> registrar@slithm.edu.lk
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Kandy (Pallekelle)</strong></td>
                                <td>081 2230900</td>
                                <td>kumuduniw@slithm.edu.lk</td>
                            </tr>
                            <tr>
                                <td><strong>Koggala (Galle)</strong></td>
                                <td>091 2283072</td>
                                <td>koggala@slithm.edu.lk</td>
                            </tr>
                            <tr>
                                <td><strong>Kurunegala</strong></td>
                                <td>037 2223959</td>
                                <td>kurunegala@slithm.edu.lk</td>
                            </tr>
                            <tr>
                                <td><strong>Anuradhapura</strong></td>
                                <td>025 2223315</td>
                                <td>sujithy@slithm.edu.lk</td>
                            </tr>
                            <tr>
                                <td><strong>Bandarawela</strong></td>
                                <td>057 2232499</td>
                                <td>chsbanda@yahoo.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Private Academies */}
            <div className="content-block mb-8">
                <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                    <Users size={22} /> B. Private Academies &amp; Universities
                </h3>
                <p className="text-secondary mb-4">
                    These often offer foreign-affiliated degrees (UK/Australia) and have strong links to private hotel chains:
                </p>
                <ul className="custom-list mb-6">
                    <li><strong>William Angliss @ SLIIT:</strong> A partnership with a top Australian institute. Offers specialized degrees in <strong>Culinary Arts and Hospitality Management</strong>.</li>
                    <li><strong>NSBM Green University:</strong> Offers a <strong>BSc (Hons) in Events, Tourism, and Hospitality Management</strong>. They follow a "2+2" model with 2 years of study and 2 years of industrial training.</li>
                    <li><strong>Cinnamon Hospitality Academy:</strong> Run by Cinnamon Hotels, this academy offers a "VET by EHL" (Swiss) diploma which includes a <strong>12-month paid internship</strong> at their resorts.</li>
                </ul>

                <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {/* Important 2026 Intake Dates */}
                    <div className="req-card" style={{ borderLeft: '4px solid #f97316' }}>
                        <h4 className="font-bold mb-3" style={{ color: '#1e293b' }}>⏰ Important 2026 Intake Dates</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '0.75rem', color: '#475569', fontSize: '0.9rem' }}>
                                <strong style={{ color: '#1e293b' }}>SLITHM:</strong> Two main intakes — one in <strong style={{ color: '#2563eb' }}>January</strong> and a mid-year intake around <strong style={{ color: '#2563eb' }}>June/July</strong>. Short courses (Craft Level) often have rolling admissions every few months.
                            </li>
                            <li style={{ color: '#475569', fontSize: '0.9rem' }}>
                                <strong style={{ color: '#1e293b' }}>SLIIT (William Angliss):</strong> The main degree and diploma intakes for 2026 are in <strong style={{ color: '#2563eb' }}>February</strong> and <strong style={{ color: '#2563eb' }}>September</strong>.
                            </li>
                        </ul>
                    </div>

                    {/* Next Steps */}
                    <div className="req-card" style={{ borderLeft: '4px solid #22c55e' }}>
                        <h4 className="font-bold mb-3" style={{ color: '#1e293b' }}>✅ Next Steps for You</h4>
                        <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                <span style={{ minWidth: '1.4rem', height: '1.4rem', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>1</span>
                                <span style={{ color: '#475569', fontSize: '0.9rem' }}><strong style={{ color: '#1e293b' }}>Call the SLITHM registrar</strong> (011 2208312) to ask about the exact date for the mid-year "National Diploma" entrance exam.</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem' }}>
                                <span style={{ minWidth: '1.4rem', height: '1.4rem', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>2</span>
                                <span style={{ color: '#475569', fontSize: '0.9rem' }}><strong style={{ color: '#1e293b' }}>Visit the SLIIT Malabe Campus</strong> for a "Walk-in Inquiry" if you are interested in the William Angliss program; they often allow you to tour their industrial kitchens.</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* 3. Entry Requirements for 2026 */}
            <h2 className="section-title mt-10 mb-4" style={{ fontSize: '2rem', color: '#1e293b' }}>3. Entry Requirements for 2026</h2>
            <div className="table-container mb-12">
                <table className="custom-table w-full">
                    <thead>
                        <tr>
                            <th>Program</th>
                            <th>Minimum Requirement</th>
                            <th>Duration</th>
                            <th>Certification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>National Diploma (SLITHM)</strong></td>
                            <td>3 "S" passes in A/Ls</td>
                            <td>3 Years</td>
                            <td>National Diploma</td>
                        </tr>
                        <tr>
                            <td><strong>BSc Hospitality (NSBM/SLIIT)</strong></td>
                            <td>3 "S" passes in A/Ls (Any Stream)</td>
                            <td>3–4 Years</td>
                            <td>Honours Degree</td>
                        </tr>
                        <tr>
                            <td><strong>Craft/Certificate Level</strong></td>
                            <td>6 O/L passes</td>
                            <td>3–6 Months</td>
                            <td>NVQ Level 3/4</td>
                        </tr>
                        <tr>
                            <td><strong>Professional Diplomas</strong></td>
                            <td>O/L + English Proficiency</td>
                            <td>12–18 Months</td>
                            <td>Pearson/EHL Diploma</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* 4. Immediate Steps + Why Unique */}
            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '2rem' }}>

                {/* Hospitality Bridge */}
                <div>
                    <h2 className="section-title mb-4" style={{ fontSize: '1.8rem', color: '#1e293b' }}>
                        4. Immediate Steps (The "Hospitality Bridge")
                    </h2>
                    <p className="text-secondary mb-6">
                        If you are waiting for your results or an intake, do these to boost your CV:
                    </p>
                    <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#f97316', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>1</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Work on Your English/Languages:</strong> Hospitality is a global language. Improving your spoken English or learning basic <strong>French, German, or Mandarin</strong> will make you a high-value candidate.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#f97316', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>2</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Short Professional Etiquette Course:</strong> Institutes like <strong>NIBM</strong> offer 4-month Advanced Certificates in Customer Service.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#f97316', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>3</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Part-time "Event Support":</strong> Look for opportunities to help in local banquets or events. Real-world experience is highly valued during university interviews.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#f97316', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>4</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Master Basic ICT:</strong> Modern hotels use software like <strong>Opera or Fidelio</strong>. Having basic computer literacy is a mandatory requirement.
                            </span>
                        </li>
                    </ol>
                </div>

                {/* Why This Field is Unique */}
                <div>
                    <div className="content-block premium-card" style={{ height: '100%', borderTop: '4px solid #f97316' }}>
                        <h3 className="flex items-center gap-2 mb-6" style={{ color: '#1e293b', fontSize: '1.5rem' }}>
                            <Globe size={24} color="#f97316" />
                            5. Why This Field is Unique in Sri Lanka
                        </h3>
                        <ul className="custom-list space-y-4">
                            <li className="flex items-start gap-3">
                                <TrendingUp className="flex-shrink-0 mt-1" size={20} color="#f97316" />
                                <div>
                                    <strong>Booming Tourism Economy:</strong>
                                    <p className="text-sm text-secondary mt-1">Sri Lanka was named a top global travel destination for 2026, driving massive demand for professionally trained hospitality staff in luxury resorts, boutique hotels, and eco-lodges nationwide.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Globe className="flex-shrink-0 mt-1" size={20} color="#f97316" />
                                <div>
                                    <strong>Global Career Mobility:</strong>
                                    <p className="text-sm text-secondary mt-1">A hotel management qualification from SLITHM or William Angliss opens doors to positions in the Maldives, Middle East (UAE/Qatar), and Southeast Asia — where Sri Lankan hospitality professionals are highly sought after.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Award className="flex-shrink-0 mt-1" size={20} color="#f97316" />
                                <div>
                                    <strong>Earn While You Learn:</strong>
                                    <p className="text-sm text-secondary mt-1">Programs like the Cinnamon Hospitality Academy include a <strong>12-month paid internship</strong>, and NAITA apprenticeships in hotels place you in real 5-star kitchens from day one — earning while gaining world-class experience.</p>
                                </div>
                            </li>
                        </ul>
                        <div className="tip-box mt-6 p-4 rounded-lg" style={{ backgroundColor: '#fff7ed', border: '1px solid #fed7aa' }}>
                            <p className="text-sm font-medium m-0" style={{ color: '#9a3412' }}>
                                <span className="font-bold">💡 Key Tip:</span> Even <strong>Craft Level</strong> (3–6 months, 6 O/L passes) from SLITHM is enough to get your first hotel job — then your employer may sponsor your next qualification. Start small and climb the ladder!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Plan Timeline */}
            <div className="content-block premium-card mt-8" style={{ borderTop: '4px solid #8b5cf6' }}>
                <h3 className="flex items-center gap-2 mb-6" style={{ color: '#1e293b', fontSize: '1.5rem' }}>
                    <Clock size={24} color="#8b5cf6" />
                    Your Action Plan for 2026
                </h3>
                <p className="text-sm text-secondary mb-4">A practical roadmap for aspiring hotel managers, chefs, and tourism professionals.</p>
                <div className="timeline-steps">
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>1</div>
                        <div className="step-content">
                            <strong>Now: Call SLITHM (011 2208312)</strong>
                            <p className="text-sm text-secondary mt-1">Ask about the mid-year June/July National Diploma intake and Craft Level rolling admissions. SLITHM is the most affordable and respected route — apply as early as possible.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>2</div>
                        <div className="step-content">
                            <strong>February / September 2026: SLIIT William Angliss</strong>
                            <p className="text-sm text-secondary mt-1">Visit the SLIIT Malabe Campus for a Walk-in Inquiry about the William Angliss Culinary Arts and Hospitality Management program. Tour the industrial kitchens and speak to current students.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>3</div>
                        <div className="step-content">
                            <strong>Build Your Language Profile</strong>
                            <p className="text-sm text-secondary mt-1">Enroll in a British Council spoken English program or take a basic French/German course. Languages are the single biggest differentiator in hospitality hiring, especially for luxury resort roles.</p>
                        </div>
                    </div>
                    <div className="timeline-step" style={{ paddingBottom: 0, borderLeft: 'none' }}>
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>4</div>
                        <div className="step-content">
                            <strong>Get Event / Banquet Experience</strong>
                            <p className="text-sm text-secondary mt-1">Volunteer or take part-time work at local wedding receptions, banquets, or corporate events. This practical experience counts heavily in SLITHM and private university interviews — and may earn you a small income too.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-secondary italic mb-4">Hospitality &amp; Tourism: where Sri Lanka's ocean views and cultural richness become your workplace every day.</p>

            </div>
        </div>
    );
};

export default HospitalityTourismContent;
