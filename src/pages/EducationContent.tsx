import React from 'react';
import { BookOpen, Users, GraduationCap, Building2, Phone, Clock, Globe, TrendingUp, Star } from 'lucide-react';
import './CareerFields.css';

const EducationContent: React.FC = () => {
    return (
        <div className="tech-computing-extended">

            {/* 1. The Career Paths */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>1. The Career Paths</h2>
            <div className="grid-3-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                {/* School Teacher */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                            <BookOpen size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>School Teacher</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "knowledge facilitators." A teacher translates complex subjects into lessons that students can understand, while also acting as a mentor and disciplinarian.</li>
                        <li><strong>In Sri Lanka:</strong> You can specialize in Primary (Grade 1–5), Junior Secondary, or Advanced Level (A/L) teaching.</li>
                        <li><strong>Career Ladder:</strong> Class Teacher → Sectional Head → Deputy Principal.</li>
                    </ul>
                </div>

                {/* School Principal / Administrator */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#f0fdf4', color: '#22c55e' }}>
                            <Users size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>School Principal / Administrator</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "CEOs of the school." They don't just teach; they manage budgets, handle staff recruitment, interact with the Ministry of Education, and ensure the school's facilities are safe and modern.</li>
                        <li><strong>Key Skills:</strong> Leadership, financial management, and a deep understanding of educational law and policy.</li>
                    </ul>
                </div>

                {/* College Professor / Lecturer */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#fef2f2', color: '#ef4444' }}>
                            <GraduationCap size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>College Professor / Lecturer</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "specialists." Working in universities or higher education institutes, they lecture adult students and conduct original research to add new knowledge to their field (like Science, Arts, or Business).</li>
                        <li><strong>Key Skills:</strong> Research, public speaking, and writing for academic journals.</li>
                        <li><strong>Career Ladder:</strong> Assistant Lecturer → Senior Lecturer → Professor.</li>
                    </ul>
                </div>
            </div>

            {/* 2. Where to Study & Train */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>2. Where to Study &amp; Train in Sri Lanka</h2>

            <div className="grid-3-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                {/* NCoE */}
                <div className="content-block">
                    <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <Star size={22} /> A. National Colleges of Education (NCoE)
                    </h3>
                    <p className="text-secondary mb-4" style={{ fontSize: '0.9rem' }}>
                        The most popular path for A/L leavers who want to become government teachers immediately.
                    </p>
                    <ul className="custom-list">
                        <li><strong>The Course:</strong> A 3-year <strong>National Diploma in Teaching (NDT)</strong> which includes 2 years of study and 1 year of internship.</li>
                        <li><strong>Requirement:</strong> 3 "S" passes in A/Ls + O/L credits in English, Math, and Language.</li>
                        <li><strong>Benefit:</strong> Upon completion, you are guaranteed a permanent teaching post in a government school.</li>
                    </ul>
                </div>

                {/* State Universities B.Ed. */}
                <div className="content-block">
                    <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <Building2 size={22} /> B. State Universities (B.Ed. Degrees)
                    </h3>
                    <p className="text-secondary mb-4" style={{ fontSize: '0.9rem' }}>
                        If you have a high Z-score, you can apply for an internal <strong>Bachelor of Education (B.Ed.)</strong> degree:
                    </p>
                    <ul className="custom-list">
                        <li><strong>University of Colombo:</strong> Offers B.Ed. in various specializations (Secondary, Science, etc.).</li>
                        <li><strong>The Open University of Sri Lanka (OUSL):</strong> Highly recommended for those who want to "learn while they earn." They offer B.Ed. in Natural Sciences, Drama, and Special Needs Education.</li>
                    </ul>
                </div>

                {/* Private Institutes */}
                <div className="content-block">
                    <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <GraduationCap size={22} /> C. Private Institutes &amp; International Pathways
                    </h3>
                    <p className="text-secondary mb-4" style={{ fontSize: '0.9rem' }}>
                        Excellent for those targeting the International School sector (Lyceum, Gateway, etc.):
                    </p>
                    <ul className="custom-list">
                        <li><strong>Horizon Campus:</strong> Offers a Ministry-approved B.Ed. (Hons) with paths in English and Early Childhood Education.</li>
                        <li><strong>SLIIT (Faculty of Humanities &amp; Sciences):</strong> Offers B.Ed. (Hons) in Social Sciences and English.</li>
                        <li><strong>Lyceum Campus:</strong> Specialized in Early Childhood and Primary Education training.</li>
                    </ul>
                    <p className="text-secondary mt-4" style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>
                        The path to a career in education in Sri Lanka is becoming more diverse, with specialized training available for both government and private sectors.
                    </p>
                </div>
            </div>

            {/* 3. NCoE Detailed Info */}
            <h2 className="section-title mt-10 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>3. Key Institute Details for 2026</h2>

            {/* NCoE / Vidyapeeta */}
            <div className="content-block mb-6">
                <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                    <Star size={22} /> 1. National Colleges of Education (NCoE / Vidyapeeta)
                </h3>
                <p className="text-secondary mb-4">
                    This is the primary route for government teaching. Admissions are handled by the Ministry of Education based on your A/L results.
                </p>
                <ul className="custom-list">
                    <li><strong>Current Status (2026):</strong> The term calendar for 2026 is already active, and recruitment notices for graduate teaching were issued in <strong>February 2026</strong>.</li>
                    <li><strong>Next Intake:</strong> A general call for "Student Teachers" (A/L leavers) usually follows the release of A/L results via the <strong>Government Gazette</strong>. It is highly recommended to check the Gazette every Friday.</li>
                    <li>
                        <strong>Contact for Information:</strong>
                        <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', marginBottom: '0.25rem' }}>
                                <Phone size={14} color="#2563eb" /> <strong>Ministry of Education (Isurupaya):</strong> +94 11 278 5141
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569' }}>
                                <Phone size={14} color="#2563eb" /> <strong>NCoE Branch:</strong> +94 11 278 4848 (Direct line for teacher training inquiries)
                            </li>
                        </ul>
                    </li>
                    <li><strong>Requirements Recap:</strong> 3 "S" passes in one sitting. For <strong>English medium</strong> courses, you typically need a "B" or "C" pass in O/L English.</li>
                </ul>
            </div>

            {/* Private Trainee Teacher Programs */}
            <div className="content-block mb-6">
                <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                    <Users size={22} /> 2. Private "Trainee Teacher" &amp; Diploma Programs
                </h3>
                <p className="text-secondary mb-6">
                    If you want to start working in international or private schools immediately, these institutes offer "Trainee" pathways where you study while gaining classroom experience.
                </p>

                <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Lyceum Campus */}
                    <div className="req-card">
                        <h4 className="font-bold text-lg mb-2" style={{ color: '#1e293b' }}>Lyceum Campus</h4>
                        <p className="text-sm text-secondary mb-3">Lyceum offers one of the most direct "study-to-work" pipelines in the country.</p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '0.5rem', color: '#475569', fontSize: '0.9rem' }}><strong style={{ color: '#1e293b' }}>Programs:</strong> Diplomas in Primary School Teaching, English Language Teaching, and Early Childhood Development.</li>
                            <li style={{ marginBottom: '0.5rem', color: '#475569', fontSize: '0.9rem' }}><strong style={{ color: '#1e293b' }}>Intakes:</strong> <span style={{ color: '#2563eb', fontWeight: 600 }}>March and September 2026</span>.</li>
                            <li style={{ marginBottom: '0.5rem', color: '#475569', fontSize: '0.9rem' }}><strong style={{ color: '#1e293b' }}>Location:</strong> Nugegoda, Gampaha, Wattala, Panadura, Ratnapura, and Kurunegala.</li>
                            <li style={{ color: '#475569', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <Phone size={13} color="#2563eb" /> +94 11 736 6200 / campus@lyceum.lk
                            </li>
                        </ul>
                    </div>

                    {/* Gateway Graduate School */}
                    <div className="req-card">
                        <h4 className="font-bold text-lg mb-2" style={{ color: '#1e293b' }}>Gateway Graduate School (GGS)</h4>
                        <p className="text-sm text-secondary mb-3">Gateway provides internationally recognized Pearson BTEC qualifications that are highly valued in the international school circuit.</p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '0.5rem', color: '#475569', fontSize: '0.9rem' }}><strong style={{ color: '#1e293b' }}>Programs:</strong> Pearson BTEC Level 4 &amp; 5 in Teaching and Learning.</li>
                            <li style={{ marginBottom: '0.5rem', color: '#475569', fontSize: '0.9rem' }}><strong style={{ color: '#1e293b' }}>Practical Edge:</strong> GGS often assists students with <strong>placements</strong> within the Gateway College network for their practical units.</li>
                            <li style={{ marginBottom: '0.5rem', color: '#475569', fontSize: '0.9rem' }}><strong style={{ color: '#1e293b' }}>Intakes:</strong> <span style={{ color: '#2563eb', fontWeight: 600 }}>January and October</span>.</li>
                            <li style={{ color: '#475569', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <Phone size={13} color="#2563eb" /> +94 11 269 5103 (Colombo) / +94 31 222 7722 (Negombo)
                            </li>
                        </ul>
                    </div>

                    {/* St. George */}
                    <div className="req-card">
                        <h4 className="font-bold text-lg mb-2" style={{ color: '#1e293b' }}>St. George International Teacher Training Institute</h4>
                        <p className="text-sm text-secondary mb-3">A leading institute for vocational teacher training, especially in the Gampaha/Negombo area.</p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '0.5rem', color: '#475569', fontSize: '0.9rem' }}><strong style={{ color: '#1e293b' }}>Focus:</strong> Globally recognized certifications for English teaching and Early Childhood education.</li>
                            <li style={{ color: '#475569', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <Phone size={13} color="#2563eb" /> +94 31 228 1174 / +94 77 790 9041
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Entry Requirements for 2026 Intakes */}
            <h2 className="section-title mt-10 mb-4" style={{ fontSize: '2rem', color: '#1e293b' }}>3. Entry Requirements for 2026 Intakes</h2>

            <div className="table-container mb-12">
                <table className="custom-table w-full">
                    <thead>
                        <tr>
                            <th>Institution</th>
                            <th>Program</th>
                            <th>Requirement</th>
                            <th>Next Intake</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>NCoE (Gazette)</strong></td>
                            <td>National Diploma in Teaching</td>
                            <td>3 A/L Passes (Specific Stream)</td>
                            <td>Call expected mid-2026</td>
                        </tr>
                        <tr>
                            <td><strong>Horizon Campus</strong></td>
                            <td>B.Ed. (Hons)</td>
                            <td>3 A/L Passes (Any Stream)</td>
                            <td><strong>February / October 2026</strong></td>
                        </tr>
                        <tr>
                            <td><strong>SLIIT</strong></td>
                            <td>B.Ed. in Social Sciences</td>
                            <td>3 A/L Passes + Aptitude Test</td>
                            <td><strong>September 2026</strong></td>
                        </tr>
                        <tr>
                            <td><strong>NIE (Maharagama)</strong></td>
                            <td>PG Diploma in Education</td>
                            <td>Graduate Degree (Any field)</td>
                            <td><strong>September 2026</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Entry Requirements & Immediate Steps placeholders */}
            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '2rem' }}>

                {/* Immediate Steps for School Leavers */}
                <div>
                    <h2 className="section-title mb-4" style={{ fontSize: '1.8rem', color: '#1e293b' }}>4. Immediate Steps for School Leavers</h2>
                    <p className="text-secondary mb-6">
                        If you are waiting for your results, you can start building your "Teaching Profile" now:
                    </p>
                    <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>1</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>TKT (Teaching Knowledge Test):</strong> Offered by the <strong>British Council</strong>, this is an internationally recognized certificate that proves you know <em>how</em> to teach English.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>2</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Diploma in Psychology &amp; Counselling:</strong> Many schools now look for teachers who understand student mental health. You can do a certificate at <strong>NIBM</strong> or <strong>SLIIT</strong>.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>3</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Montessori / Early Childhood Training:</strong> If you love working with small children, institutes like <strong>St. Nicholas</strong> or <strong>AMI</strong> offer prestigious diplomas.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>4</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Volunteer Tutoring:</strong> Start by helping younger students in your neighborhood or volunteering at a local community center. This counts as "Practical Experience" on your CV.
                            </span>
                        </li>
                    </ol>
                </div>

                {/* Why This Field is Unique */}
                <div>
                    <div className="content-block premium-card" style={{ height: '100%', borderTop: '4px solid #2563eb' }}>
                        <h3 className="flex items-center gap-2 mb-6" style={{ color: '#1e293b', fontSize: '1.5rem' }}>
                            <Globe size={24} color="#2563eb" />
                            5. Why This Field is Unique in Sri Lanka
                        </h3>
                        <ul className="custom-list space-y-4">
                            <li className="flex items-start gap-3">
                                <Star className="flex-shrink-0 mt-1" size={20} color="#2563eb" />
                                <div>
                                    <strong>Guaranteed Government Employment:</strong>
                                    <p className="text-sm text-secondary mt-1">Completing the NCoE National Diploma in Teaching guarantees a permanent teaching post in a government school — one of the most secure career starts available.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <TrendingUp className="flex-shrink-0 mt-1" size={20} color="#2563eb" />
                                <div>
                                    <strong>Booming International School Sector:</strong>
                                    <p className="text-sm text-secondary mt-1">Sri Lanka's international school network (Gateway, Lyceum, Overseas) is rapidly expanding. English-medium trained teachers command significantly higher salaries in this sector.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Globe className="flex-shrink-0 mt-1" size={20} color="#2563eb" />
                                <div>
                                    <strong>Global Teaching Opportunities:</strong>
                                    <p className="text-sm text-secondary mt-1">A BTEC or British Council TKT qualification opens doors to teaching posts in the Middle East (UAE, Qatar) and Southeast Asia with competitive tax-free salaries.</p>
                                </div>
                            </li>
                        </ul>
                        <div className="tip-box mt-6 p-4 rounded-lg" style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}>
                            <p className="text-sm font-medium m-0" style={{ color: '#1d4ed8' }}>
                                <span className="font-bold">💡 Key Tip:</span> Even volunteer Sunday school or tuition teaching experience counts as classroom hours for most private institute applications — start now!
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
                <p className="text-sm text-secondary mb-4">A practical roadmap for aspiring teachers and education professionals.</p>
                <div className="timeline-steps">
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>1</div>
                        <div className="step-content">
                            <strong>Now: Check the Government Gazette</strong>
                            <p className="text-sm text-secondary mt-1">Every Friday, check the Government Gazette (online at documents.gov.lk) for the NCoE "Student Teacher" call. These are announced shortly after A/L results are released.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>2</div>
                        <div className="step-content">
                            <strong>March / September 2026: Lyceum &amp; Gateway</strong>
                            <p className="text-sm text-secondary mt-1">Apply directly to Lyceum (March/September) or Gateway Graduate School (January/October) for their Trainee Teacher diploma programs. These are the fastest routes to employment.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>3</div>
                        <div className="step-content">
                            <strong>Get Your TKT Certification</strong>
                            <p className="text-sm text-secondary mt-1">Register for the British Council <strong>TKT (Teaching Knowledge Test)</strong> if you plan to teach English. It is a globally recognized certificate that boosts your salary significantly, especially in international schools.</p>
                        </div>
                    </div>
                    <div className="timeline-step" style={{ paddingBottom: 0, borderLeft: 'none' }}>
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>4</div>
                        <div className="step-content">
                            <strong>Build Classroom Experience Now</strong>
                            <p className="text-sm text-secondary mt-1">Volunteer at a Sunday school, tuition centre, or community program. Document these hours — they count as practical experience for NCoE and private institute applications.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-secondary italic mb-4">Education: the most impactful career you can choose — shaping the minds that will shape Sri Lanka's future.</p>

            </div>
        </div>
    );
};

export default EducationContent;
