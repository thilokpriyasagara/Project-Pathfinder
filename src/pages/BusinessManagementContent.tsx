import React from 'react';
import { Users, PieChart, Target, GraduationCap, Building2, Calendar, Award, CheckCircle2, Clock } from 'lucide-react';
import './CareerFields.css';

const BusinessManagementContent: React.FC = () => {
    return (
        <div className="tech-computing-extended">
            {/* 1. The Career Paths */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>1. The Career Paths</h2>
            <div className="grid-3-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                            <Users size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Human Resources (HR) Manager</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "people experts." They handle hiring, training employees, managing salaries, and ensuring the workplace is a happy and productive environment.</li>
                        <li><strong>In Sri Lanka:</strong> You would work with local labor laws and help build company culture.</li>
                        <li><strong>Key Skills:</strong> Communication, empathy, and conflict resolution.</li>
                    </ul>
                </div>

                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#f0fdf4', color: '#22c55e' }}>
                            <PieChart size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Accountant / Financial Controller</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "money gatekeepers." They record every rupee that enters or leaves a company, prepare tax documents, and help the CEO decide where to invest money.</li>
                        <li><strong>In Sri Lanka:</strong> This is a very prestigious path with a clear route to high-level "C-suite" roles (like a CFO).</li>
                        <li><strong>Key Skills:</strong> Attention to detail, mathematical logic, and ethics.</li>
                    </ul>
                </div>

                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#fef2f2', color: '#ef4444' }}>
                            <Target size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Business Development Manager (BDM)</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "growth engines." A BDM looks for new markets, finds new customers, and forms partnerships to increase the company's revenue.</li>
                        <li><strong>In Sri Lanka:</strong> Very common in the export, tourism, and tech sectors.</li>
                        <li><strong>Key Skills:</strong> Negotiation, strategic thinking, and "sales-mindedness."</li>
                    </ul>
                </div>
            </div>

            {/* 2. Professional Qualifications (The "Fast Track") */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>2. Professional Qualifications (The "Fast Track")</h2>
            <p className="text-secondary text-lg mb-6">In Sri Lanka, many students do these alongside their degree (or instead of one) because they are globally recognized and highly valued by employers.</p>

            <div className="table-container mb-12">
                <table className="custom-table w-full">
                    <thead>
                        <tr>
                            <th style={{ width: '25%' }}>Qualification</th>
                            <th style={{ width: '30%' }}>Focus</th>
                            <th>Best For...</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>CIMA (UK)</strong></td>
                            <td>Management Accounting</td>
                            <td>Students who want to be Business Leaders or Managers.</td>
                        </tr>
                        <tr>
                            <td><strong>ACCA (UK)</strong></td>
                            <td>Financial Accounting</td>
                            <td>Students who want to be Professional Accountants or Auditors.</td>
                        </tr>
                        <tr>
                            <td><strong>CA Sri Lanka</strong></td>
                            <td>Chartered Accounting</td>
                            <td>The "gold standard" for local accounting and auditing roles.</td>
                        </tr>
                        <tr>
                            <td><strong>CIPM</strong></td>
                            <td>Human Resources</td>
                            <td>The primary body in Sri Lanka for becoming a Chartered HR professional.</td>
                        </tr>
                        <tr>
                            <td><strong>CIM (UK)</strong></td>
                            <td>Marketing</td>
                            <td>For those interested in Business Development and Brand Management.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* 3. Where to Study in Sri Lanka */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>3. Where to Study in Sri Lanka</h2>
            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                <div className="content-block">
                    <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <Building2 size={24} /> A. State Universities (UGC Approved)
                    </h3>
                    <p className="text-secondary mb-4">These require high Z-scores, usually from the <strong>Commerce Stream</strong>:</p>
                    <ul className="custom-list">
                        <li><strong>University of Sri Jayewardenepura:</strong> Known for having the best Management faculty in the country (FMSC).</li>
                        <li><strong>University of Colombo:</strong> Offers highly competitive BBA (Bachelor of Business Administration) programs.</li>
                        <li><strong>University of Kelaniya:</strong> Famous for Finance and Accountancy degrees.</li>
                    </ul>
                </div>
                <div className="content-block">
                    <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <GraduationCap size={24} /> B. Private Institutes
                    </h3>
                    <p className="text-secondary mb-4">These offer degrees from top UK or Australian universities and are excellent for networking:</p>
                    <ul className="custom-list">
                        <li><strong>SLIIT (Business School):</strong> Offers BBA degrees with specializations in HR, Marketing, and Logistics.</li>
                        <li><strong>IIT / APIIT:</strong> Great for "Business Management" or "Business Data Analytics" with a focus on the modern tech-driven world.</li>
                        <li><strong>NSBM Green University:</strong> Offers a wide variety of management degrees in a modern campus environment.</li>
                        <li><strong>Royal Institute (RIC):</strong> Offers University of London degrees (LSE academic direction) which are very prestigious.</li>
                    </ul>
                </div>
            </div>

            <h4 className="mb-4 text-xl font-bold flex items-center gap-2" style={{ color: '#1e293b', marginTop: '3rem' }}>
                <Calendar size={24} color="#8b5cf6" /> 1. CIMA 2026: Key Dates & Deadlines
            </h4>
            <p className="text-secondary mb-4">
                In Sri Lanka, CIMA has four main "Case Study" exam windows. Professional colleges like <strong>Wisdom Business Academy</strong> and <strong>Achievers</strong> usually start their intakes 3-4 months before these dates.
            </p>
            <div className="table-container mb-6">
                <table className="custom-table w-full">
                    <thead>
                        <tr>
                            <th>Exam Window</th>
                            <th>Scheduling Deadline</th>
                            <th>Exam Dates</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>May 2026</strong></td>
                            <td>21 April 2026</td>
                            <td>06 - 08 May 2026</td>
                        </tr>
                        <tr>
                            <td><strong>August 2026</strong></td>
                            <td>21 July 2026</td>
                            <td>05 - 07 August 2026</td>
                        </tr>
                        <tr>
                            <td><strong>November 2026</strong></td>
                            <td>20 October 2026</td>
                            <td>04 - 06 November 2026</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="tip-box mb-12 p-4 rounded-lg bg-blue-50 border border-blue-100">
                <p className="text-sm text-blue-800 font-medium m-0 flex gap-2">
                    <span className="font-bold">Registration:</span> New students can register anytime, but it is best to register by <strong>late February or early March</strong> to join the May exam cycle.
                </p>
            </div>

            <h4 className="mb-4 text-xl font-bold flex items-center gap-2" style={{ color: '#1e293b', marginTop: '3rem' }}>
                <Award size={24} color="#3b82f6" /> 2. University of Sri Jayewardenepura (USJ) Requirements
            </h4>
            <p className="text-secondary mb-6">
                The Faculty of Management Studies and Commerce (FMSC) is highly competitive. Admission for the <strong>Internal (Full-time)</strong> degree is handled by the UGC based on A/L results.
            </p>

            <div className="entry-reqs-details grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                <div className="req-card">
                    <h4 className="font-bold text-lg mb-3" style={{ color: '#2563eb' }}>Internal Degree (BSc Hons) Requirements</h4>
                    <ul className="text-sm custom-list">
                        <li><strong>A/L Stream:</strong> Primarily the <strong>Commerce Stream</strong> (Business Studies, Economics, and Accounting).</li>
                        <li><strong>Minimum Result:</strong> 3 "S" passes in one sitting + a minimum of 30% for the Common General Paper.</li>
                        <li><strong>Z-Score Expectation:</strong> This is the most important factor. For the 2024/2025 intake (most recent data), the minimum Z-score for "Business Administration" in the Colombo district was approximately <strong>1.8 - 2.0+</strong>. This varies significantly by district (e.g., lower scores are required for rural districts).</li>
                    </ul>
                </div>
                <div className="req-card">
                    <h4 className="font-bold text-lg mb-3" style={{ color: '#2563eb' }}>External Degree (BSc Business Studies) Requirements</h4>
                    <p className="text-sm text-secondary mb-3">If you do not meet the high Z-score for the internal program, USJ offers an excellent <strong>External Degree</strong> that is highly valued by employers.</p>
                    <ul className="text-sm custom-list">
                        <li><strong>A/L Requirement:</strong> 3 "C" passes in one sitting.</li>
                        <li><strong>Subjects:</strong> Must include at least one from: Accounting, Business Studies, Economics, Mathematics, or ICT.</li>
                        <li><strong>Age:</strong> Must be at least 18 years old.</li>
                    </ul>
                </div>
            </div>

            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '2rem' }}>
                {/* Immediate Steps */}
                <div>
                    <h2 className="section-title mb-6" style={{ fontSize: '1.8rem', color: '#1e293b' }}>4. Immediate Steps You Can Take Now</h2>
                    <ul className="custom-list space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="flex-shrink-0 mt-1" size={20} color="#2563eb" />
                            <div>
                                <strong>1. Register for CIMA or ACCA:</strong>
                                <p className="text-sm text-secondary mt-1">You can start the "Foundation" level right after O/Ls or A/Ls. It gives you a head start before university.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="flex-shrink-0 mt-1" size={20} color="#2563eb" />
                            <div>
                                <strong>2. CIPM Foundation:</strong>
                                <p className="text-sm text-secondary mt-1">If you like HR, you can enroll in the "Foundation Course in HRM" at CIPM.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="flex-shrink-0 mt-1" size={20} color="#2563eb" />
                            <div>
                                <strong>3. Learn Microsoft Excel:</strong>
                                <p className="text-sm text-secondary mt-1">In the business world, Excel is your best friend. Take a 2-week course at NIBM or follow a YouTube tutorial.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="flex-shrink-0 mt-1" size={20} color="#2563eb" />
                            <div>
                                <strong>4. English for Business:</strong>
                                <p className="text-sm text-secondary mt-1">Communication is the most important skill in management. Working on your spoken and written English will double your hiring chances.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Gap Year Plan */}
                <div>
                    <div className="content-block premium-card" style={{ height: '100%', borderTop: '4px solid #8b5cf6' }}>
                        <h3 className="flex items-center gap-2 mb-6" style={{ color: '#1e293b', fontSize: '1.5rem' }}>
                            <Clock size={24} color="#8b5cf6" />
                            3. Recommended "Bridge" Timeline
                        </h3>
                        <p className="text-sm text-secondary mb-4">A practical action plan for your 2026 academic year.</p>

                        <div className="timeline-steps">
                            <div className="timeline-step">
                                <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>1</div>
                                <div className="step-content">
                                    <strong>March 2026</strong>
                                    <p className="text-sm text-secondary mt-1">Enroll in the CIMA Certificate Level at a local college (classes usually start in March for new leavers).</p>
                                </div>
                            </div>
                            <div className="timeline-step">
                                <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>2</div>
                                <div className="step-content">
                                    <strong>April 2026</strong>
                                    <p className="text-sm text-secondary mt-1">Apply for your UGC University Admission (online) once the 2025/2026 handbook is released.</p>
                                </div>
                            </div>
                            <div className="timeline-step">
                                <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>3</div>
                                <div className="step-content">
                                    <strong>May - June 2026</strong>
                                    <p className="text-sm text-secondary mt-1">Complete a Computerized Accounting (QuickBooks/Tally) course at NIBM or a local institute.</p>
                                </div>
                            </div>
                            <div className="timeline-step" style={{ paddingBottom: 0, borderLeft: 'none' }}>
                                <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>4</div>
                                <div className="step-content">
                                    <strong>Late 2026</strong>
                                    <p className="text-sm text-secondary mt-1">Start your University degree (Internal or External) while continuing CIMA on the weekends.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="highlight-box mt-4" style={{ backgroundColor: '#f8fafc', borderLeft: '4px solid #3b82f6', padding: '1.5rem', borderRadius: '0 8px 8px 0', marginBottom: '3rem' }}>
                <p style={{ margin: 0, lineHeight: 1.6, color: '#475569' }}>
                    <strong style={{ color: '#1e293b' }}>Pro Tip:</strong> Many top business students in Sri Lanka pursue "CIMA + State Degree" simultaneously. This "Dual Qualification" makes you a top-tier candidate for jobs in multinational companies like Unilever, Nestle, or John Keells.
                </p>
            </div>


        </div>
    );
};

export default BusinessManagementContent;
