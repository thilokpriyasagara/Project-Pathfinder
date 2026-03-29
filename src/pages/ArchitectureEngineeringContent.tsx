import React from 'react';
import { Building, Cpu, Wrench, Building2, GraduationCap, Award, Clock, Globe, TrendingUp } from 'lucide-react';
import './CareerFields.css';

const ArchitectureEngineeringContent: React.FC = () => {
    return (
        <div className="tech-computing-extended">
            {/* 1. The Career Paths */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>1. The Career Paths</h2>
            <div className="grid-3-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                {/* Architect */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                            <Building size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Architect</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "visionaries." An architect focuses on the aesthetics, space, and functionality of a building. They ensure a home is beautiful, a school is full of light, and a shopping mall is easy to navigate.</li>
                        <li><strong>Key Skills:</strong> Creative drawing, spatial awareness, and a basic understanding of physics.</li>
                        <li><strong>The Path:</strong> You must follow a 5-year academic path to eventually become a <strong>Chartered Architect</strong> (SLIA).</li>
                    </ul>
                </div>

                {/* Civil Engineer */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#f0fdf4', color: '#22c55e' }}>
                            <Wrench size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Civil Engineer</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "structural experts." While the architect dreams of the shape, the civil engineer ensures it doesn't fall down. They calculate the strength of concrete, design drainage, and manage the actual construction of bridges and dams.</li>
                        <li><strong>Key Skills:</strong> Advanced Mathematics, Physics, and logical problem-solving.</li>
                        <li><strong>The Path:</strong> A 4-year Engineering degree (BSc Eng) to eventually become a <strong>Chartered Engineer</strong> (IESL).</li>
                    </ul>
                </div>

                {/* Biomedical Engineer */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#fef2f2', color: '#ef4444' }}>
                            <Cpu size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Biomedical Engineer</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "tech-doctors." They design and maintain the high-tech machinery in hospitals, such as MRI scanners, robotic surgical tools, and artificial limbs (prosthetics).</li>
                        <li><strong>Key Skills:</strong> A mix of Biology, Electronics, and Mechanical Engineering.</li>
                        <li><strong>The Path:</strong> This is an emerging field in Sri Lanka, often found under Electronic or Mechanical Engineering departments.</li>
                    </ul>
                </div>
            </div>

            {/* 2. Where to Study */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>2. Where to Study in Sri Lanka</h2>

            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                <div className="content-block">
                    <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <Building2 size={24} /> A. State Universities (The "Z-Score" Route)
                    </h3>
                    <p className="text-secondary mb-4">
                        These are free but require a very high Z-score in the <strong>Maths Stream</strong> (Combined Maths, Physics, Chemistry):
                    </p>
                    <ul className="custom-list">
                        <li><strong>University of Moratuwa (UOM):</strong> The top choice for both <strong>Architecture</strong> and <strong>Engineering</strong>.</li>
                        <li><strong>University of Peradeniya:</strong> Famous for its Engineering faculty (Civil, Mechanical, Electrical).</li>
                        <li><strong>University of Ruhuna &amp; University of Jaffna:</strong> Both offer excellent Engineering programs.</li>
                    </ul>
                </div>

                <div className="content-block">
                    <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <GraduationCap size={24} /> B. Professional &amp; Private Institutes
                    </h3>
                    <p className="text-secondary mb-4">
                        Ideal if you want to start right away or have different A/L results:
                    </p>
                    <ul className="custom-list">
                        <li><strong>City School of Architecture (CSA):</strong> Specifically focused on Architecture; accredited by the Sri Lanka Institute of Architects (SLIA) and RIBA (UK).</li>
                        <li><strong>SLIIT (Engineering &amp; Architecture):</strong> Offers degrees in Civil, Mechanical, and Biomedical Engineering, as well as Architecture.</li>
                        <li><strong>IESL (Institution of Engineers Sri Lanka):</strong> Offers an "Engineering Study Programme" which is a great path for those who want to work while they study.</li>
                        <li><strong>NSBM Green University:</strong> Offers Engineering and Interior Architecture degrees with modern facilities.</li>
                    </ul>
                </div>
            </div>

            {/* 3. Entry Requirements for 2026 */}
            <h2 className="section-title mt-10 mb-4" style={{ fontSize: '2rem', color: '#1e293b' }}>3. Entry Requirements for 2026</h2>
            <p className="text-secondary mb-6">If you are planning your next steps, keep these "rules" in mind:</p>

            <div className="table-container mb-12">
                <table className="custom-table w-full">
                    <thead>
                        <tr>
                            <th>Field</th>
                            <th>Minimum A/L Requirement</th>
                            <th>Mandatory Tests</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Engineering (State)</strong></td>
                            <td>3 "S" passes (Maths Stream)</td>
                            <td>High Z-Score (District basis)</td>
                        </tr>
                        <tr>
                            <td><strong>Architecture (State)</strong></td>
                            <td>3 "S" passes (Maths/Art/Tech)</td>
                            <td><strong>UOM Aptitude Test</strong> (Drawing &amp; Logic)</td>
                        </tr>
                        <tr>
                            <td><strong>Architecture (Private)</strong></td>
                            <td>3 "S" passes (Any Stream)</td>
                            <td>Interview &amp; Portfolio check</td>
                        </tr>
                        <tr>
                            <td><strong>IESL Route</strong></td>
                            <td>3 "S" passes (Maths Stream)</td>
                            <td>No Z-score required</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* 4. Immediate Courses / Bridge Courses + Why Unique side by side */}
            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '2rem' }}>
                {/* Bridge Courses */}
                <div>
                    <h2 className="section-title mb-4" style={{ fontSize: '1.8rem', color: '#1e293b' }}>
                        4. Immediate Courses You Can Do (Bridge Courses)
                    </h2>
                    <p className="text-secondary mb-6">
                        While waiting for results, these "short courses" will give you a massive advantage:
                    </p>
                    <ol className="custom-list" style={{ listStyle: 'none', paddingLeft: 0 }}>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>1</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>AutoCAD / Revit:</strong> These are the software tools used by both architects and engineers to draw plans. You can do a 2-month certificate at <strong>CADD Centre</strong> or <strong>NIBM</strong>.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>2</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Basic Surveying &amp; Leveling:</strong> Helpful for civil engineering; check for short courses at <strong>technical colleges</strong>.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>3</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Graphic Design:</strong> For architects, learning <strong>Photoshop or Illustrator</strong> helps in creating beautiful presentations for clients.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>4</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Maths &amp; Physics Refreshers:</strong> If you are heading into Engineering, the first year is very math-heavy. Keeping your skills sharp is vital.
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
                                <Award className="flex-shrink-0 mt-1" size={20} color="#3b82f6" />
                                <div>
                                    <strong>Chartered Status:</strong>
                                    <p className="text-sm text-secondary mt-1">Becoming a Chartered Architect (SLIA) or Chartered Engineer (IESL) is one of the most prestigious professional titles in Sri Lanka — equivalent to a doctor's registration.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <TrendingUp className="flex-shrink-0 mt-1" size={20} color="#3b82f6" />
                                <div>
                                    <strong>Infrastructure Boom:</strong>
                                    <p className="text-sm text-secondary mt-1">Sri Lanka is in the middle of a major infrastructure development phase — highways, ports, smart buildings — making Engineers and Architects some of the most in-demand professionals.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Globe className="flex-shrink-0 mt-1" size={20} color="#3b82f6" />
                                <div>
                                    <strong>Global Portability:</strong>
                                    <p className="text-sm text-secondary mt-1">An Engineering degree from UOM or Peradeniya is internationally recognized, opening pathways to work in the Middle East, Australia, or the UK.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="tip-box mt-6 p-4 rounded-lg" style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}>
                            <p className="text-sm font-medium m-0" style={{ color: '#1d4ed8' }}>
                                <span className="font-bold">💡 Key Tip:</span> For Architecture, your <strong>portfolio</strong> matters as much as your grades. Start sketching and practising freehand drawing now — it will help in aptitude tests and interviews.
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
                <p className="text-sm text-secondary mb-4">A practical roadmap for aspiring architects and engineers.</p>
                <div className="timeline-steps">
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>1</div>
                        <div className="step-content">
                            <strong>Now: Start a Bridge Course</strong>
                            <p className="text-sm text-secondary mt-1">Enroll in an AutoCAD or Revit certificate at CADD Centre or NIBM. This is a skill every employer will look for before your degree is even done.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>2</div>
                        <div className="step-content">
                            <strong>April – June 2026: Apply via UGC</strong>
                            <p className="text-sm text-secondary mt-1">Apply for state university engineering and architecture programs through the UGC portal once the 2025/2026 handbook is released. Check Z-score cutoffs by district.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>3</div>
                        <div className="step-content">
                            <strong>Prepare for Aptitude Tests (Architecture)</strong>
                            <p className="text-sm text-secondary mt-1">UOM requires an Aptitude Test (Drawing &amp; Logic) for its Architecture program. Practice freehand sketching and spatial reasoning problems regularly.</p>
                        </div>
                    </div>
                    <div className="timeline-step" style={{ paddingBottom: 0, borderLeft: 'none' }}>
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>4</div>
                        <div className="step-content">
                            <strong>Consider the IESL Route</strong>
                            <p className="text-sm text-secondary mt-1">If your Z-score isn't high enough for a state university, register for the IESL Engineering Study Programme — no Z-score is required and you can work while you study toward Chartered Engineer status.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-secondary italic mb-4">Architecture & Engineering: where creativity meets precision to shape the world around us.</p>

            </div>
        </div>
    );
};

export default ArchitectureEngineeringContent;
