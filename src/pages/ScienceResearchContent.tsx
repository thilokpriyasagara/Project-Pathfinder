import React from 'react';
import { Microscope, Atom, Leaf, Building2, GraduationCap, Clock, Globe, TrendingUp, BookOpen } from 'lucide-react';
import './CareerFields.css';

const ScienceResearchContent: React.FC = () => {
    return (
        <div className="tech-computing-extended">

            {/* 1. The Career Paths */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>1. The Career Paths</h2>
            <div className="grid-3-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                {/* Microbiologist */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#f0fdf4', color: '#22c55e' }}>
                            <Microscope size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Microbiologist</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They study microorganisms like bacteria, viruses, and fungi. In Sri Lanka, they are critical in the <strong>food and beverage industry</strong> (ensuring tea or dairy is safe), <strong>healthcare</strong> (diagnosing diseases like Dengue), and <strong>agriculture</strong> (developing bio-fertilizers).</li>
                        <li><strong>Key Skills:</strong> Laboratory techniques, attention to detail, and a strong foundation in Biology.</li>
                        <li><strong>Career Ladder:</strong> Lab Technician → Research Assistant → Quality Assurance (QA) Manager → Senior Scientist.</li>
                    </ul>
                </div>

                {/* Physicist */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                            <Atom size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Physicist</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They study matter and energy. While some do "pure research," many in Sri Lanka work in <strong>Medical Physics</strong> (managing radiotherapy in hospitals), <strong>Telecommunications</strong>, or <strong>Nanotechnology</strong> (at institutes like SLINTEC).</li>
                        <li><strong>Key Skills:</strong> Advanced Mathematics, logical reasoning, and data modeling.</li>
                        <li><strong>Career Ladder:</strong> Research Fellow → Technical Consultant → Data Analyst or Specialist in Nuclear/Medical Physics.</li>
                    </ul>
                </div>

                {/* Environmental Scientist */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#fef2f2', color: '#ef4444' }}>
                            <Leaf size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Environmental Scientist</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "guardians of nature." They analyze environmental problems and develop solutions for waste management, water purification, and climate change. They often work with the <strong>Central Environmental Authority (CEA)</strong> or private sustainability consultancies.</li>
                        <li><strong>Key Skills:</strong> Fieldwork, chemical analysis, and knowledge of environmental law.</li>
                        <li><strong>Career Ladder:</strong> Environmental Officer → Conservationist → Sustainability Consultant.</li>
                    </ul>
                </div>
            </div>

            {/* 2. Where to Study */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>2. Where to Study in Sri Lanka</h2>

            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                {/* State Universities */}
                <div className="content-block">
                    <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <Building2 size={22} /> A. State Universities
                    </h3>
                    <p className="text-secondary mb-4" style={{ fontSize: '0.9rem' }}>
                        High Z-Score required — Biological/Physical Science stream:
                    </p>
                    <ul className="custom-list">
                        <li><strong>University of Colombo:</strong> Offers specialized degrees in <strong>Biochemistry, Molecular Biology, and Nuclear Science</strong>.</li>
                        <li><strong>University of Sri Jayewardenepura:</strong> Famous for its <strong>Microbiology</strong> and <strong>Environmental Science</strong> departments.</li>
                        <li><strong>University of Peradeniya:</strong> The leading center for <strong>Agriculture, Botany, and Physics</strong>.</li>
                        <li><strong>University of Kelaniya:</strong> Offers excellent programs in <strong>Microbiology and Industrial Management</strong>.</li>
                        <li><strong>The Open University of Sri Lanka (OUSL):</strong> A great option for a <strong>BSc in Natural Sciences</strong> if you want to work while you study.</li>
                    </ul>
                </div>

                {/* External Degrees & Professional Institutes */}
                <div className="content-block">
                    <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <GraduationCap size={22} /> B. External Degrees &amp; Professional Institutes
                    </h3>
                    <p className="text-secondary mb-4" style={{ fontSize: '0.9rem' }}>
                        Excellent if you want a recognized degree without the high Z-score requirement of internal programs:
                    </p>
                    <ul className="custom-list">
                        <li><strong>UCSC / Colombo Faculty of Science:</strong> Offers an <strong>External BSc in Biotechnology and Microbiology</strong> or <strong>Environment, Development &amp; Sustainability</strong>.</li>
                        <li><strong>Amrak Institute (Durdans):</strong> Offers a <strong>Foundation in General Sciences</strong> for O/L leavers and Higher Diplomas in <strong>Biomedical Science</strong> (leading to Research/Microbiology roles).</li>
                        <li><strong>NIFS (National Institute of Fundamental Studies):</strong> Based in Kandy, this is the premier location for advanced research projects for graduates.</li>
                    </ul>
                </div>
            </div>

            {/* 3. Entry Requirements & Intakes for 2026 */}
            <h2 className="section-title mt-10 mb-4" style={{ fontSize: '2rem', color: '#1e293b' }}>3. Entry Requirements &amp; Intakes for 2026</h2>

            <div className="table-container mb-12">
                <table className="custom-table w-full">
                    <thead>
                        <tr>
                            <th>Path</th>
                            <th>Minimum A/L Requirement</th>
                            <th>Next Major Intake</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>BSc (Internal - State)</strong></td>
                            <td>3 "S" passes (Science stream)</td>
                            <td>UGC Cycle (Late 2026)</td>
                        </tr>
                        <tr>
                            <td><strong>BSc (External - Colombo)</strong></td>
                            <td>3 "S" passes (Bio or Maths)</td>
                            <td>Aug / Sept 2026 (Applications)</td>
                        </tr>
                        <tr>
                            <td><strong>Biomedical Science (Private)</strong></td>
                            <td>3 "S" passes (Bio/Maths)</td>
                            <td>June / October 2026</td>
                        </tr>
                        <tr>
                            <td><strong>Foundation (O/L Route)</strong></td>
                            <td>6 O/L passes (incl. Math/Sci)</td>
                            <td>January / September 2026</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* 4. Immediate Steps + Why Unique side by side */}
            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '2rem' }}>

                {/* Research Bridge */}
                <div>
                    <h2 className="section-title mb-4" style={{ fontSize: '1.8rem', color: '#1e293b' }}>
                        4. Immediate Steps (The "Research Bridge")
                    </h2>
                    <p className="text-secondary mb-6">
                        You don't need a PhD to start. You can gain "hands-on" experience right now:
                    </p>
                    <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>1</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Laboratory Technology Diploma:</strong> Consider a short course in <strong>Medical Laboratory Technology (MLT)</strong> at NIBM or a private hospital academy. It gives you immediate lab skills.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>2</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Volunteer for Citizen Science:</strong> Join groups like the <strong>Young Zoologists' Association (YZA)</strong> at the Dehiwala Zoo or environmental NGOs to get field experience.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>3</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Learn Data Analysis:</strong> Modern science is all about data. Learn <strong>Python or R programming</strong> (online via Coursera or at SLIIT/NIBM). This is a massive advantage for Physicists and Environmental Scientists.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>4</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>English for Science:</strong> Most scientific journals and global research are in English. Improving your "Technical English" is essential for a research career.
                            </span>
                        </li>
                    </ol>
                </div>

                {/* Why This Field is Unique */}
                <div>
                    <div className="content-block premium-card" style={{ height: '100%', borderTop: '4px solid #22c55e' }}>
                        <h3 className="flex items-center gap-2 mb-6" style={{ color: '#1e293b', fontSize: '1.5rem' }}>
                            <Globe size={24} color="#22c55e" />
                            5. Why This Field is Unique in Sri Lanka
                        </h3>
                        <ul className="custom-list space-y-4">
                            <li className="flex items-start gap-3">
                                <TrendingUp className="flex-shrink-0 mt-1" size={20} color="#22c55e" />
                                <div>
                                    <strong>Growing Green Economy:</strong>
                                    <p className="text-sm text-secondary mt-1">Sri Lanka's focus on sustainable agriculture, eco-tourism, and environmental regulation is creating strong demand for Environmental Scientists and Botanists.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <BookOpen className="flex-shrink-0 mt-1" size={20} color="#22c55e" />
                                <div>
                                    <strong>High-Tech Industry Links:</strong>
                                    <p className="text-sm text-secondary mt-1">Institutes like SLINTEC (nanotechnology) and the food &amp; beverage export sector (tea, coconut) constantly recruit Microbiologists and Chemists with strong lab skills.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Globe className="flex-shrink-0 mt-1" size={20} color="#22c55e" />
                                <div>
                                    <strong>Global Research Pathways:</strong>
                                    <p className="text-sm text-secondary mt-1">A BSc from a top Sri Lankan state university opens pathways to postgraduate scholarships (MSc/PhD) in the UK, Australia, and Japan for research-oriented students.</p>
                                </div>
                            </li>
                        </ul>
                        <div className="tip-box mt-6 p-4 rounded-lg" style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                            <p className="text-sm font-medium m-0" style={{ color: '#166534' }}>
                                <span className="font-bold">💡 Key Tip:</span> Learning <strong>Python or R</strong> for data analysis is the single fastest way to make yourself stand out as a science graduate — even before you finish your degree.
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
                <p className="text-sm text-secondary mb-4">A practical roadmap for aspiring scientists and researchers.</p>
                <div className="timeline-steps">
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>1</div>
                        <div className="step-content">
                            <strong>Now: Start Data &amp; Lab Skills</strong>
                            <p className="text-sm text-secondary mt-1">Begin a free Python course on Coursera or freeCodeCamp. Simultaneously look for an MLT (Medical Laboratory Technology) short course at NIBM to build hands-on lab exposure.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>2</div>
                        <div className="step-content">
                            <strong>January / September 2026: Foundation Route</strong>
                            <p className="text-sm text-secondary mt-1">If you only have O/Ls, enroll in a Foundation in General Sciences at Amrak Institute. This opens the door to Biomedical Science diplomas and degree top-ups.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>3</div>
                        <div className="step-content">
                            <strong>Aug / Sept 2026: External BSc Applications</strong>
                            <p className="text-sm text-secondary mt-1">Apply for the External BSc (Biotechnology or Environmental Science) at UCSC / University of Colombo. This is an excellent recognized degree route without needing a high Z-score.</p>
                        </div>
                    </div>
                    <div className="timeline-step" style={{ paddingBottom: 0, borderLeft: 'none' }}>
                        <div className="step-number" style={{ backgroundColor: '#8b5cf6' }}>4</div>
                        <div className="step-content">
                            <strong>Volunteer &amp; Network Now</strong>
                            <p className="text-sm text-secondary mt-1">Join the Young Zoologists' Association (YZA) or an environmental NGO. Field experience and networking with working scientists is invaluable — and it costs nothing.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-secondary italic mb-4">Science &amp; Research: where curiosity becomes a career that shapes the future of Sri Lanka.</p>

            </div>
        </div>
    );
};

export default ScienceResearchContent;
