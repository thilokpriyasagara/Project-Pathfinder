import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, Compass, Lightbulb, MessageCircle, Star } from 'lucide-react';
import './BlogPost1.css';

const BlogPost1: React.FC = () => {
    return (
        <div className="blog-post-page">

            {/* ─── HERO IMAGE ─────────────────────────────────────── */}
            <div className="blog-hero">
                <img
                    src="/blog_1.jpeg"
                    alt="Choosing the Right Path After O/L & A/L"
                    className="blog-hero-img"
                />
                <div className="blog-hero-overlay" />
                <div className="blog-hero-content">
                    <div className="blog-category-badge">
                        <BookOpen size={12} /> Career Insights &amp; Guidance
                    </div>
                    <h1 className="blog-hero-title">
                        Choosing the Right Path After O/L &amp; A/L
                    </h1>
                    <div className="blog-hero-meta">
                        <span className="blog-meta-item">
                            <Clock size={13} /> 5 min read
                        </span>
                        <span className="blog-meta-item">
                            <Star size={13} /> Career Guidance
                        </span>
                        <span className="blog-meta-item">
                            <Compass size={13} /> Pathways &amp; Planning
                        </span>
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

                {/* Lead / Intro */}
                <p className="blog-lead">
                    Finishing your O/Ls or A/Ls feels like standing at a crossroads. One road leads to
                    higher studies, another to vocational training, and yet another to stepping directly
                    into the working world. It can feel exciting… but also overwhelming.
                </p>

                <div className="blog-body">

                    {/* Section 1 */}
                    <h2 className="blog-section-title">
                        <Compass size={20} /> There Is No "One Perfect Path"
                    </h2>
                    <p>
                        The truth is, there is no <strong>"one perfect path"</strong> for everyone. The right
                        choice depends on <em>you</em> — your interests, strengths, and goals. Instead of
                        following what others expect, take a moment to reflect. What subjects do you enjoy
                        the most? What kind of work excites you? Do you prefer hands-on learning or
                        academic study?
                    </p>

                    <hr className="blog-divider" />

                    {/* Section 2 */}
                    <h2 className="blog-section-title">
                        <BookOpen size={20} /> University vs. Professional Training
                    </h2>
                    <p>
                        For some, university is the ideal next step. For others, professional courses or
                        technical training programs can open doors to successful and rewarding careers
                        much faster. In today's world, <strong>skills matter just as much as degrees</strong> —
                        sometimes even more.
                    </p>

                    {/* Highlight box */}
                    <div className="blog-highlight">
                        <p>
                            💡 Whether you choose university, a professional course, or vocational
                            training — what matters is that you choose <strong>intentionally</strong>.
                            Know <em>why</em> you are choosing that path, and commit to making the most of it.
                        </p>
                    </div>

                    {/* Section 3 */}
                    <h2 className="blog-section-title">
                        <Lightbulb size={20} /> Explore First, Decide Next
                    </h2>
                    <p>
                        It's also important to explore. Talk to teachers, professionals, or career
                        counselors. Use online resources, attend workshops, and don't be afraid to ask
                        questions. Every piece of information helps you make a more confident decision.
                    </p>

                    <hr className="blog-divider" />

                    {/* Section 4 */}
                    <h2 className="blog-section-title">
                        <MessageCircle size={20} /> Your First Choice Doesn't Define You
                    </h2>
                    <p>
                        Remember, your first choice doesn't define your entire life. Many successful
                        people change their paths along the way. What matters most is starting somewhere
                        that feels right for <em>you</em>.
                    </p>

                    {/* Closing motivational quote */}
                    <div className="blog-closing-quote">
                        <p>
                            Your future is not a race — it's a journey. Choose a path that helps you grow,
                            learn, and become the person you want to be.
                        </p>
                    </div>

                </div>
            </article>
        </div>
    );
};

export default BlogPost1;
