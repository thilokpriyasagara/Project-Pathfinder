import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
    Laptop, Briefcase, HeartPulse, HardHat, 
    Palette, FlaskConical, GraduationCap, 
    Wrench, Cpu, Lightbulb, Plane, ArrowRight
} from 'lucide-react';
import './CareerFields.css';

const CareerFields: React.FC = () => {
    const { t } = useLanguage();
    
    // Map fields to their corresponding icons
    const fieldData = [
        { id: 'tech_computing', icon: <Laptop size={28} /> },
        { id: 'business_management', icon: <Briefcase size={28} /> },
        { id: 'healthcare_medicine', icon: <HeartPulse size={28} /> },
        { id: 'architecture_engineering', icon: <HardHat size={28} /> },
        { id: 'arts_design', icon: <Palette size={28} /> },
        { id: 'science_research', icon: <FlaskConical size={28} /> },
        { id: 'education', icon: <GraduationCap size={28} /> },
        { id: 'skill_based', icon: <Wrench size={28} /> },
        { id: 'future_tech', icon: <Cpu size={28} /> },
        { id: 'knowledge_based', icon: <Lightbulb size={28} /> },
        { id: 'hospitality_tourism', icon: <Plane size={28} /> }
    ];

    return (
        <div className="container page-wrapper career-fields-container">
            <div className="text-center mb-12">
                <span className="section-label">Explore Pathways</span>
                <h1 className="section-title">{t('careerFields.title')}</h1>
                <p className="text-secondary mx-auto" style={{ maxWidth: '42rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                    {t('careerFields.subtitle')}
                </p>
            </div>

            <div className="grid-3-cols">
                {fieldData.map((field) => (
                    <div key={field.id} className="career-field-card">
                        <div className="icon-wrapper">
                            {field.icon}
                        </div>
                        <h3 className="career-field-title">{t(`careerFields.fields.${field.id}`)}</h3>
                        <p className="career-field-desc">
                            {String(t(`careerFields.details.${field.id}.overview`)).split('.')[0]}....
                        </p>
                        <Link to={`/fields/${field.id}`} className="btn-field-link">
                            {t('careerFields.view_btn')} <ArrowRight size={16} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CareerFields;
