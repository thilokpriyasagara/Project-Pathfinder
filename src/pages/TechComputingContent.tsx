import React from 'react';
import { MonitorPlay, Shield, Database, Award, Briefcase, Clock, Globe, TrendingUp } from 'lucide-react';
import './CareerFields.css';

const TechComputingContent: React.FC = () => {
    return (
        <div className="tech-computing-extended">
            {/* 1. The Career Paths */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>1. The Career Paths</h2>
            <div className="grid-3-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                            <MonitorPlay size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Software Developer</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "builders." They write code to create everything from the apps on your phone (like PickMe or Helakuru) to complex systems used by banks.</li>
                        <li><strong>Key Skills:</strong> Logic, problem-solving, and languages like <strong>Python, Java, or JavaScript</strong>.</li>
                        <li><strong>Career Ladder:</strong> Trainee &rarr; Associate Software Engineer &rarr; Senior Engineer &rarr; Tech Lead.</li>
                    </ul>
                </div>

                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#fef2f2', color: '#ef4444' }}>
                            <Shield size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Cybersecurity Analyst</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "digital police." Their job is to protect a company's data from hackers and ensure that systems are unhackable.</li>
                        <li><strong>Key Skills:</strong> Networking, ethical hacking, and understanding how "bad actors" think.</li>
                        <li><strong>Career Ladder:</strong> SOC Analyst &rarr; Ethical Hacker &rarr; Security Architect.</li>
                    </ul>
                </div>

                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#f0fdf4', color: '#22c55e' }}>
                            <Database size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Data Scientist</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "detectives." They look at massive amounts of data to find patterns. For example, analyzing sales to predict what items people will buy during Sinhala & Hindu New Year.</li>
                        <li><strong>Key Skills:</strong> Mathematics, Statistics, and tools like <strong>R or Python</strong>.</li>
                        <li><strong>Career Ladder:</strong> Data Analyst &rarr; Data Scientist &rarr; AI Specialist.</li>
                    </ul>
                </div>
            </div>

            {/* 2. Where to Study in Sri Lanka */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>2. Where to Study in Sri Lanka</h2>
            <p className="text-secondary text-lg mb-6">You have two main routes: the State (Government) University route and the Private/Professional route.</p>

            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                <div className="content-block">
                    <h3 className="mb-4" style={{ color: '#2563eb' }}>A. State Universities (UGC Approved)</h3>
                    <p className="text-secondary mb-4">If you have high Z-scores in your A/Ls (usually Physical Science or ICT streams), these are the gold standards:</p>
                    <ul className="custom-list">
                        <li><strong>University of Moratuwa (UOM):</strong> Faculty of IT and Computer Science & Engineering.</li>
                        <li><strong>University of Colombo School of Computing (UCSC):</strong> Famous for its Computer Science and the <strong>BIT (Bachelor of Information Technology)</strong> external degree.</li>
                        <li><strong>University of Sri Jayewardenepura:</strong> Offers specialized degrees in Software Engineering and Computer Science.</li>
                    </ul>
                </div>
                <div className="content-block">
                    <h3 className="mb-4" style={{ color: '#2563eb' }}>B. Private Institutes & Foreign Affiliates</h3>
                    <p className="text-secondary mb-4">These are excellent if you want to start immediately after school or if you didn't do the "required" A/L stream for state tech degrees:</p>
                    <ul className="custom-list">
                        <li><strong>SLIIT:</strong> The largest private IT degree provider (offers specialized paths in Cybersecurity and Data Science).</li>
                        <li><strong>IIT (Informatics Institute of Technology):</strong> Known for its "Industrial Placement" where you work in a company for a full year while studying.</li>
                        <li><strong>NSBM / NIBM:</strong> Offer various degrees in Software Engineering and Data Science.</li>
                        <li><strong>Curtin Colombo:</strong> Offers Australian degrees in Cybersecurity and Computing.</li>
                    </ul>
                </div>
            </div>

            <h4 className="mb-4 text-xl font-bold" style={{ color: '#1e293b', marginTop: '3rem' }}>Entry Requirements Comparison</h4>
            <div className="table-container mb-12">
                <table className="custom-table w-full">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>UCSC (BIT - External)</th>
                            <th>SLIIT (BSc IT)</th>
                            <th>State Uni (Internal)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>A/L Stream</strong></td>
                            <td>Any Stream</td>
                            <td>Any Stream</td>
                            <td>Mostly Maths/Tech</td>
                        </tr>
                        <tr>
                            <td><strong>Passes Needed</strong></td>
                            <td>3 "S" Passes</td>
                            <td>3 "S" Passes</td>
                            <td>3 "S" Passes + High Z-score</td>
                        </tr>
                        <tr>
                            <td><strong>Selection</strong></td>
                            <td>Open Entry</td>
                            <td>Aptitude Test</td>
                            <td>UGC Merit/District Basis</td>
                        </tr>
                        <tr>
                            <td><strong>Flexibility</strong></td>
                            <td>Self-study / Private classes</td>
                            <td>Full-time / Weekends</td>
                            <td>Full-time</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="entry-reqs-details grid-3-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                <div className="req-card">
                    <h4 className="font-bold text-lg mb-3">1. UCSC: BIT (External)</h4>
                    <p className="text-sm text-secondary mb-3">The BIT is an <strong>external degree</strong>, meaning you don't need a high Z-score to get in, but exams are conducted by Univ. of Colombo.</p>
                    <ul className="text-sm">
                        <li><strong>A/L:</strong> Minimum 3 "S" passes in any stream.</li>
                        <li><strong>O/L:</strong> At least 6 passes with 3 Credits, including Maths & English.</li>
                        <li><strong>Alternative:</strong> FIT (Foundation in IT) program at UCSC if you lack A/Ls.</li>
                    </ul>
                </div>
                <div className="req-card">
                    <h4 className="font-bold text-lg mb-3">2. SLIIT: BSc (Hons) in IT</h4>
                    <p className="text-sm text-secondary mb-3">Top choice for Cybersecurity, Data Science, or Software Eng.</p>
                    <ul className="text-sm">
                        <li><strong>Standard Entry:</strong> 3 "S" passes in any stream.</li>
                        <li><strong>Math "Catch":</strong> Arts/Commerce stream students need "C" for O/L Maths + 4-week bridging program.</li>
                        <li><strong>Aptitude Test:</strong> Covers Analytical, Logical, English skills.</li>
                    </ul>
                </div>
                <div className="req-card">
                    <h4 className="font-bold text-lg mb-3">3. State Universities (Internal)</h4>
                    <p className="text-sm text-secondary mb-3">Admission is handled by the UGC based on Z-scores.</p>
                    <ul className="text-sm">
                        <li><strong>UCSC (CS):</strong> Usually requires Combined Maths stream. Very competitive.</li>
                        <li><strong>UoM (BSc IT):</strong> "C" grade or higher in Higher Maths, Combined Maths, or Maths.</li>
                        <li><strong>The "S" Rule:</strong> Must have at least 3 "S" passes and minimum 30% for Common General Paper.</li>
                    </ul>
                </div>
            </div>

            {/* 3. Immediate Steps After School */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>3. Immediate Steps After School (The "Bridge" Courses)</h2>
            <p className="text-secondary text-lg mb-6">If you are waiting for A/L results or have just finished, don't wait 4 years to start. You can do "Foundation" or "Diploma" courses to get a head start:</p>
            <div className="table-container mb-12">
                <table className="custom-table w-full">
                    <thead>
                        <tr>
                            <th style={{ width: '25%' }}>Goal</th>
                            <th>Recommended Course/Certificate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Get Hired Fast</strong></td>
                            <td><strong>TechBee by HCLTech:</strong> A program for A/L leavers where they train you and give you a job immediately.</td>
                        </tr>
                        <tr>
                            <td><strong>Basic IT Skills</strong></td>
                            <td><strong>DIT (Diploma in IT)</strong> at Wayamba University, SLIIT, or NIBM.</td>
                        </tr>
                        <tr>
                            <td><strong>Cybersecurity</strong></td>
                            <td><strong>CCNA (Cisco Certified Network Associate)</strong> or <strong>CEH (Certified Ethical Hacker)</strong> at ATN Campus or CICRA.</td>
                        </tr>
                        <tr>
                            <td><strong>Software Dev</strong></td>
                            <td><strong>Python for Beginners</strong> at various institutes (ESOFT, IIT) or free online (Coursera/freeCodeCamp).</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="highlight-box" style={{ backgroundColor: '#f8fafc', borderLeft: '4px solid #3b82f6', padding: '1.5rem', borderRadius: '0 8px 8px 0', marginBottom: '3rem' }}>
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2" style={{ color: '#1e293b' }}>
                    <Award size={24} color="#3b82f6" />
                    Specialized Entry Programs
                </h3>
                <p style={{ margin: 0, lineHeight: 1.6, color: '#475569' }}>
                    <strong>HCLTech TechBee:</strong> This is a unique "Early Career Program" in Sri Lanka. They recruit A/L leavers, train them for 12 months in Software Engineering or IT, and provide a job at HCLTech immediately after. It's a great way to "earn while you learn."
                </p>
            </div>

            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '2rem' }}>
                {/* 4. Why this field is Future-Proof */}
                <div>
                    <h2 className="section-title mb-6" style={{ fontSize: '1.8rem', color: '#1e293b' }}>4. Why this field is "Future-Proof"</h2>
                    <ul className="custom-list space-y-4">
                        <li className="flex items-start gap-3">
                            <Globe className="flex-shrink-0 mt-1" size={20} color="#2563eb" />
                            <div>
                                <strong>Remote Work:</strong>
                                <p className="text-sm text-secondary mt-1">You can live in Kandy or Matara and work for a company in London or New York.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <TrendingUp className="flex-shrink-0 mt-1" size={20} color="#2563eb" />
                            <div>
                                <strong>High Salaries:</strong>
                                <p className="text-sm text-secondary mt-1">Entry-level trainees/interns often start around LKR 50,000 - 80,000. Junior engineers earn LKR 120,000+ within 1-2 years.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Briefcase className="flex-shrink-0 mt-1" size={20} color="#2563eb" />
                            <div>
                                <strong>Global Demand:</strong>
                                <p className="text-sm text-secondary mt-1">Universally recognized skills if you ever wish to migrate or work abroad.</p>
                            </div>
                        </li>
                    </ul>

                    <div className="tip-box mt-6 p-4 rounded-lg bg-blue-50 border border-blue-100">
                        <p className="text-sm text-blue-800 font-medium m-0 flex gap-2">
                            <span className="font-bold">Tip:</span> Your portfolio (what you have built) is often more important than your degree. Start a GitHub account and practice coding even while you study!
                        </p>
                    </div>
                </div>

                {/* Gap Year Plan */}
                <div>
                    <div className="content-block premium-card" style={{ height: '100%', borderTop: '4px solid #8b5cf6' }}>
                        <h3 className="flex items-center gap-2 mb-6" style={{ color: '#1e293b', fontSize: '1.5rem' }}>
                            <Clock size={24} color="#8b5cf6" />
                            6-Month "Gap Year" Plan
                        </h3>
                        <p className="text-sm text-secondary mb-4">While you wait for results, completing certifications puts you ahead of the competition.</p>

                        <div className="timeline-steps">
                            <div className="timeline-step">
                                <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>1</div>
                                <div className="step-content">
                                    <strong>Month 1-2: Foundation</strong>
                                    <p className="text-sm text-secondary mt-1">Complete CS50 (Online) and a Certificate in English for IT to get comfortable with professional terminology.</p>
                                </div>
                            </div>
                            <div className="timeline-step">
                                <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>2</div>
                                <div className="step-content">
                                    <strong>Month 3-4: Pick a Path</strong>
                                    <p className="text-sm text-secondary mt-1">If you like coding, start a Java or Python course. If you like hardware/security, start CCNA.</p>
                                </div>
                            </div>
                            <div className="timeline-step">
                                <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>3</div>
                                <div className="step-content">
                                    <strong>Month 5-6: Build Projects</strong>
                                    <p className="text-sm text-secondary mt-1">Build a small project (personal website, simple calculator) and create a LinkedIn profile to showcase certificates.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-secondary italic mb-4">In the tech industry, having these on your CV before you even start your degree is a huge advantage.</p>
            </div>
        </div>
    );
};

export default TechComputingContent;
