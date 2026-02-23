import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './PathwayFinder.css';

type Step = 1 | 2 | 3 | 4;
type ExamLevel = 'OL' | 'AL' | '';

const PathwayFinder: React.FC = () => {
    const { t } = useLanguage();
    const [step, setStep] = useState<Step>(1);
    const [examLevel, setExamLevel] = useState<ExamLevel>('');
    const [interest, setInterest] = useState<string>('');
    const [results, setResults] = useState<any[]>([]);

    const handleNext = () => setStep((s) => Math.min(s + 1, 4) as Step);
    const handlePrev = () => setStep((s) => Math.max(s - 1, 1) as Step);

    const getPredeterminedResults = () => ({
        'OL': {
            'IT': { title: t('pathwayFinder.results_data.ol_it.title'), desc: t('pathwayFinder.results_data.ol_it.desc') },
            'Engineering': { title: t('pathwayFinder.results_data.ol_eng.title'), desc: t('pathwayFinder.results_data.ol_eng.desc') },
        },
        'AL': {
            'IT': { title: t('pathwayFinder.results_data.al_it.title'), desc: t('pathwayFinder.results_data.al_it.desc') },
            'Engineering': { title: t('pathwayFinder.results_data.al_eng.title'), desc: t('pathwayFinder.results_data.al_eng.desc') },
            'Business': { title: t('pathwayFinder.results_data.al_bus.title'), desc: t('pathwayFinder.results_data.al_bus.desc') },
        }
    });

    const calculateResults = () => {
        const PREDETERMINED_RESULTSMap = getPredeterminedResults();

        // Basic logic based on the selections
        const levelData: any = PREDETERMINED_RESULTSMap[examLevel as keyof typeof PREDETERMINED_RESULTSMap] || {};
        const exactMatch = levelData[interest as keyof typeof levelData];

        let generatedResults = [
            {
                title: t('pathwayFinder.results_data.fallback_counseling.title'),
                desc: t('pathwayFinder.results_data.fallback_counseling.desc')
            }
        ];

        if (exactMatch) {
            generatedResults.unshift(exactMatch);
        } else if (examLevel === 'AL') {
            generatedResults.unshift({ title: t('pathwayFinder.results_data.fallback_al.title'), desc: t('pathwayFinder.results_data.fallback_al.desc') });
        } else {
            generatedResults.unshift({ title: t('pathwayFinder.results_data.fallback_ol.title'), desc: t('pathwayFinder.results_data.fallback_ol.desc') });
        }

        setResults(generatedResults);
        handleNext();
    };

    return (
        <div className="container mt-8 pathway-container">
            <div className="wizard-header text-center">
                <h1 className="section-title mb-2">{t('pathwayFinder.title')}</h1>
                <p className="text-secondary mb-8">{t('pathwayFinder.subtitle')}</p>

                {/* Progress Bar */}
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${(step / 4) * 100}%` }}></div>
                </div>
                <div className="steps-indicator">
                    <span className={step >= 1 ? 'active' : ''}>{t('pathwayFinder.steps.focus')}</span>
                    <span className={step >= 2 ? 'active' : ''}>{t('pathwayFinder.steps.academics')}</span>
                    <span className={step >= 3 ? 'active' : ''}>{t('pathwayFinder.steps.interests')}</span>
                    <span className={step >= 4 ? 'active' : ''}>{t('pathwayFinder.steps.results')}</span>
                </div>
            </div>

            <div className="wizard-card box-shadow-md">

                {step === 1 && (
                    <div className="wizard-step step-1">
                        <h2 className="step-title">{t('pathwayFinder.step1.title')}</h2>
                        <div className="options-grid">
                            <button
                                className={`option-card ${examLevel === 'OL' ? 'selected' : ''}`}
                                onClick={() => setExamLevel('OL')}
                            >
                                <div className="option-content">
                                    <h3>{t('pathwayFinder.step1.ol.title')}</h3>
                                    <p>{t('pathwayFinder.step1.ol.desc')}</p>
                                </div>
                                {examLevel === 'OL' && <CheckCircle2 className="check-icon" />}
                            </button>
                            <button
                                className={`option-card ${examLevel === 'AL' ? 'selected' : ''}`}
                                onClick={() => setExamLevel('AL')}
                            >
                                <div className="option-content">
                                    <h3>{t('pathwayFinder.step1.al.title')}</h3>
                                    <p>{t('pathwayFinder.step1.al.desc')}</p>
                                </div>
                                {examLevel === 'AL' && <CheckCircle2 className="check-icon" />}
                            </button>
                        </div>
                        <div className="wizard-actions right">
                            <button className="btn btn-primary" onClick={handleNext} disabled={!examLevel}>
                                {t('pathwayFinder.step1.next')} <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="wizard-step step-2">
                        <h2 className="step-title">{t('pathwayFinder.step2.title')}</h2>
                        <p className="step-desc">{t('pathwayFinder.step2.desc')}</p>

                        <div className="form-group mt-4">
                            <label>{t('pathwayFinder.step2.label')}</label>
                            <select className="form-select">
                                <option value="">{t('pathwayFinder.step2.options.default')}</option>
                                <option value="passed">{t('pathwayFinder.step2.options.passed')}</option>
                                <option value="some">{t('pathwayFinder.step2.options.some')}</option>
                                <option value="failed">{t('pathwayFinder.step2.options.failed')}</option>
                            </select>
                        </div>

                        <div className="info-alert mt-4">
                            <strong>{t('pathwayFinder.step2.alert_title')}</strong> {t('pathwayFinder.step2.alert_desc')}
                        </div>

                        <div className="wizard-actions space-between mt-8">
                            <button className="btn btn-secondary" onClick={handlePrev}>
                                <ArrowLeft size={18} /> {t('pathwayFinder.step2.back')}
                            </button>
                            <button className="btn btn-primary" onClick={handleNext}>
                                {t('pathwayFinder.step2.next')} <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="wizard-step step-3">
                        <h2 className="step-title">{t('pathwayFinder.step3.title')}</h2>

                        <div className="options-grid three-cols">
                            {['IT', 'Engineering', 'Business', 'Healthcare', 'Creative'].map((field) => (
                                <button
                                    key={field}
                                    className={`option-card compact ${interest === field ? 'selected' : ''}`}
                                    onClick={() => setInterest(field)}
                                >
                                    <div className="option-content text-center">
                                        <h3>{t(`pathwayFinder.step3.fields.${field}`)}</h3>
                                    </div>
                                    {interest === field && <CheckCircle2 className="check-icon compact-check" />}
                                </button>
                            ))}
                        </div>

                        <div className="wizard-actions space-between mt-8">
                            <button className="btn btn-secondary" onClick={handlePrev}>
                                <ArrowLeft size={18} /> {t('pathwayFinder.step3.back')}
                            </button>
                            <button className="btn btn-primary" onClick={calculateResults} disabled={!interest}>
                                {t('pathwayFinder.step3.next')} <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="wizard-step step-4 results-step">
                        <div className="success-header text-center mb-8">
                            <div className="success-icon-wrapper mb-4">
                                <CheckCircle2 size={48} className="text-primary" />
                            </div>
                            <h2 className="step-title">{t('pathwayFinder.step4.title')}</h2>
                            <p>{t('pathwayFinder.step4.subtitle')}</p>
                        </div>

                        <div className="results-list">
                            {results.map((result, idx) => (
                                <div key={idx} className="result-card box-shadow-sm">
                                    <div className="result-badge">{t('pathwayFinder.step4.badge_prefix')}{idx + 1}</div>
                                    <h3 className="result-title">{result.title}</h3>
                                    <p className="result-desc">{result.desc}</p>
                                    <button className="btn btn-secondary mt-4 btn-sm">{t('pathwayFinder.step4.learn_more')}</button>
                                </div>
                            ))}
                        </div>

                        <div className="wizard-actions center mt-8 text-center pt-8 border-t">
                            <p className="mb-4">{t('pathwayFinder.step4.explore_more')}</p>
                            <button className="btn btn-secondary" onClick={() => { setStep(1); setExamLevel(''); setInterest(''); }}>
                                {t('pathwayFinder.step4.start_over')}
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default PathwayFinder;
