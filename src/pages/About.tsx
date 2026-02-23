import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="container mt-8 pb-8">
            <div className="text-center mb-8">
                <h1 className="section-title mb-2">{t('about.title')}</h1>
            </div>
            <div className="max-w-2xl mx-auto text-secondary" style={{ lineHeight: 1.8 }}>
                <p className="mb-4">
                    {t('about.p1')}
                </p>
                <p className="mb-4">
                    {t('about.p2')}
                </p>
                <p>
                    {t('about.p3')}
                </p>
            </div>
        </div>
    );
};

export default About;
