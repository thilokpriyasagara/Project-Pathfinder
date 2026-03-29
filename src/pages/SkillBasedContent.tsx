import React from 'react';
import { Zap, Wind, Sun, Building2, Award, Clock, Globe, TrendingUp, Wrench, BarChart3 } from 'lucide-react';
import './CareerFields.css';

const SkillBasedContent: React.FC = () => {
    return (
        <div className="tech-computing-extended">

            {/* 1. The Career Paths */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>1. The Career Paths</h2>
            <div className="grid-3-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                {/* HVAC Technician */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                            <Wind size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>HVAC / Refrigeration Technician</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "climate controllers." They install and repair everything from small home A/C units to massive industrial cooling systems in hotels and apparel factories (like MAS or Brandix).</li>
                        <li><strong>Key Skills:</strong> Understanding thermodynamics, handling refrigerants safely, and electrical wiring.</li>
                        <li><strong>The Opportunity:</strong> With global warming and rising temperatures in Sri Lanka, the demand for A/C technicians is currently at an all-time high.</li>
                    </ul>
                </div>

                {/* Electrician */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#fefce8', color: '#eab308' }}>
                            <Zap size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Electrician (Industrial &amp; Domestic)</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "power providers." They read blueprints to install wiring in new houses or maintain the complex electrical grids of factories.</li>
                        <li><strong>Key Skills:</strong> Circuitry knowledge, safety protocols, and using testing equipment like multimeters.</li>
                        <li><strong>The Opportunity:</strong> Solar power is booming in Sri Lanka; electricians who specialize in <strong>Solar PV Systems</strong> are now some of the most specialized and well-paid tradespeople.</li>
                    </ul>
                </div>

                {/* Solar Technician */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#fff7ed', color: '#f97316' }}>
                            <Sun size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Solar Technician</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They install, maintain, and repair solar panel systems for homes, businesses, and government buildings — Sri Lanka's fastest-growing trade.</li>
                        <li><strong>Key Skills:</strong> Electrical wiring, panel mounting, inverter setup, and system monitoring.</li>
                        <li><strong>The Opportunity:</strong> Sri Lanka's push for renewable energy has created massive demand for certified Solar Technicians across the island.</li>
                    </ul>
                </div>
            </div>

            {/* 2. Understanding the NVQ System */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>2. Understanding the NVQ System</h2>
            <p className="text-secondary mb-6" style={{ lineHeight: 1.6 }}>
                In Sri Lanka, you don't just get a "certificate"; you get a <strong>Level</strong>. This is your ladder to success:
            </p>

            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                <div className="content-block premium-card" style={{ borderLeft: '4px solid #3b82f6' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>3</div>
                        <h4 style={{ margin: 0, color: '#1e293b' }}>NVQ Level 3 — Basic Craftsman</h4>
                    </div>
                    <p className="text-secondary" style={{ margin: 0, lineHeight: 1.6 }}>You can do the job under supervision. This is the entry-level qualification — achievable in as little as 6 months.</p>
                </div>

                <div className="content-block premium-card" style={{ borderLeft: '4px solid #22c55e' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>4</div>
                        <h4 style={{ margin: 0, color: '#1e293b' }}>NVQ Level 4 — Full Craftsman</h4>
                    </div>
                    <p className="text-secondary" style={{ margin: 0, lineHeight: 1.6 }}>You can work independently. This is the <strong>"Gold Standard"</strong> for jobs in the Middle East or Europe.</p>
                </div>

                <div className="content-block premium-card" style={{ borderLeft: '4px solid #f97316' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#f97316', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>5/6</div>
                        <h4 style={{ margin: 0, color: '#1e293b' }}>NVQ Level 5 &amp; 6 — Diploma / Higher Diploma</h4>
                    </div>
                    <p className="text-secondary" style={{ margin: 0, lineHeight: 1.6 }}>You become a <strong>Technician</strong> or <strong>Site Supervisor</strong> — managing teams and projects.</p>
                </div>

                <div className="content-block premium-card" style={{ borderLeft: '4px solid #8b5cf6' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#8b5cf6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>7</div>
                        <h4 style={{ margin: 0, color: '#1e293b' }}>NVQ Level 7 — Bachelor's Degree (B.Tech)</h4>
                    </div>
                    <p className="text-secondary" style={{ margin: 0, lineHeight: 1.6 }}>Equivalent to a university degree, offered at <strong>UNIVOTEC</strong>. Opens doors to engineering and management roles.</p>
                </div>
            </div>

            {/* 3. Where to Study */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>3. Where to Study (Top Institutes for 2026)</h2>

            <div className="grid-3-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                {/* German Tech */}
                <div className="content-block">
                    <h3 className="mb-3 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <Building2 size={22} /> A. German Tech (CGTTI – Moratuwa)
                    </h3>
                    <p className="text-secondary mb-4" style={{ fontSize: '0.9rem' }}>
                        The most famous trade school in Sri Lanka. A certificate from "German Tech" is highly respected by employers globally.
                    </p>
                    <ul className="custom-list">
                        <li><strong>Full-Time (4 Years):</strong> For those who want to be master craftsmen.</li>
                        <li><strong>Part-Time/Short Courses:</strong> Available for A/C and Electrical trades (usually 6 months to 1 year).</li>
                        <li><strong>2026 Status:</strong> Applications for full-time courses usually open in the second half of the year.</li>
                    </ul>
                </div>

                {/* VTA */}
                <div className="content-block">
                    <h3 className="mb-3 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <Wrench size={22} /> B. VTA (Vocational Training Authority)
                    </h3>
                    <p className="text-secondary mb-4" style={{ fontSize: '0.9rem' }}>
                        With centers in almost every town (like Narahenpita, Katubedda, or district centers), VTA is the most accessible.
                    </p>
                    <ul className="custom-list">
                        <li><strong>2026 Intake:</strong> Enrollment for 2026 full-time courses has already <strong>started</strong>.</li>
                        <li><strong>Cost:</strong> Many courses are free or have a very low registration fee for government Batches.</li>
                    </ul>
                </div>

                {/* NAITA */}
                <div className="content-block">
                    <h3 className="mb-3 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <BarChart3 size={22} /> C. NAITA (National Apprentice &amp; Industrial Training Authority)
                    </h3>
                    <p className="text-secondary mb-4" style={{ fontSize: '0.9rem' }}>
                        NAITA is unique because they place you in a <strong>real company</strong> (like a hotel or a construction firm) as an apprentice from Day 1.
                    </p>
                    <ul className="custom-list">
                        <li><strong>Learning Style:</strong> 80% practical on-the-job training, 20% theory. You often receive a small "allowance" while learning.</li>
                        <li><strong>2026 Intake:</strong> Applications are currently open for various trades including <strong>Automobile, Electrical, and HVAC</strong>.</li>
                    </ul>
                </div>
            </div>

            {/* 4. Entry Requirements for 2026 */}
            <h2 className="section-title mt-10 mb-4" style={{ fontSize: '2rem', color: '#1e293b' }}>4. Entry Requirements for 2026</h2>

            <div className="table-container mb-12">
                <table className="custom-table w-full">
                    <thead>
                        <tr>
                            <th>Trade</th>
                            <th>Entry Qualification</th>
                            <th>Duration</th>
                            <th>Certification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Electrician</strong></td>
                            <td>6 O/L passes (usually incl. Math)</td>
                            <td>1 Year</td>
                            <td>NVQ Level 3/4</td>
                        </tr>
                        <tr>
                            <td><strong>HVAC Tech</strong></td>
                            <td>Appear for O/Ls (Grade 9 min for some)</td>
                            <td>6 – 12 Months</td>
                            <td>NVQ Level 3/4</td>
                        </tr>
                        <tr>
                            <td><strong>Solar Technician</strong></td>
                            <td>NVQ Level 3 Electrician</td>
                            <td>3 – 6 Months</td>
                            <td>Specialization</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* 5. Immediate Steps + Why Unique side by side */}
            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '2rem' }}>

                {/* Skills Bridge */}
                <div>
                    <h2 className="section-title mb-4" style={{ fontSize: '1.8rem', color: '#1e293b' }}>
                        5. Immediate Steps (The "Skills Bridge")
                    </h2>
                    <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#f97316', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>1</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Register at VTA or NAITA:</strong> Visit your nearest district office this week; 2026 batches are currently being formed.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#f97316', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>2</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Get an "Overall" Kit:</strong> Professionalism starts with the right gear. Most institutes require you to have your own safety boots and overalls.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#f97316', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>3</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Learn Basic English:</strong> If you want to work in the Middle East (Dubai/Qatar) or for a multi-national company in Colombo, knowing technical English terms for tools and safety is a huge plus.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#f97316', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>4</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Driver's License:</strong> Most skilled trades require you to travel to sites. Having a bike or light vehicle license makes you much more employable.
                            </span>
                        </li>
                    </ol>
                </div>

                {/* Why This Field is Unique */}
                <div>
                    <div className="content-block premium-card" style={{ height: '100%', borderTop: '4px solid #f97316' }}>
                        <h3 className="flex items-center gap-2 mb-6" style={{ color: '#1e293b', fontSize: '1.5rem' }}>
                            <Globe size={24} color="#f97316" />
                            6. Why This Field is Unique in Sri Lanka
                        </h3>
                        <ul className="custom-list space-y-4">
                            <li className="flex items-start gap-3">
                                <TrendingUp className="flex-shrink-0 mt-1" size={20} color="#f97316" />
                                <div>
                                    <strong>Fastest Route to Employment:</strong>
                                    <p className="text-sm text-secondary mt-1">Unlike a 4-year degree, you can be earning a full-time salary within 6–18 months. NVQ Level 4 tradespeople often out-earn fresh university graduates.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Globe className="flex-shrink-0 mt-1" size={20} color="#f97316" />
                                <div>
                                    <strong>High Overseas Demand:</strong>
                                    <p className="text-sm text-secondary mt-1">NVQ Level 4 is the "Gold Standard" for Middle East (Dubai, Qatar, Saudi Arabia) and European job agencies. A certified HVAC or Electrician can earn 3–5x their local salary abroad.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Award className="flex-shrink-0 mt-1" size={20} color="#f97316" />
                                <div>
                                    <strong>Entrepreneurship Potential:</strong>
                                    <p className="text-sm text-secondary mt-1">A certified electrician or A/C technician can easily start their own business with minimal capital — just your tools, a phone, and a reputation for quality work.</p>
                                </div>
                            </li>
                        </ul>
                        <div className="tip-box mt-6 p-4 rounded-lg" style={{ backgroundColor: '#fff7ed', border: '1px solid #fed7aa' }}>
                            <p className="text-sm font-medium m-0" style={{ color: '#9a3412' }}>
                                <span className="font-bold">💡 Key Tip:</span> Once you get your NVQ Level 3, immediately start working toward <strong>Level 4</strong> — it is the single qualification that unlocks Middle East job agencies and doubles your earning power.
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
                <p className="text-sm text-secondary mb-4">A practical roadmap for aspiring skilled tradespeople — the fastest path to financial independence.</p>
                <div className="timeline-steps">
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>1</div>
                        <div className="step-content">
                            <strong>This Week: Register at VTA or NAITA</strong>
                            <p className="text-sm text-secondary mt-1">2026 batches are currently being formed. Visit your nearest district VTA office or go to naita.gov.lk to apply online. The earlier you apply, the better your chances of getting your preferred trade.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>2</div>
                        <div className="step-content">
                            <strong>6–12 Months: Complete NVQ Level 3</strong>
                            <p className="text-sm text-secondary mt-1">Focus on your practical skills and pass the NVQ Level 3 assessment. Begin applying for entry-level jobs to start earning while you continue studying toward Level 4.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>3</div>
                        <div className="step-content">
                            <strong>Target NVQ Level 4 (The Gold Standard)</strong>
                            <p className="text-sm text-secondary mt-1">Upgrade to NVQ Level 4 as quickly as possible. This unlocks Middle East job agency opportunities and positions you as a fully independent certified tradesperson.</p>
                        </div>
                    </div>
                    <div className="timeline-step" style={{ paddingBottom: 0, borderLeft: 'none' }}>
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>4</div>
                        <div className="step-content">
                            <strong>Specialize or Start Your Own Business</strong>
                            <p className="text-sm text-secondary mt-1">After Level 4, consider specializing in Solar PV Systems (3–6 month top-up) or starting your own trade business. A certified electrician or HVAC technician needs very little capital to become their own boss.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-secondary italic mb-4">Skills-Based Trades: where mastering a craft becomes the fastest route to financial freedom in Sri Lanka.</p>

            </div>
        </div>
    );
};

export default SkillBasedContent;
