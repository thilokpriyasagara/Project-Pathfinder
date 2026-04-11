import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileQuestion, ChevronDown, ChevronUp, ExternalLink, GraduationCap, Wrench, Briefcase, Plus, Minus, Calendar } from 'lucide-react';
import './Resources.css';

const getFaqCategories = (t: any) => [
    {
        category: t('resources.faq_content.univ_path'),
        faqs: [
            {
                question: t('resources.faq_content.q1'),
                answer: (
                    <ul className="list-disc pl-5 space-y-2 text-left">
                        <li>{t('resources.faq_content.q1_a1')}</li>
                        <li>{t('resources.faq_content.q1_a2')}</li>
                        <li>{t('resources.faq_content.q1_a3')}</li>
                    </ul>
                )
            },
            {
                question: t('resources.faq_content.q2'),
                answer: (
                    <ul className="list-disc pl-5 space-y-2 text-left">
                        <li>{t('resources.faq_content.q2_a1')}</li>
                        <li>{t('resources.faq_content.q2_a2')}</li>
                        <li>{t('resources.faq_content.q2_a3')}</li>
                    </ul>
                )
            },
            {
                question: t('resources.faq_content.q3'),
                answer: (
                    <div className="text-left space-y-2">
                        <p>{t('resources.faq_content.q3_a1')}</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>{t('resources.faq_content.q3_a2')}</li>
                            <li>{t('resources.faq_content.q3_a3')}</li>
                            <li>{t('resources.faq_content.q3_a4')}</li>
                            <li>{t('resources.faq_content.q3_a5')}</li>
                            <li>{t('resources.faq_content.q3_a6')}</li>
                        </ul>
                        <p className="pt-2">{t('resources.faq_content.q3_a7')}</p>
                    </div>
                )
            }
        ]
    },
    {
        category: t('resources.faq_content.voc_path'),
        faqs: [
            {
                question: t('resources.faq_content.q4'),
                answer: (
                    <ul className="list-disc pl-5 space-y-2 text-left">
                        <li>{t('resources.faq_content.q4_a1')}</li>
                        <li>{t('resources.faq_content.q4_a2')}</li>
                        <li>{t('resources.faq_content.q4_a3')}</li>
                    </ul>
                )
            },
            {
                question: t('resources.faq_content.q5'),
                answer: (
                    <ul className="list-disc pl-5 space-y-2 text-left">
                        <li>{t('resources.faq_content.q5_a1')}</li>
                        <li>{t('resources.faq_content.q5_a2')}</li>
                        <li>{t('resources.faq_content.q5_a3')}</li>
                    </ul>
                )
            },
            {
                question: t('resources.faq_content.q6'),
                answer: (
                    <ul className="list-disc pl-5 space-y-2 text-left">
                        <li>{t('resources.faq_content.q6_a1')}</li>
                        <li>{t('resources.faq_content.q6_a2')}</li>
                        <li>{t('resources.faq_content.q6_a3')}</li>
                    </ul>
                )
            }
        ]
    },
    {
        category: t('resources.faq_content.career_path'),
        faqs: [
            {
                question: t('resources.faq_content.q7'),
                answer: (
                    <div className="text-left space-y-2">
                        <p>{t('resources.faq_content.q7_a1')}</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>{t('resources.faq_content.q7_a2')}</li>
                            <li>{t('resources.faq_content.q7_a3')}</li>
                            <li>{t('resources.faq_content.q7_a4')}</li>
                            <li>{t('resources.faq_content.q7_a5')}</li>
                        </ul>
                        <p className="pt-2">{t('resources.faq_content.q7_a6')}</p>
                        <p>{t('resources.faq_content.q7_a7')}</p>
                    </div>
                )
            },
            {
                question: t('resources.faq_content.q8'),
                answer: (
                    <div className="text-left space-y-2">
                        <p>{t('resources.faq_content.q8_a1')}</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>{t('resources.faq_content.q8_a2')}</li>
                            <li>{t('resources.faq_content.q8_a3')}</li>
                            <li>{t('resources.faq_content.q8_a4')}</li>
                            <li>{t('resources.faq_content.q8_a5')}</li>
                            <li>{t('resources.faq_content.q8_a6')}</li>
                        </ul>
                        <p className="pt-2">{t('resources.faq_content.q8_a7')}</p>
                    </div>
                )
            },
            {
                question: t('resources.faq_content.q9'),
                answer: (
                    <div className="text-left space-y-2">
                        <p>{t('resources.faq_content.q9_a1')}</p>
                        <p>{t('resources.faq_content.q9_a2')}</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>{t('resources.faq_content.q9_a3')}</li>
                            <li>{t('resources.faq_content.q9_a4')}</li>
                            <li>{t('resources.faq_content.q9_a5')}</li>
                            <li>{t('resources.faq_content.q9_a6')}</li>
                        </ul>
                        <p className="pt-2">{t('resources.faq_content.q9_a7')}</p>
                    </div>
                )
            },
            {
                question: t('resources.faq_content.q10'),
                answer: (
                    <ul className="list-disc pl-5 space-y-2 text-left">
                        <li>{t('resources.faq_content.q10_a1')}</li>
                        <li>{t('resources.faq_content.q10_a2')}</li>
                        <li>{t('resources.faq_content.q10_a3')}</li>
                    </ul>
                )
            }
        ]
    }
];
/* REMOVED_OLD_FAQ */const getTimelineData = (t: any) => [
    {
        title: t('resources.timeline_data.step1.title'),
        danger: false,
        items: [
            t('resources.timeline_data.step1.lines.0'),
            t('resources.timeline_data.step1.lines.1'),
            t('resources.timeline_data.step1.lines.2'),
            t('resources.timeline_data.step1.lines.3'),
            t('resources.timeline_data.step1.lines.4'),
            t('resources.timeline_data.step1.lines.5')
        ]
    },
    {
        title: t('resources.timeline_data.step2.title'),
        danger: false,
        items: [
            t('resources.timeline_data.step2.lines.0'),
            t('resources.timeline_data.step2.lines.1'),
            t('resources.timeline_data.step2.lines.2'),
            t('resources.timeline_data.step2.lines.3'),
            t('resources.timeline_data.step2.lines.4')
        ]
    },
    {
        title: t('resources.timeline_data.step3.title'),
        danger: false,
        items: [
            t('resources.timeline_data.step3.lines.0'),
            t('resources.timeline_data.step3.lines.1'),
            t('resources.timeline_data.step3.lines.2'),
            t('resources.timeline_data.step3.lines.3')
        ]
    },
    {
        title: t('resources.timeline_data.step4.title'),
        danger: false,
        items: [
            t('resources.timeline_data.step4.lines.0'),
            t('resources.timeline_data.step4.lines.1'),
            t('resources.timeline_data.step4.lines.2'),
            t('resources.timeline_data.step4.lines.3'),
            t('resources.timeline_data.step4.lines.4')
        ]
    },
    {
        title: t('resources.timeline_data.step5.title'),
        danger: false,
        items: [
            t('resources.timeline_data.step5.lines.0'),
            t('resources.timeline_data.step5.lines.1'),
            t('resources.timeline_data.step5.lines.2'),
            t('resources.timeline_data.step5.lines.3')
        ]
    },
    {
        title: t('resources.timeline_data.step6.title'),
        danger: true,
        items: [
            t('resources.timeline_data.step6.lines.0'),
            t('resources.timeline_data.step6.lines.1'),
            t('resources.timeline_data.step6.lines.2'),
            t('resources.timeline_data.step6.lines.3'),
            t('resources.timeline_data.step6.lines.4')
        ]
    }
];
/* REMOVED_OLD_TIMELINE */

const Resources: React.FC = () => {
    const { t } = useLanguage();
    const FAQ_CATEGORIES = getFaqCategories(t);
    const TIMELINE_DATA = getTimelineData(t);
    const [openFaq, setOpenFaq] = useState<string | null>('0-0');
    const [openTimeline, setOpenTimeline] = useState<number | null>(0);

    return (
        <div className="container page-wrapper" style={{ paddingTop: '2rem' }}>
            <div className="page-header" style={{ paddingTop: '1rem' }}>
                <span className="section-label">{t("resources.page.label")}</span>
                <h1 className="section-title">{t("resources.page.title")}</h1>
                <p>{t("resources.page.desc")}</p>
            </div>

            {/* Myths vs Facts section */}
            <section className="mb-12">
                <h2 className="resources-section-heading">{t("resources.myths.title")}</h2>
                <div className="grid-2-cols">
                    <div className="card-box bg-red-light">
                        <h3 className="text-danger mb-2">{t("resources.myths.univ.myth")}</h3>
                        <p><strong>Fact:</strong> {t("resources.myths.univ.fact")}</p>
                    </div>
                    <div className="card-box bg-green-light">
                        <h3 className="text-success mb-2">{t("resources.myths.voc.myth")}</h3>
                        <p><strong>Fact:</strong> {t("resources.myths.voc.fact")}</p>
                    </div>
                </div>
            </section>

            {/* Timeline Checklist section */}
            <section className="mb-12">
                <div className="timeline-section">
                    <h2 className="resources-section-heading mb-2"><Calendar size={22} /> {t("resources.timeline.title")}</h2>
                    <p className="timeline-intro">
                        {t("resources.timeline.desc")}
                    </p>

                    <div className="timeline-accordion mt-6">
                        {TIMELINE_DATA.map((step, idx) => (
                            <div key={idx} className="timeline-item">
                                <button
                                    className={`timeline-btn ${step.danger ? 'danger' : ''} ${openTimeline === idx ? 'active' : ''}`}
                                    onClick={() => setOpenTimeline(openTimeline === idx ? null : idx)}
                                >
                                    <span>{step.title}</span>
                                    {openTimeline === idx ? <Minus size={18} /> : <Plus size={18} />}
                                </button>
                                {openTimeline === idx && (
                                    <div className={`timeline-content ${step.danger ? 'danger-content' : ''}`}>
                                        <ul>
                                            {step.items.map((item, idy) => (
                                                <li key={idy}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <p className="timeline-note mt-6">
                        {t("resources.timeline.note")}
                    </p>
                </div>
            </section>

            {/* Video Guides */}
            <section className="mb-12">
                <h2 className="resources-section-heading">{t("resources.videos.title")}</h2>
                <div className="grid-3-cols">
                    {[
                        {
                            id: "w_YFEKode6M",
                            title: "AETI Orugodawatta Video",
                        },
                        {
                            id: "cDeW1z1W7es",
                            title: "“Be Pro” - VTA Corporate Profile",
                        },
                        {
                            id: "AqSU2UW2V2g",
                            title: "German Tech ගැන ඔබ දැනුවත්ද?",
                        }
                    ].map(video => (
                        <div key={video.id} className="video-card box-shadow-sm flex flex-col">
                            <iframe 
                                className="w-full h-48 bg-gray-100"
                                src={`https://www.youtube.com/embed/${video.id}`} 
                                title={video.title} 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                            <div className="video-info flex-grow">
                                <h4>{video.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Official Education & Career Resource Links */}
            <section className="mb-12">
                <h2 className="resources-section-heading"><ExternalLink size={22} /> {t("resources.official_links.title")}</h2>
                <div className="official-links-grid">

                    {/* Category 1 – University & Higher Education */}
                    <div className="official-links-card">
                        <div className="official-links-card-header university">
                            <GraduationCap size={20} />
                            <span>University &amp; Higher Education</span>
                        </div>
                        <ul className="official-links-list">
                            {[
                                { label: 'University Grants Commission', href: 'https://www.ugc.ac.lk/' },
                                { label: 'Ministry of Education', href: 'https://moe.gov.lk/en/welcome/' },
                                { label: 'Sri Lanka Institute of Advanced Technological Education', href: 'https://mohe.gov.lk/' },
                                { label: 'Open University of Sri Lanka', href: 'https://ou.ac.lk/' },
                                { label: 'Institute of Technology University of Moratuwa', href: 'https://itum.mrt.ac.lk/' },
                            ].map(link => (
                                <li key={link.href}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="official-link-item">
                                        <span>{link.label}</span>
                                        <ExternalLink size={14} className="link-arrow" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Category 2 – Vocational & Technical Training */}
                    <div className="official-links-card">
                        <div className="official-links-card-header vocational">
                            <Wrench size={20} />
                            <span>Vocational &amp; Technical Training</span>
                        </div>
                        <ul className="official-links-list">
                            {[
                                { label: 'Tertiary and Vocational Education Commission', href: 'https://www.nvq.gov.lk/Home/index.html' },
                                { label: 'Vocational Training Authority', href: 'https://course.vta.lk/' },
                                { label: 'National Apprentice & Industrial Training Authority', href: 'https://www.naita.gov.lk/' },
                                { label: 'Department of Technical Education and Training', href: 'https://dtet.gov.lk/en/' },
                                { label: 'Ceylon German Technical Training Institute', href: 'https://germantec.lk/' },
                            ].map(link => (
                                <li key={link.href}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="official-link-item">
                                        <span>{link.label}</span>
                                        <ExternalLink size={14} className="link-arrow" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Category 3 – Career & Employment Guidance */}
                    <div className="official-links-card">
                        <div className="official-links-card-header career">
                            <Briefcase size={20} />
                            <span>Career &amp; Employment Guidance</span>
                        </div>
                        <ul className="official-links-list">
                            {[
                                { label: 'Ministry of Labor', href: 'https://labourmin.gov.lk/' },
                                { label: 'National Career Guidance and Counselling Centre', href: 'https://www.globgov.com/LK/' },
                            ].map(link => (
                                <li key={link.href}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="official-link-item">
                                        <span>{link.label}</span>
                                        <ExternalLink size={14} className="link-arrow" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            {/* FAQs */}
            <section className="mb-8">
                <h2 className="resources-section-heading"><FileQuestion size={22} /> {t("resources.faqs.title")}</h2>

                <div className="faq-categories space-y-8">
                    {FAQ_CATEGORIES.map((categoryGroup, catIdx) => (
                        <div key={catIdx} className="faq-category-group">
                            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">{categoryGroup.category}</h3>
                            <div className="faq-container">
                                {categoryGroup.faqs.map((faq, idx) => {
                                    const faqId = `${catIdx}-${idx}`;
                                    const isOpen = openFaq === faqId;
                                    return (
                                        <div key={faqId} className={`faq-item ${isOpen ? 'open' : ''}`}>
                                            <button className="faq-question" onClick={() => setOpenFaq(isOpen ? null : faqId)}>
                                                <span>{faq.question}</span>
                                                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </button>
                                            {isOpen && (
                                                <div className="faq-answer">
                                                    {faq.answer}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Resources;
