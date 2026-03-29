import React from 'react';
import { Palette, Scissors, Film, Building2, GraduationCap, Award, Clock, Globe, TrendingUp, Star } from 'lucide-react';
import './CareerFields.css';

const ArtsDesignContent: React.FC = () => {
    return (
        <div className="tech-computing-extended">

            {/* 1. The Career Paths */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>1. The Career Paths</h2>
            <div className="grid-3-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                {/* Graphic Designer */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                            <Palette size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Graphic Designer / Visual Communicator</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "visual problem solvers." They take a complex idea and turn it into a clear, attractive design — whether it's a logo for a new Sri Lankan startup, a social media campaign for a brand like Dilmah, or the user interface (UI) of a mobile app.</li>
                        <li><strong>Key Skills:</strong> Typography, layout, branding, and mastery of tools like <strong>Adobe Photoshop and Illustrator</strong>.</li>
                        <li><strong>Career Ladder:</strong> Junior Designer → Art Director → Creative Director.</li>
                    </ul>
                </div>

                {/* Fashion Designer */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#fdf4ff', color: '#a855f7' }}>
                            <Scissors size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Fashion Designer</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "trendsetters." Beyond just sketching clothes, they understand fabric technology, sustainable production, and the business of fashion.</li>
                        <li><strong>In Sri Lanka:</strong> This is a huge industry because of our world-class apparel manufacturing sector (like Brandix and MAS). Designers here often work on global brands like Victoria's Secret or Nike.</li>
                        <li><strong>Key Skills:</strong> Sketching, garment construction, and understanding color theory.</li>
                    </ul>
                </div>

                {/* Animator & VFX Artist */}
                <div className="content-block premium-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem', backgroundColor: '#fef2f2', color: '#ef4444' }}>
                            <Film size={24} />
                        </div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Animator &amp; VFX Artist</h3>
                    </div>
                    <ul className="custom-list">
                        <li><strong>What they do:</strong> They are the "illusionists." They bring characters to life in 2D or 3D for movies, video games, and advertisements.</li>
                        <li><strong>In Sri Lanka:</strong> There is a growing niche for local animation studios and game development teams.</li>
                        <li><strong>Key Skills:</strong> Storyboarding, 3D modeling (<strong>Blender/Maya</strong>), and motion graphics.</li>
                    </ul>
                </div>
            </div>

            {/* 2. Where to Study */}
            <h2 className="section-title mt-8 mb-6" style={{ fontSize: '2rem', color: '#1e293b' }}>2. Where to Study in Sri Lanka</h2>

            <div className="grid-3-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                {/* Private Specialized Schools */}
                <div className="content-block">
                    <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <Star size={22} /> A. Private Specialized Schools
                    </h3>
                    <p className="text-secondary mb-4" style={{ fontSize: '0.9rem' }}>
                        <em>Industry Favorites</em> — These institutes focus heavily on portfolios and often have direct links to the creative industry:
                    </p>
                    <ul className="custom-list">
                        <li><strong>AMDT School of Creativity:</strong> Known for offering a wide range of degrees in Animation, VFX, and Graphic Design. They have flexible "Work While You Study" options.</li>
                        <li><strong>Academy of Design (AOD):</strong> A top choice for Fashion and Interior Design. They are affiliated with Northumbria University (UK) and host the Sri Lanka Design Festival.</li>
                        <li><strong>AIB (Academy of International Business):</strong> Offers popular dual certifications in Graphic Design and Digital Marketing.</li>
                    </ul>
                </div>

                {/* State Universities */}
                <div className="content-block">
                    <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <Building2 size={22} /> B. State Universities
                    </h3>
                    <p className="text-secondary mb-4" style={{ fontSize: '0.9rem' }}>
                        Z-Score &amp; Aptitude Tests required:
                    </p>
                    <ul className="custom-list">
                        <li><strong>University of Moratuwa:</strong> Offers a highly prestigious <strong>Bachelor of Design</strong> in Fashion Design &amp; Product Development.</li>
                        <li><strong>University of the Visual &amp; Performing Arts (UVPA):</strong> Located in Colombo, this is the center for traditional fine arts, music, and dance.</li>
                        <li><strong>University of Kelaniya:</strong> Offers degrees in Fine Arts and Image Arts (Film &amp; Television).</li>
                    </ul>
                </div>

                {/* Professional Training Centers */}
                <div className="content-block">
                    <h3 className="mb-4 flex items-center gap-2" style={{ color: '#2563eb' }}>
                        <GraduationCap size={22} /> C. Professional Training Centers
                    </h3>
                    <ul className="custom-list">
                        <li><strong>SLIIT:</strong> Offers specialized professional programs in <strong>Graphics Design and Multimedia</strong>.</li>
                        <li><strong>NIBM:</strong> Known for its diplomas in Multimedia and Fashion Design.</li>
                        <li><strong>ESOFT:</strong> Offers BTEC HNDs in Art and Design (Fashion and Graphic Design).</li>
                    </ul>
                </div>
            </div>

            {/* 3. Entry Requirements for 2026 */}
            <h2 className="section-title mt-10 mb-4" style={{ fontSize: '2rem', color: '#1e293b' }}>3. Entry Requirements for 2026</h2>
            <p className="text-secondary mb-6">If you're planning your applications, here is what you need for the major intakes:</p>

            <div className="table-container mb-12">
                <table className="custom-table w-full">
                    <thead>
                        <tr>
                            <th>Institute</th>
                            <th>Program</th>
                            <th>Requirement</th>
                            <th>Next Intake</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>AMDT</strong></td>
                            <td>BA (Hons) Degrees</td>
                            <td>2 A/L Passes (Any stream)</td>
                            <td><strong>May / September 2026</strong></td>
                        </tr>
                        <tr>
                            <td><strong>AOD</strong></td>
                            <td>BA (Hons) Design</td>
                            <td>3 A/L Passes + Portfolio/Interview</td>
                            <td><strong>January / July 2026</strong></td>
                        </tr>
                        <tr>
                            <td><strong>SLIIT</strong></td>
                            <td>Multimedia Program</td>
                            <td>3 A/L Passes (Any stream)</td>
                            <td><strong>March 2026</strong></td>
                        </tr>
                        <tr>
                            <td><strong>UOM</strong></td>
                            <td>Bachelor of Design</td>
                            <td>High Z-Score + <strong>Aptitude Test</strong></td>
                            <td><strong>UGC Cycle (Late 2026)</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* 4. Immediate Steps + Why Unique side by side */}
            <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '2rem' }}>

                {/* 4. Creative Bridge Steps */}
                <div>
                    <h2 className="section-title mb-4" style={{ fontSize: '1.8rem', color: '#1e293b' }}>
                        4. Immediate Steps (The "Creative Bridge")
                    </h2>
                    <p className="text-secondary mb-6">
                        In the arts, your <strong>Portfolio</strong> (a collection of your work) is your most important asset. You can start building it right now:
                    </p>
                    <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#a855f7', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>1</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Join a Short Course:</strong> Enroll in a "Graphic Design for Beginners" course at <strong>AMDT</strong> or <strong>SLIIT</strong> to learn the software basics.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#a855f7', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>2</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Master the Tools:</strong> Download <strong>Blender</strong> (for 3D) or <strong>Canva/Photoshop</strong> (for 2D) and start following YouTube tutorials.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#a855f7', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>3</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Learn English for Creative Pitching:</strong> Designers must explain <em>why</em> they chose a certain color or shape. Strong communication increases your value significantly.
                            </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <span style={{ minWidth: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#a855f7', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>4</span>
                            <span style={{ color: '#475569', lineHeight: 1.6 }}>
                                <strong style={{ color: '#1e293b' }}>Create an Instagram/Behance Page:</strong> Start posting your sketches or digital art. This acts as a living CV for future employers.
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
                                <TrendingUp className="flex-shrink-0 mt-1" size={20} color="#a855f7" />
                                <div>
                                    <strong>Digital Economy Boom:</strong>
                                    <p className="text-sm text-secondary mt-1">Every business — from a Colombo startup to a large export company — needs a designer for their social media, branding, and website. Demand is only growing.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Award className="flex-shrink-0 mt-1" size={20} color="#a855f7" />
                                <div>
                                    <strong>World-Class Apparel Sector:</strong>
                                    <p className="text-sm text-secondary mt-1">Sri Lanka is home to some of the world's top garment manufacturers (Brandix, MAS). Fashion Designers here work on global brands like Victoria's Secret and Nike.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Globe className="flex-shrink-0 mt-1" size={20} color="#a855f7" />
                                <div>
                                    <strong>Freelance &amp; Remote Potential:</strong>
                                    <p className="text-sm text-secondary mt-1">A skilled designer can work remotely for clients worldwide using platforms like Fiverr, Upwork, and 99designs — earning in foreign currency from home.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="tip-box mt-6 p-4 rounded-lg" style={{ backgroundColor: '#fdf4ff', border: '1px solid #e9d5ff' }}>
                            <p className="text-sm font-medium m-0" style={{ color: '#6b21a8' }}>
                                <span className="font-bold">💡 Key Tip:</span> Your <strong>Behance or Instagram portfolio</strong> matters more than your degree in this field. Employers and clients want to see what you can create — start building yours today!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Plan Timeline */}
            <div className="content-block premium-card mt-8" style={{ borderTop: '4px solid #a855f7' }}>
                <h3 className="flex items-center gap-2 mb-6" style={{ color: '#1e293b', fontSize: '1.5rem' }}>
                    <Clock size={24} color="#a855f7" />
                    Your Action Plan for 2026
                </h3>
                <p className="text-sm text-secondary mb-4">A practical roadmap for aspiring designers, animators, and creative professionals.</p>
                <div className="timeline-steps">
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#a855f7' }}>1</div>
                        <div className="step-content">
                            <strong>Now: Build Your Portfolio</strong>
                            <p className="text-sm text-secondary mt-1">Create a free Behance or Instagram account and start uploading any artwork, sketches, or digital designs. Even beginner work shows initiative to admissions teams.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#a855f7' }}>2</div>
                        <div className="step-content">
                            <strong>January / March 2026: Apply to Private Institutes</strong>
                            <p className="text-sm text-secondary mt-1">AOD opens intakes in January and July. AMDT opens in May and September. SLIIT opens in March. These are the most accessible entry points — only 2–3 A/L passes needed.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-number" style={{ backgroundColor: '#a855f7' }}>3</div>
                        <div className="step-content">
                            <strong>Learn Software Tools (Free)</strong>
                            <p className="text-sm text-secondary mt-1">Download Blender (free, 3D), Canva (free, 2D), or the Adobe Creative Cloud trial. Follow structured YouTube channels to build real, demonstrable skills fast.</p>
                        </div>
                    </div>
                    <div className="timeline-step" style={{ paddingBottom: 0, borderLeft: 'none' }}>
                        <div className="step-number" style={{ backgroundColor: '#a855f7' }}>4</div>
                        <div className="step-content">
                            <strong>State University Route (Late 2026)</strong>
                            <p className="text-sm text-secondary mt-1">If aiming for UOM's Bachelor of Design, prepare for the Aptitude Test (drawing and spatial reasoning). Apply through the UGC portal when the 2025/2026 handbook is released.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-secondary italic mb-4">In Arts, Design &amp; Entertainment, your creativity is your qualification — start creating today.</p>

            </div>
        </div>
    );
};

export default ArtsDesignContent;
