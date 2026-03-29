import React from 'react';
import { Stethoscope, Scale, BarChart3, AlertTriangle, Clock, Globe, TrendingUp, Shield, BookOpen } from 'lucide-react';
import './CareerFields.css';

const KnowledgeBasedContent: React.FC = () => {
    return (
        <div className="tech-computing-extended">

            {/* 1. The Primary "Knowledge" Pillars */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>1. The Primary "Knowledge" Pillars</h2>
            <div className="grid-3-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                {/* Medicine MBBS */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#fef2f2', color: '#ef4444' }}>
                            <Stethoscope size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Medicine (MBBS)</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>The Role:</strong> Diagnosing and treating human illness. It requires deep expertise in biology, chemistry, and clinical ethics.</li>
                        <li><strong>The License:</strong> To practice in Sri Lanka, you must be registered with the <strong>Sri Lanka Medical Council (SLMC)</strong>.</li>
                        <li><strong>The Requirement:</strong> 3 "S" passes in the <strong>Biology Stream</strong> (Bio, Physics, Chemistry). Entry to state universities is extremely competitive (high Z-scores).</li>
                    </ul>
                </div>

                {/* Law LLB */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                            <Scale size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Law (LLB / Attorney-at-Law)</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>The Role:</strong> Interpreting the law to protect rights, draft contracts, or argue cases in court.</li>
                        <li><strong>The License:</strong> Regardless of where you get your degree (LLB), you <strong>must</strong> pass the Sri Lanka Law College examinations to become an <strong>Attorney-at-Law</strong>.</li>
                        <li><strong>The Requirement:</strong> 3 "S" passes in any stream (Arts and Commerce are common). You must also pass the Law College Entrance Exam.</li>
                    </ul>
                </div>

                {/* Chartered Accountancy */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#f0fdf4', color: '#22c55e' }}>
                            <BarChart3 size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Chartered Accountancy / Finance</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>The Role:</strong> Strategic financial management and auditing. Unlike general business roles, "Chartered" status gives you the legal authority to sign off on company audits.</li>
                        <li><strong>The License:</strong> Membership in <strong>CA Sri Lanka</strong>, <strong>CIMA</strong>, or <strong>ACCA</strong>.</li>
                        <li><strong>The Requirement:</strong> Can be started after O/Ls or A/Ls (Commerce stream is standard but not mandatory).</li>
                    </ul>
                </div>
            </div>

            {/* 2. Where to Study */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>2. Where to Study (2026 Intakes &amp; Routes)</h2>

            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                {/* Law: Two-Gate System */}
                <div className="content-block">
                    <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <Scale size={22} /> A. Law: The Two-Gate System
                    </h3>
                    <p className="text-secondary mb-4" style={{ fontSize: '0.9rem' }}>
                        In Sri Lanka, you can enter the legal profession through two main gates:
                    </p>
                    <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                            <span style={{ minWidth: '1.5rem', height: '1.5rem', borderRadius: '50%', backgroundColor: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>1</span>
                            <span style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>State University (LLB):</strong> Universities of Colombo, Peradeniya, and Jaffna offer the LLB. These require very high Z-scores.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                            <span style={{ minWidth: '1.5rem', height: '1.5rem', borderRadius: '50%', backgroundColor: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>2</span>
                            <div style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Sri Lanka Law College (Entrance Exam):</strong> You can apply directly for the <strong>2026 General Entrance Examination</strong>.
                                <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0.4rem' }}>
                                    <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.3rem', color: '#475569', fontSize: '0.9rem' }}>
                                        <span style={{ color: '#ef4444', fontWeight: 700 }}>⚠</span>
                                        <span><strong>Deadline Alert:</strong> Applications typically open in <strong>March 2026</strong>.</span>
                                    </li>
                                    <li style={{ display: 'flex', gap: '0.5rem', color: '#475569', fontSize: '0.9rem' }}>
                                        <span style={{ color: '#3b82f6', fontWeight: 700 }}>→</span>
                                        <span><strong>Criteria:</strong> 2 Credit passes and 1 Simple pass at A/Ls, plus Credit passes in English and Sinhala/Tamil at O/Ls.</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                            <span style={{ minWidth: '1.5rem', height: '1.5rem', borderRadius: '50%', backgroundColor: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>3</span>
                            <span style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Private LLB:</strong> Institutes like <strong>SLIIT (LLB Hons)</strong>, <strong>CfPS Law School (University of London)</strong>, and <strong>Horizon Campus</strong> offer degrees that allow you to skip the Law College entrance exam and go directly to the "Law College Finals."
                            </span>
                        </li>
                    </ol>
                </div>

                {/* Medicine: State vs. Private */}
                <div className="content-block">
                    <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <Stethoscope size={22} /> B. Medicine: State vs. Private
                    </h3>
                    <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                            <span style={{ minWidth: '1.5rem', height: '1.5rem', borderRadius: '50%', backgroundColor: '#ef4444', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>1</span>
                            <span style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>State Medical Faculties:</strong> Managed by the UGC. Free education but requires top-tier A/L results.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                            <span style={{ minWidth: '1.5rem', height: '1.5rem', borderRadius: '50%', backgroundColor: '#ef4444', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>2</span>
                            <div style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>General Sir John Kotelawala Defence University (KDU):</strong> A great option for "Day Scholars" (self-funded) or Cadets.
                                <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0.4rem' }}>
                                    <li style={{ display: 'flex', gap: '0.5rem', color: '#475569', fontSize: '0.9rem' }}>
                                        <span style={{ color: '#ef4444', fontWeight: 700 }}>⚠</span>
                                        <span><strong>Note for 2026:</strong> KDU's MBBS for local day scholars has specific restrictions — always check the latest Gazette for eligibility.</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                            <span style={{ minWidth: '1.5rem', height: '1.5rem', borderRadius: '50%', backgroundColor: '#ef4444', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>3</span>
                            <div style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Foreign Medical Degrees:</strong> Many Sri Lankans study in Belarus, China, or Nepal.
                                <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0.4rem' }}>
                                    <li style={{ display: 'flex', gap: '0.5rem', color: '#475569', fontSize: '0.9rem' }}>
                                        <span style={{ color: '#ef4444', fontWeight: 700 }}>⚠</span>
                                        <span><strong>Critical Step:</strong> You must pass the <strong>ERPM (Examination to Register to Practise Medicine)</strong> in Sri Lanka after returning to get your license.</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>

            {/* 3. Entry Requirements Summary 2026 */}
            <h2 className="section-title mt-10 mb-4" style={{ fontSize: '2rem', color: '#1e293b' }}>3. Entry Requirements Summary (2026)</h2>

            <div className="table-container mb-12">
                <table className="custom-table w-full">
                    <thead>
                        <tr>
                            <th>Field</th>
                            <th>Minimum Qualification</th>
                            <th>Key Governing Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Doctor</strong></td>
                            <td>3 "S" passes (Biology/Physics/Chemistry)</td>
                            <td>SLMC (Medical Council)</td>
                        </tr>
                        <tr>
                            <td><strong>Lawyer</strong></td>
                            <td>2 "C" and 1 "S" (Any stream)</td>
                            <td>CLE (Council of Legal Education)</td>
                        </tr>
                        <tr>
                            <td><strong>Chartered Accountant</strong></td>
                            <td>3 "S" passes (Any stream)</td>
                            <td>CA Sri Lanka / ICASL</td>
                        </tr>
                        <tr>
                            <td><strong>Veterinary Surgeon</strong></td>
                            <td>3 "S" passes (Bio Stream)</td>
                            <td>VSLBC</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* 4. Immediate Steps + Why Unique */}
            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '2rem' }}>

                {/* Knowledge Bridge */}
                <div>
                    <h2 className="section-title mb-4" style={{ fontSize: '1.8rem', color: '#1e293b' }}>
                        4. Immediate Steps (The "Knowledge Bridge")
                    </h2>
                    <p className="text-secondary mb-6">
                        If you are committed to this path, use your gap months to build your foundational knowledge:
                    </p>
                    <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>1</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Law College Entrance Coaching:</strong> If you are aiming for Law College, enroll in a "Law Entrance" class (e.g., at <strong>CfPS</strong> or <strong>BCAS</strong>) to master the "General Intelligence" and "General Knowledge" papers.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>2</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Foundation in Science:</strong> For those aiming for private medical/allied health degrees, institutes like <strong>IIHS</strong> or <strong>Amrak</strong> offer 6-month science foundations.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>3</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Professional English:</strong> In Law and Medicine, your vocabulary is your tool. Consider a "Legal English" or "English for Healthcare" certificate at the <strong>British Council</strong>.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>4</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Internship / Job Shadowing:</strong> Ask a family lawyer or a local clinic if you can observe for a week. Seeing the "real life" of these professionals is the best way to decide if the long study path is for you.
                            </span>
                        </li>
                    </ol>
                </div>

                {/* Why This Field is Unique */}
                <div>
                    <div className="content-block premium-card" style={{ height: '100%', borderTop: '4px solid #3b82f6' }}>
                        <h3 className="flex items-center gap-2 mb-6" style={{ color: '#1e293b', fontSize: '1.5rem' }}>
                            <Globe size={24} color="#3b82f6" />
                            5. Why This Field is Unique in Sri Lanka
                        </h3>
                        <ul className="custom-list space-y-4">
                            <li className="flex items-start gap-3">
                                <Shield className="flex-shrink-0 mt-1" size={20} color="#3b82f6" />
                                <div>
                                    <strong>Legally Protected Titles:</strong>
                                    <p className="text-sm text-secondary mt-1">Only SLMC-registered Doctors, CLE-recognized Attorneys, and CA Sri Lanka members can legally practice in their fields. This grants enormous professional security and status.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <TrendingUp className="flex-shrink-0 mt-1" size={20} color="#3b82f6" />
                                <div>
                                    <strong>Highest Earning Potential Long-Term:</strong>
                                    <p className="text-sm text-secondary mt-1">While the path is long, Doctors, Lawyers, and Chartered Accountants in private practice are among the highest earners in Sri Lanka — with almost unlimited income potential.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <BookOpen className="flex-shrink-0 mt-1" size={20} color="#3b82f6" />
                                <div>
                                    <strong>Global Recognition:</strong>
                                    <p className="text-sm text-secondary mt-1">CA Sri Lanka, CIMA, and ACCA qualifications are globally recognized. Sri Lankan Doctors and Lawyers regularly practise in the UK, Australia, and Canada after further licensing.</p>
                                </div>
                            </li>
                        </ul>
                        <div className="tip-box mt-6 p-4 rounded-lg" style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca' }}>
                            <p className="text-sm font-medium m-0 flex gap-2" style={{ color: '#991b1b' }}>
                                <AlertTriangle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                                <span><strong>Critical Warning:</strong> Never pay for a degree or diploma not recognized by <strong>SLMC</strong>, <strong>CLE</strong>, or <strong>CA Sri Lanka</strong>. Always verify accreditation before enrolling in any Knowledge-Based program.</span>
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
                <p className="text-sm text-secondary mb-4">A practical roadmap for aspiring Doctors, Lawyers, and Chartered Professionals.</p>
                <div className="timeline-steps">
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>1</div>
                        <div className="step-content">
                            <strong>Now: Shadow a Professional</strong>
                            <p className="text-sm text-secondary mt-1">Contact a family lawyer, doctor, or accountant and ask to observe their work for even just a few days. This firsthand exposure is the best way to confirm your commitment to a 4–6 year study path.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>2</div>
                        <div className="step-content">
                            <strong>March 2026: Law College Applications Open</strong>
                            <p className="text-sm text-secondary mt-1">If targeting Law College, applications for the 2026 General Entrance Examination typically open in March. Enroll in a Law Entrance coaching class at CfPS or BCAS immediately to prepare for the General Intelligence and General Knowledge papers.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>3</div>
                        <div className="step-content">
                            <strong>Build English &amp; Foundation Skills</strong>
                            <p className="text-sm text-secondary mt-1">Register for a British Council "Legal English" or "English for Healthcare" certificate. If targeting private medicine without Science A/Ls, apply for the 6-month Foundation in Science at IIHS or Amrak.</p>
                        </div>
                    </div>
                    <div className="timeline-step" style={{ paddingBottom: 0, borderLeft: 'none' }}>
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>4</div>
                        <div className="step-content">
                            <strong>UGC Application (Medicine / LLB)</strong>
                            <p className="text-sm text-secondary mt-1">Apply through the UGC portal for state Medicine or Law programs once the 2025/2026 handbook is released. For Chartered Accountancy, register directly with CA Sri Lanka or CIMA — no Z-score required to begin the professional qualification route.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-secondary italic mb-4">Knowledge-Based careers: the longest path, but among the most respected and rewarding in Sri Lanka.</p>
            </div>
        </div>
    );
};

export default KnowledgeBasedContent;
