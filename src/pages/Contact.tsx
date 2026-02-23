import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="container mt-8 pb-8">
            <div className="text-center mb-12">
                <h1 className="section-title mb-2">{t('contact.title')}</h1>
                <p className="text-secondary max-w-2xl mx-auto">
                    {t('contact.subtitle')}
                </p>
            </div>

            <div className="grid-2-cols max-w-2xl mx-auto">
                <div className="card-box text-center bg-surface">
                    <div className="flex-center mx-auto mb-4" style={{ width: '48px', height: '48px', backgroundColor: '#EFF6FF', borderRadius: '50%', color: '#2563EB', justifyContent: 'center' }}>
                        <Phone size={24} />
                    </div>
                    <h3 className="mb-2">{t('contact.helpline.title')}</h3>
                    <p className="text-secondary mb-2">{t('contact.helpline.desc')}</p>
                    <a href="tel:1934" className="fw-600">{t('contact.helpline.value')}</a>
                </div>

                <div className="card-box text-center bg-surface">
                    <div className="flex-center mx-auto mb-4" style={{ width: '48px', height: '48px', backgroundColor: '#EFF6FF', borderRadius: '50%', color: '#2563EB', justifyContent: 'center' }}>
                        <Mail size={24} />
                    </div>
                    <h3 className="mb-2">{t('contact.email.title')}</h3>
                    <p className="text-secondary mb-2">{t('contact.email.desc')}</p>
                    <a href="mailto:info@pathfinder.lk" className="fw-600">info@pathfinder.lk</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
