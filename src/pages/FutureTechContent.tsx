import React from 'react';
import { Brain, Cloud, Link, Building2, Award, Clock, Globe, TrendingUp, Cpu, Rocket } from 'lucide-react';
import './CareerFields.css';

const FutureTechContent: React.FC = () => {
    return (
        <div className="tech-computing-extended">

            {/* 1. The Future-Tech Pillars */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>1. The Future-Tech Pillars</h2>
            <div className="grid-3-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                {/* AI & ML Engineer */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                            <Brain size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>AI &amp; Machine Learning (ML) Engineer</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They build "intelligent" systems. This ranges from the recommendation engine on YouTube to diagnostic tools that help doctors identify diseases from X-rays.</li>
                        <li><strong>The Sri Lankan Context:</strong> Many local tech giants (like Axiata Digital Labs or London Stock Exchange Group SL) use AI for predictive analytics and automation.</li>
                        <li><strong>Key Skills:</strong> Python programming, Linear Algebra, Statistics, and frameworks like <strong>TensorFlow or PyTorch</strong>.</li>
                    </ul>
                </div>

                {/* Cloud Architect */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#f0fdf4', color: '#22c55e' }}>
                            <Cloud size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Cloud Architect</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They design the "digital sky." Instead of companies owning physical servers, they use the Cloud (AWS, Azure, Google Cloud). An architect decides how to structure these massive virtual systems so they are fast, secure, and cheap.</li>
                        <li><strong>Key Skills:</strong> Networking, Security, and mastery of platforms like <strong>Amazon Web Services (AWS)</strong> or <strong>Microsoft Azure</strong>.</li>
                        <li><strong>Career Ladder:</strong> Cloud Engineer → Solutions Architect → Principal Cloud Architect.</li>
                    </ul>
                </div>

                {/* Blockchain Developer */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#fdf4ff', color: '#a855f7' }}>
                            <Link size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Blockchain Developer</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They build "systems of trust." Beyond just Bitcoin, blockchain is used for secure medical records, transparent supply chains (like tracking Ceylon Tea from farm to cup), and "Smart Contracts" that execute automatically.</li>
                        <li><strong>Key Skills:</strong> Cryptography, Data Structures, and languages like <strong>Solidity</strong> (for Ethereum) or <strong>Rust</strong>.</li>
                    </ul>
                </div>
            </div>

            {/* 2. Where to Study */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>2. Where to Study in Sri Lanka (2026 Intake Details)</h2>

            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                {/* Specialized Degrees */}
                <div className="content-block">
                    <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <Building2 size={22} /> A. Specialized Degrees
                    </h3>
                    <ul className="custom-list">
                        <li>
                            <strong>SLIIT (BSc Hons in AI):</strong> Offers a dedicated specialization in Artificial Intelligence.
                            <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0.4rem' }}>
                                <li style={{ color: '#475569', fontSize: '0.9rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                    <span style={{ color: '#a855f7', fontWeight: 700, flexShrink: 0 }}>→</span>
                                    <span><strong>Entry:</strong> 3 "S" passes in A/L (Maths/Tech stream). If you are from Arts/Commerce, you must pass an <strong>IT Bridging Program</strong>.</span>
                                </li>
                            </ul>
                        </li>
                        <li><strong>IIT (Informatics Institute of Technology):</strong> Known for its <strong>BSc (Hons) Computer Science</strong> with pathways in <strong>AI and Data Science</strong>. They are affiliated with the University of Westminster (UK).</li>
                        <li><strong>UCSC (University of Colombo School of Computing):</strong> The most competitive state-sector route for <strong>Computer Science</strong>, with heavy research focus on AI and Distributed Systems (Blockchain).</li>
                    </ul>
                </div>

                {/* Professional Certifications */}
                <div className="content-block">
                    <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <Award size={22} /> B. Professional Certifications (The "Industry Shortcut")
                    </h3>
                    <ul className="custom-list">
                        <li><strong>IIT Professional Certificate in AI:</strong> A 3-month program specifically for school leavers to get a head start.</li>
                        <li><strong>SLIIT Advanced Certificate in AI:</strong> A 40-hour deep dive into Generative AI and MLOps.</li>
                        <li><strong>AWS Academy (Various local partners):</strong> Many local institutes offer AWS Cloud Practitioner or Solutions Architect training.</li>
                    </ul>

                    <div className="highlight-box mt-6" style={{ backgroundColor: '#fdf4ff', borderLeft: '4px solid #a855f7', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                        <p className="text-sm m-0" style={{ color: '#6b21a8', lineHeight: 1.6 }}>
                            <strong>💡 Why Certifications Matter:</strong> In Future Tech, an <strong>AWS Certified Solutions Architect</strong> or <strong>Google TensorFlow Developer</strong> certificate is often more valuable to employers than a traditional diploma — and can be earned in weeks.
                        </p>
                    </div>
                </div>
            </div>

            {/* 3. Entry Requirements for 2026 */}
            <h2 className="section-title mt-10 mb-4" style={{ fontSize: '2rem', color: '#1e293b' }}>3. Entry Requirements for 2026</h2>

            <div className="table-container mb-12">
                <table className="custom-table w-full">
                    <thead>
                        <tr>
                            <th>Path</th>
                            <th>Minimum A/L Requirement</th>
                            <th>Mandatory Prep</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>AI Specialist (State)</strong></td>
                            <td>3 "S" passes (Maths Stream)</td>
                            <td>Very High Z-Score</td>
                        </tr>
                        <tr>
                            <td><strong>Future Tech (Private)</strong></td>
                            <td>3 "S" passes (Any Stream)</td>
                            <td><strong>Maths/IT Bridging Course</strong> if non-science</td>
                        </tr>
                        <tr>
                            <td><strong>Cloud/Blockchain Certs</strong></td>
                            <td>O/L with Credit in Math/English</td>
                            <td>Basic Programming Knowledge</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* 4. Immediate Steps + Why Unique */}
            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '2rem' }}>

                {/* Future-Tech Bridge */}
                <div>
                    <h2 className="section-title mb-4" style={{ fontSize: '1.8rem', color: '#1e293b' }}>
                        4. Immediate Steps (The "Future-Tech" Bridge)
                    </h2>
                    <p className="text-secondary mb-6">
                        Because these fields move so fast, you should start <strong>today</strong>, not when university starts.
                    </p>
                    <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#a855f7', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>1</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Learn Python First:</strong> It is the "universal language" for AI and Cloud. Start with <strong>CS50P (Harvard's Free Python Course)</strong> online.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#a855f7', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>2</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Get "Cloud Certified":</strong> Create a free-tier account on <strong>AWS or Google Cloud</strong> and complete their "Cloud Practitioner" essentials (often free).
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#a855f7', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>3</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Explore "Web3":</strong> If you like Blockchain, look into <strong>CryptoZombies</strong> (a free, fun site to learn Blockchain coding) or local meetups like <strong>Web3 Sri Lanka</strong>.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#a855f7', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>4</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Math is your Secret Weapon:</strong> Don't ignore your A/L Mathematics. AI is 80% Math (Calculus and Probability). If you struggled with it, consider a "Mathematics for AI" short course at <strong>IIT</strong>.
                            </span>
                        </li>
                    </ol>
                </div>

                {/* Why This Field is Unique */}
                <div>
                    <div className="content-block premium-card" style={{ height: '100%', borderTop: '4px solid #a855f7' }}>
                        <h3 className="flex items-center gap-2 mb-6" style={{ color: '#1e293b', fontSize: '1.5rem' }}>
                            <Globe size={24} color="#a855f7" />
                            5. Why This Field is Unique in Sri Lanka
                        </h3>
                        <ul className="custom-list space-y-4">
                            <li className="flex items-start gap-3">
                                <Rocket className="flex-shrink-0 mt-1" size={20} color="#a855f7" />
                                <div>
                                    <strong>Location-Independent Income:</strong>
                                    <p className="text-sm text-secondary mt-1">An AI Engineer or Cloud Architect can work remotely for US or European companies from Colombo, earning dollar-pegged or foreign currency salaries that are unmatched locally.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <TrendingUp className="flex-shrink-0 mt-1" size={20} color="#a855f7" />
                                <div>
                                    <strong>Fastest-Growing Salaries Globally:</strong>
                                    <p className="text-sm text-secondary mt-1">AI and Cloud roles are consistently ranked among the top-paid positions worldwide. In Sri Lanka, companies like Axiata, Dialog, and 99X Technology actively recruit AI talent at premium rates.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Cpu className="flex-shrink-0 mt-1" size={20} color="#a855f7" />
                                <div>
                                    <strong>Low Barrier to Entry via Certifications:</strong>
                                    <p className="text-sm text-secondary mt-1">Unlike traditional fields requiring years of formal education, a 3-month professional certificate (e.g., AWS Cloud Practitioner, Google AI) can get you into a company far faster than a degree alone.</p>
                                </div>
                            </li>
                        </ul>
                        <div className="tip-box mt-6 p-4 rounded-lg" style={{ backgroundColor: '#fdf4ff', border: '1px solid #e9d5ff' }}>
                            <p className="text-sm font-medium m-0" style={{ color: '#6b21a8' }}>
                                <span className="font-bold">💡 Key Tip:</span> Start with <strong>CS50P</strong> (Harvard's free Python course) today. Python is the single most valuable skill for AI, Cloud, and Data — and it's completely free to learn online.
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
                <p className="text-sm text-secondary mb-4">A practical roadmap for aspiring AI engineers, Cloud architects, and Blockchain developers.</p>
                <div className="timeline-steps">
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>1</div>
                        <div className="step-content">
                            <strong>Now: Start Python &amp; CS50P</strong>
                            <p className="text-sm text-secondary mt-1">Go to cs50.harvard.edu/python and enroll for free. Python is the entry point for every Future Tech role — AI, Cloud automation, and even Blockchain tooling all use it.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>2</div>
                        <div className="step-content">
                            <strong>Get Your First Cloud Certificate (Free)</strong>
                            <p className="text-sm text-secondary mt-1">Create a free AWS account and complete the AWS Cloud Practitioner Essentials course (free online). This gives you a globally recognized credential within 4–6 weeks of focused study.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>3</div>
                        <div className="step-content">
                            <strong>March – June 2026: Apply to SLIIT / IIT</strong>
                            <p className="text-sm text-secondary mt-1">Apply for the SLIIT BSc Hons AI or IIT BSc Computer Science (AI pathway). If you are from Arts/Commerce, register for their IT Bridging Program — this route is open to everyone.</p>
                        </div>
                    </div>
                    <div className="timeline-step" style={{ paddingBottom: 0, borderLeft: 'none' }}>
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>4</div>
                        <div className="step-content">
                            <strong>Build in Public — Start a GitHub Profile</strong>
                            <p className="text-sm text-secondary mt-1">In Future Tech, your GitHub is your CV. Start uploading small Python scripts or Cloud projects. Employers at companies like 99X and Axiata actively look at GitHub profiles before interviews.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-secondary italic mb-4">Future Tech: where Sri Lanka meets Silicon Valley — from your laptop, on your own terms.</p>

            </div>
        </div>
    );
};

export default FutureTechContent;
