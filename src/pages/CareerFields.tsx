import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const CareerFields: React.FC = () => {
    const { t } = useLanguage();
    const fields = ['it', 'engineering', 'hospitality', 'creative', 'business', 'healthcare'];

    return (
        <div className="container mt-8 pb-8">
            <div className="text-center mb-8">
                <h1 className="section-title mb-2">{t('careerFields.title')}</h1>
                <p className="text-secondary max-w-2xl mx-auto">
                    {t('careerFields.subtitle')}
                </p>
            </div>

            <div className="grid-3-cols">
                {fields.map((field) => (
                    <div key={field} className="card-box bg-light" style={{ backgroundColor: 'white' }}>
                        <h3 className="mb-2">{t(`careerFields.fields.${field}`)}</h3>
                        <p className="text-secondary mb-4 text-sm">{t('careerFields.card_desc')}</p>
                        <button className="btn btn-secondary btn-sm" style={{ width: '100%' }}>{t('careerFields.view_btn')}</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CareerFields;
