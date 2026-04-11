import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft, BookOpen, Clock, TrendingUp, Database,
    Shield, Cpu, Car, Megaphone, Leaf, Brain, Zap,
    Globe, MapPin
} from 'lucide-react';
import './BlogPost3.css';

const careerFields = [
    {
        title: 'Data Science & Analytics',
        tag: 'High Demand',
        desc: 'Businesses rely on data experts to interpret insights, build models, and drive decisions across every industry.',
        icon: Database,
        accent: '#6366f1',
        bg: 'rgba(99,102,241,0.12)',
    },
    {
        title: 'Cybersecurity',
        tag: 'Critical Growth',
        desc: 'As digital transformation accelerates, demand for cybersecurity professionals is surging across public and private sectors.',
        icon: Shield,
        accent: '#ef4444',
        bg: 'rgba(239,68,68,0.12)',
    },
    {
        title: 'Mechatronics & Automation',
        tag: 'Technical & Vocational',
        desc: 'Combining mechanics, electronics, and computing — highly employable both locally and in international markets.',
        icon: Cpu,
        accent: '#f59e0b',
        bg: 'rgba(245,158,11,0.12)',
    },
    {
        title: 'Automotive Engineering',
        tag: 'Technical & Vocational',
        desc: 'Specialised automotive skills remain in strong demand, especially with the global shift toward electric vehicles.',
        icon: Car,
        accent: '#10b981',
        bg: 'rgba(16,185,129,0.12)',
    },
    {
        title: 'Digital Marketing',
        tag: 'Rapidly Expanding',
        desc: 'The way Sri Lanka consumes information is changing. SEO, content strategy, and social media are now core business functions.',
        icon: Megaphone,
        accent: '#06b6d4',
        bg: 'rgba(6,182,212,0.12)',
    },
    {
        title: 'Green Energy & Sustainability',
        tag: 'Emerging — "Green Collar"',
        desc: 'Solar, wind, and sustainable infrastructure are creating an entirely new category of careers focused on our planet\'s future.',
        icon: Leaf,
        accent: '#22c55e',
        bg: 'rgba(34,197,94,0.12)',
    },
];

const BlogPost3: React.FC = () => {
    return (
        <div className="blog-post-page">

            {/* ─── HERO IMAGE ─────────────────────────────────────── */}
            <div className="blog-hero">
                <img
                    src="/blog_3.jpg"
                    alt="Fast Growing Career Fields in Sri Lanka"
                    className="blog-hero-img"
                    onError={(e) => {
                        // Fallback: try other common extensions
                        const target = e.currentTarget;
                        if (target.src.endsWith('.jpg')) target.src = '/blog_3.jpeg';
                        else if (target.src.endsWith('.jpeg')) target.src = '/blog_3.png';
                    }}
                />
                <div className="blog-hero-overlay" />
                <div className="blog-hero-content">
                    <div className="blog-category-badge">
                        <TrendingUp size={12} /> Career Trends &amp; Opportunities
                    </div>
                    <h1 className="blog-hero-title">
                        Fast Growing Career Fields in Sri Lanka
                    </h1>
                    <p className="blog-hero-subtitle">
                        Discover the sectors shaping Sri Lanka's economy — and how to position yourself
                        at the forefront of the country's professional future.
                    </p>
                    <div className="blog-hero-meta">
                        <span className="blog-meta-item"><Clock size={13} /> 5 min read</span>
                        <span className="blog-meta-item"><MapPin size={13} /> Sri Lanka</span>
                        <span className="blog-meta-item"><Globe size={13} /> Career Trends</span>
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
                <p className="blog-lead">
                    The professional landscape in Sri Lanka is shifting rapidly toward high-growth
                    sectors driven by <strong>technology</strong> and <strong>economic evolution</strong>.
                    Understanding where demand is rising — and what skills employers are looking for —
                    is the first step to building a career that's both fulfilling and future-proof.
                </p>

                <div className="blog-body">

                    {/* Overview */}
                    <h2 className="blog-section-title">
                        <TrendingUp size={20} /> The Shifting Landscape
                    </h2>
                    <p>
                        Sri Lanka's economy is undergoing significant digital transformation. Businesses
                        across all sectors — from banking and retail to healthcare and logistics — are
                        investing in technology, creating demand for skilled professionals that far
                        outpaces local supply.
                    </p>
                    <p>
                        At the same time, a resurgence in <strong>vocational and technical fields</strong> reflects
                        a growing awareness that practical, hands-on expertise is just as valuable as
                        traditional academic qualifications — sometimes more so.
                    </p>

                    <hr className="blog-divider" />

                    {/* Career Fields Grid */}
                    <h2 className="blog-section-title">
                        <Zap size={20} /> Top Fast-Growing Career Fields
                    </h2>

                    <div className="career-fields-grid">
                        {careerFields.map(({ title, tag, desc, icon: Icon, accent, bg }) => (
                            <div
                                key={title}
                                className="career-field-card"
                                style={{ '--field-accent': accent, '--field-bg': bg } as React.CSSProperties}
                            >
                                <div className="field-card-header">
                                    <div className="field-card-icon">
                                        <Icon size={22} />
                                    </div>
                                    <div>
                                        <h3 className="field-card-title">{title}</h3>
                                        <span className="field-card-tag">{tag}</span>
                                    </div>
                                </div>
                                <p className="field-card-desc">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <hr className="blog-divider" />

                    {/* Data Science Deep-Dive */}
                    <h2 className="blog-section-title">
                        <Database size={20} /> Data Science &amp; IT — A Dominant Force
                    </h2>
                    <p>
                        Data Science and IT are now at the top of Sri Lanka's most-wanted professions.
                        As businesses undergo digital transformation, demand for experts in{' '}
                        <strong>data interpretation, machine learning,</strong> and{' '}
                        <strong>cybersecurity</strong> is accelerating far beyond what local universities
                        currently produce. This gap represents a major opportunity for early movers.
                    </p>

                    {/* Highlight Box */}
                    <div className="blog-highlight">
                        <p>
                            💡 <strong>Did you know?</strong> Sri Lanka's IT and BPM sector is one of the
                            country's fastest-growing export industries, generating over $1 billion in
                            annual revenue — and employers are actively competing for skilled graduates
                            and technically trained professionals.
                        </p>
                    </div>

                    {/* Technical & Voc */}
                    <h2 className="blog-section-title">
                        <Cpu size={20} /> Vocational &amp; Technical Fields — Local &amp; International Demand
                    </h2>
                    <p>
                        There is a massive resurgence in specialised technical and vocational fields such
                        as <strong>Mechatronics</strong> and <strong>Automotive Engineering</strong>.
                        These careers offer high employability both locally — in manufacturing, utilities,
                        and transport — and internationally through labour migration programmes to the
                        Middle East, Japan, South Korea, and Europe.
                    </p>
                    <p>
                        Institutions like <em>NAITA, VTA, and German Tech</em> are producing graduates
                        who are securing skilled employment faster than many degree holders.
                    </p>

                    <hr className="blog-divider" />

                    {/* Green Energy & Digital Marketing */}
                    <h2 className="blog-section-title">
                        <Leaf size={20} /> Green Energy &amp; Digital Marketing — The New Frontiers
                    </h2>
                    <p>
                        The rise of <strong>Digital Marketing</strong> reflects a fundamental change in how
                        Sri Lankans consume information. Businesses that once relied on traditional
                        advertising now need skilled professionals in SEO, content strategy, social media
                        management, and performance analytics.
                    </p>
                    <p>
                        Meanwhile, the <strong>Green Energy sector</strong> is creating entirely new
                        categories of work — from solar panel installation and energy auditing to
                        sustainable infrastructure design. These <em>"green-collar" jobs</em> are expected
                        to grow significantly over the next decade as Sri Lanka commits to renewable
                        energy targets.
                    </p>

                    <hr className="blog-divider" />

                    {/* Learnability */}
                    <h2 className="blog-section-title">
                        <Brain size={20} /> The Key Ingredient: "Learnability"
                    </h2>
                    <p>
                        What separates those who thrive in this environment from those who struggle is
                        <strong> learnability</strong> — the ability to continuously adapt, master new tools,
                        and combine practical skills with a forward-thinking mindset.
                    </p>
                    <p>
                        Whether you pursue a degree in data science, a vocational certificate in
                        automotive engineering, or a short course in digital marketing, the professionals
                        who build <em>resilient careers</em> are those who never stop learning.
                    </p>

                    {/* Closing Quote */}
                    <div className="blog-closing-quote">
                        <p>
                            Success in Sri Lanka's evolving job market depends on learnability — the
                            ability to continuously adapt, master new tools, and combine practical skills
                            with a forward-thinking mindset to build a resilient career.
                        </p>
                    </div>

                </div>
            </article>
        </div>
    );
};

export default BlogPost3;
