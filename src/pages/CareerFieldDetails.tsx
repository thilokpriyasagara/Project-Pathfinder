import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, BookOpen, GraduationCap, Building2, TrendingUp, CheckCircle2 } from 'lucide-react';
import './CareerFields.css';
import TechComputingContent from './TechComputingContent';
import BusinessManagementContent from './BusinessManagementContent';
import HealthcareMedicineContent from './HealthcareMedicineContent';
import ArchitectureEngineeringContent from './ArchitectureEngineeringContent';
import ArtsDesignContent from './ArtsDesignContent';
import ScienceResearchContent from './ScienceResearchContent';
import EducationContent from './EducationContent';
import SkillBasedContent from './SkillBasedContent';
import FutureTechContent from './FutureTechContent';
import KnowledgeBasedContent from './KnowledgeBasedContent';
import HospitalityTourismContent from './HospitalityTourismContent';

const CareerFieldDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { t } = useLanguage();

    if (!id) return null;

    return (
        <div className="container page-wrapper career-fields-container">
            <Link to="/fields" className="back-link">
                <ArrowLeft size={15} /> {t('nav.fields')}
            </Link>
            
            <div className="details-hero">
                <h1 className="section-title mb-4" style={{ fontSize: '2.5rem', color: '#1e293b' }}>
                    {t(`careerFields.fields.${id}`)}
                </h1>
                <p className="text-secondary mb-0 text-lg" style={{ textAlign: 'justify', lineHeight: 1.6 }}>
                    {t(`careerFields.details.${id}.overview`)}
                </p>
            </div>
            
            {id === 'tech_computing' ? (
                <TechComputingContent />
            ) : id === 'business_management' ? (
                <BusinessManagementContent />
            ) : id === 'healthcare_medicine' ? (
                <HealthcareMedicineContent />
            ) : id === 'architecture_engineering' ? (
                <ArchitectureEngineeringContent />
            ) : id === 'arts_design' ? (
                <ArtsDesignContent />
            ) : id === 'science_research' ? (
                <ScienceResearchContent />
            ) : id === 'education' ? (
                <EducationContent />
            ) : id === 'skill_based' ? (
                <SkillBasedContent />
            ) : id === 'future_tech' ? (
                <FutureTechContent />
            ) : id === 'knowledge_based' ? (
                <KnowledgeBasedContent />
            ) : id === 'hospitality_tourism' ? (
                <HospitalityTourismContent />
            ) : (
                <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div className="content-block">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem' }}>
                                <BookOpen size={24} />
                            </div>
                            <h3 style={{ margin: 0, color: '#1e293b' }}>Key Roles & Responsibilities</h3>
                        </div>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, listStyle: 'none' }}>
                            {((t(`careerFields.details.${id}.roles`, { returnObjects: true }) as string[]) || []).map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#64748b' }}>
                                    <CheckCircle2 size={18} color="var(--primary, #2563eb)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="content-block" style={{ animationDelay: '0.2s' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem' }}>
                                <GraduationCap size={24} />
                            </div>
                            <h3 style={{ margin: 0, color: '#1e293b' }}>Education Pathways</h3>
                        </div>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, listStyle: 'none' }}>
                            {((t(`careerFields.details.${id}.education`, { returnObjects: true }) as string[]) || []).map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#64748b' }}>
                                    <CheckCircle2 size={18} color="var(--primary, #2563eb)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="content-block" style={{ animationDelay: '0.4s' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem' }}>
                                <TrendingUp size={24} />
                            </div>
                            <h3 style={{ margin: 0, color: '#1e293b' }}>Industry Trends</h3>
                        </div>
                        <p style={{ color: '#64748b', lineHeight: 1.6 }}>
                            {t(`careerFields.details.${id}.trends`)}
                        </p>
                    </div>

                    <div className="content-block" style={{ animationDelay: '0.6s' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div className="icon-wrapper" style={{ marginBottom: 0, width: '3rem', height: '3rem' }}>
                                <Building2 size={24} />
                            </div>
                            <h3 style={{ margin: 0, color: '#1e293b' }}>Top Institutions</h3>
                        </div>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, listStyle: 'none' }}>
                            {((t(`careerFields.details.${id}.institutions`, { returnObjects: true }) as string[]) || []).map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#64748b' }}>
                                    <CheckCircle2 size={18} color="var(--primary, #2563eb)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CareerFieldDetails;
