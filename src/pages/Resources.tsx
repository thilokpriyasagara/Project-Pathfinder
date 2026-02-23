import React, { useState } from 'react';
import { PlayCircle, FileQuestion, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ_DATA = [
    { question: "What should I do if I fail my A/L exams?", answer: "Don't panic! You can either retake the exams or immediately start a vocational training program (NVQ level 4 or 5) depending on your O/L results. Many successful professionals started through the vocational route." },
    { question: "Is a private degree better than vocational training?", answer: "Not necessarily. A private degree is academic, while vocational training is heavily practical. If you want to enter the workforce quickly with hands-on skills (like in IT, hospitality, or technical trades), vocational training is highly effective and often more affordable." },
    { question: "How do I apply for government vocational courses?", answer: "You can apply through the official websites of VTA, NAITA, or NYSC. Check our 'Opportunities' page regularly for the latest gazettes and intake announcements." }
];

const Resources: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="container mt-8 pb-8">
            <div className="text-center mb-8">
                <h1 className="section-title mb-2">Awareness & Guidance Resources</h1>
                <p className="text-secondary max-w-2xl mx-auto">
                    Explore articles, videos, and FAQs designed to help you make the right choice for your future.
                </p>
            </div>

            {/* Myths vs Facts section */}
            <section className="mb-12">
                <h2 className="text-xl fw-600 mb-6">Common Myths vs Facts</h2>
                <div className="grid-2-cols">
                    <div className="card-box bg-red-light">
                        <h3 className="text-danger mb-2">Myth: University is the only path to success.</h3>
                        <p><strong>Fact:</strong> Over 60% of modern high-paying jobs in IT and technical fields require skills and certifications over traditional degrees.</p>
                    </div>
                    <div className="card-box bg-green-light">
                        <h3 className="text-success mb-2">Myth: Vocational training is for dropouts.</h3>
                        <p><strong>Fact:</strong> The NVQ (National Vocational Qualification) framework is internationally recognized and can even lead to a degree (NVQ Level 7).</p>
                    </div>
                </div>
            </section>

            {/* Video Guides */}
            <section className="mb-12">
                <div className="flex-between mb-6">
                    <h2 className="text-xl fw-600">Video Guides</h2>
                </div>
                <div className="grid-3-cols">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="video-card box-shadow-sm">
                            <div className="video-thumbnail">
                                <PlayCircle size={48} className="play-icon" />
                            </div>
                            <div className="video-info">
                                <h4>Understanding the NVQ Framework</h4>
                                <p className="text-muted text-sm mt-1">5 mins watch</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQs */}
            <section className="mb-8">
                <div className="flex-between mb-6">
                    <h2 className="text-xl fw-600 flex-center gap-2"><FileQuestion /> Frequently Asked Questions</h2>
                </div>
                <div className="faq-container">
                    {FAQ_DATA.map((faq, idx) => (
                        <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                            <button className="faq-question" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                                <span>{faq.question}</span>
                                {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                            {openFaq === idx && (
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Resources;
