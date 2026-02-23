import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <div className="hero-text-content">
                        <h1 className="hero-title">
                            {t('home.hero_title')} <span className="highlight">Beyond O/L & A/L</span>
                        </h1>
                        <p className="hero-subtitle">
                            {t('home.hero_subtitle')}
                        </p>
                        <div className="hero-actions">
                            <Link to="/pathway-finder" className="btn btn-primary">
                                {t('home.cta_start')} <ArrowRight size={20} />
                            </Link>
                            <Link to="/opportunities" className="btn btn-secondary">
                                {t('home.cta_explore')}
                            </Link>
                        </div>
                    </div>
                    <div className="hero-image-placeholder">
                        {/* Conceptual abstract art/illustration using CSS */}
                        <div className="abstract-shape shape-1"></div>
                        <div className="abstract-shape shape-2"></div>
                        <div className="abstract-shape shape-3"></div>
                        <div className="floating-card card-1">
                            <GraduationCap className="icon" size={32} />
                            <span>{t('home.card_1')}</span>
                        </div>
                        <div className="floating-card card-2">
                            <Briefcase className="icon" size={32} />
                            <span>{t('home.card_2')}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats or Features */}
            <section className="features bg-light">
                <div className="container">
                    <div className="feature-grid">
                        <div className="feature-card">
                            <div className="feature-icon bg-blue-light">
                                <BookOpen className="text-blue" size={28} />
                            </div>
                            <h3>{t('home.features_1_title')}</h3>
                            <p>{t('home.features_1_desc')}</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon bg-teal-light">
                                <GraduationCap className="text-teal" size={28} />
                            </div>
                            <h3>{t('home.features_2_title')}</h3>
                            <p>{t('home.features_2_desc')}</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon bg-orange-light">
                                <Briefcase className="text-orange" size={28} />
                            </div>
                            <h3>{t('home.features_3_title')}</h3>
                            <p>{t('home.features_3_desc')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
