import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft, BookOpen, Clock, Briefcase, CheckCircle,
    HardHat, Heart, Utensils, Monitor, Settings,
    GraduationCap, Truck, Baby, Sparkles, BarChart2
} from 'lucide-react';
import './BlogPost2.css';

const nvqLevels = [
    { level: 1, desc: 'Foundation skills & basic tasks' },
    { level: 2, desc: 'Semi-skilled, supervised work' },
    { level: 3, desc: 'Skilled, independent work' },
    { level: 4, desc: 'Technical & supervisory roles' },
    { level: 5, desc: 'Management & specialist expertise' },
];

const benefits = [
    { text: <><strong>Earn while you learn</strong> — many programmes run alongside employment or apprenticeships.</> },
    { text: <><strong>Faster route to employment</strong> compared to multi-year degree programmes.</> },
    { text: <><strong>Nationally recognised qualifications</strong> respected by employers across sectors.</> },
    { text: <><strong>No exams</strong> — ideal for practical learners and those with exam anxiety.</> },
    { text: <><strong>Flexible study</strong> — courses can often be completed at your own pace.</> },
    { text: <><strong>Clear progression pathways</strong> from Level 1 through to Level 7.</> },
    { text: <><strong>Government funding</strong> and apprenticeship schemes may reduce or eliminate costs.</> },
];

const sectors = [
    { name: 'Construction', icon: HardHat },
    { name: 'Healthcare', icon: Heart },
    { name: 'Hospitality', icon: Utensils },
    { name: 'IT & Digital', icon: Monitor },
    { name: 'Engineering', icon: Settings },
    { name: 'Education', icon: GraduationCap },
    { name: 'Logistics', icon: Truck },
    { name: 'Childcare', icon: Baby },
    { name: 'Beauty', icon: Sparkles },
    { name: 'Finance', icon: BarChart2 },
];

const BlogPost2: React.FC = () => {
    return (
        <div className="blog-post-page">

            {/* ─── HERO IMAGE ─────────────────────────────────────── */}
            <div className="blog-hero">
                <img
                    src="/blog_2.png"
                    alt="Understanding Vocational & NVQ Training"
                    className="blog-hero-img"
                />
                <div className="blog-hero-overlay" />
                <div className="blog-hero-content">
                    <div className="blog-category-badge">
                        <BookOpen size={12} /> Education &amp; Careers
                    </div>
                    <h1 className="blog-hero-title">
                        Understanding Vocational &amp; NVQ Training
                    </h1>
                    <p className="blog-hero-subtitle">
                        A practical guide to qualifications that prioritise real-world skills over
                        classroom theory — and how they can shape your career.
                    </p>
                    <div className="blog-hero-meta">
                        <span className="blog-meta-item"><Clock size={13} /> 7 min read</span>
                        <span className="blog-meta-item"><Briefcase size={13} /> Vocational Training</span>
                        <span className="blog-meta-item"><GraduationCap size={13} /> NVQ Qualifications</span>
                    </div>
                </div>
            </div>

            {/* ─── BACK BUTTON ─────────────────────────────────────── */}
            <div className="blog-back-area">
                <Link to="/" className="blog-back-btn">
                    <ArrowLeft size={15} /> Back to Home
                </Link>
            </div>

            {/* ─── ARTICLE ─────────────────────────────────────────── */}
            <article className="blog-article">

                {/* Lead */}
                <div className="blog-lead">
                    <p>
                        In a world that often celebrates academic degrees above all else, vocational and
                        NVQ (National Vocational Qualification) training offer a compelling alternative —
                        one rooted in <strong>practical competence</strong>, workplace relevance, and tangible
                        career outcomes.
                    </p>
                    <p>
                        Whether you're a school leaver exploring your options, a career changer seeking
                        new direction, or an employer looking to upskill your team, understanding this
                        pathway is essential.
                    </p>
                </div>

                <div className="blog-body">

                    {/* What is vocational training */}
                    <h2 className="blog-section-title">
                        <BookOpen size={20} /> What is Vocational Training?
                    </h2>
                    <p>
                        Vocational training refers to any educational programme that prepares individuals
                        for a specific trade, occupation, or career. Unlike traditional academic
                        qualifications that focus on theoretical knowledge, vocational courses are
                        designed around the <strong>practical skills and competencies</strong> actually needed
                        in the workplace.
                    </p>
                    <p>
                        Examples include plumbing, hairdressing, electrical installation, health and
                        social care, catering, and IT — fields where hands-on ability matters more than
                        essay-writing.
                    </p>

                    <hr className="blog-divider" />

                    {/* What is an NVQ */}
                    <h2 className="blog-section-title">
                        <GraduationCap size={20} /> What is an NVQ?
                    </h2>
                    <p>
                        An NVQ, or <strong>National Vocational Qualification</strong>, is a work-based award
                        in England, Wales and Northern Ireland that recognises the skills and knowledge
                        needed to do a job well. Rather than sitting exams, learners are assessed on
                        their <em>performance in real or simulated work environments</em>.
                    </p>
                    <p>
                        NVQs exist on a framework of levels — each corresponding to the complexity and
                        responsibility of the work involved:
                    </p>

                    {/* NVQ Levels Table */}
                    <table className="nvq-levels-table">
                        <thead>
                            <tr>
                                <th>Level</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {nvqLevels.map(({ level, desc }) => (
                                <tr key={level}>
                                    <td>
                                        <span className="nvq-level-badge">{level}</span>
                                    </td>
                                    <td>{desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="blog-highlight">
                        <p>
                            Level 2 NVQs are broadly equivalent to GCSEs, while Level 3 aligns with
                            A-Levels. Higher-level NVQs (4–7) are considered equivalent to degrees and
                            postgraduate qualifications.
                        </p>
                    </div>

                    <hr className="blog-divider" />

                    {/* How are NVQs assessed */}
                    <h2 className="blog-section-title">
                        <CheckCircle size={20} /> How Are NVQs Assessed?
                    </h2>
                    <p>
                        Assessment is <strong>competency-based</strong>. Learners build a portfolio of evidence
                        demonstrating they can perform tasks to the required standard. This evidence
                        includes witness statements from supervisors, observation records, written
                        reflections, and work products.
                    </p>
                    <p>
                        There are <strong>no traditional exams</strong>. Instead, a qualified assessor visits the
                        learner's workplace (or observes in a simulated environment) to verify
                        competence. This makes NVQs particularly attractive to those who struggle with
                        exam-based formats.
                    </p>

                    <hr className="blog-divider" />

                    {/* Benefits */}
                    <h2 className="blog-section-title">
                        <Briefcase size={20} /> Key Benefits of Vocational &amp; NVQ Training
                    </h2>
                    <ul className="benefits-list">
                        {benefits.map((b, i) => (
                            <li key={i}>
                                <span className="benefit-icon">
                                    <CheckCircle size={13} />
                                </span>
                                <span className="benefit-text">{b.text}</span>
                            </li>
                        ))}
                    </ul>

                    <hr className="blog-divider" />

                    {/* Who offers */}
                    <h2 className="blog-section-title">
                        <GraduationCap size={20} /> Who Offers These Qualifications?
                    </h2>
                    <p>
                        NVQs and vocational qualifications are awarded by approved organisations called
                        <strong> awarding bodies</strong>. Well-known awarding bodies include{' '}
                        <em>City &amp; Guilds, BTEC (Pearson), OCR,</em> and <em>NOCN</em>.
                    </p>
                    <p>
                        Training is delivered through colleges, private training providers, and
                        increasingly online platforms.
                    </p>

                    <hr className="blog-divider" />

                    {/* Sectors */}
                    <h2 className="blog-section-title">
                        <Settings size={20} /> Which Sectors Use Vocational Qualifications Most?
                    </h2>
                    <div className="sector-grid">
                        {sectors.map(({ name, icon: Icon }) => (
                            <div key={name} className="sector-chip">
                                <Icon size={15} />
                                {name}
                            </div>
                        ))}
                    </div>

                    <hr className="blog-divider" />

                    {/* Vocational vs Academic */}
                    <h2 className="blog-section-title">
                        <BarChart2 size={20} /> Vocational vs Academic — Which is Right for You?
                    </h2>
                    <p>
                        Neither pathway is inherently superior — they serve different goals. Academic
                        routes (GCSEs, A-Levels, degrees) suit those heading towards professions like
                        law, medicine, or research. Vocational routes suit those with a{' '}
                        <strong>clear occupational goal</strong> who want to start working sooner and learn by doing.
                    </p>
                    <p>
                        Importantly, <em>the two are not mutually exclusive</em>. Many apprentices go on to
                        pursue degrees, and many graduates later complete NVQs to validate workplace skills.
                    </p>

                </div>
            </article>
        </div>
    );
};

export default BlogPost2;
