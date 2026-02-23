import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-col">
                    <h3 className="footer-brand">PathFinder</h3>
                    <p className="footer-desc">
                        Your friendly guide to higher education and vocational training opportunities in Sri Lanka.
                        Empowering school leavers to make informed career choices.
                    </p>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/">{t('nav.home')}</Link></li>
                        <li><Link to="/pathway-finder">{t('nav.pathways')}</Link></li>
                        <li><Link to="/opportunities">{t('nav.opportunities')}</Link></li>
                        <li><Link to="/fields">{t('nav.fields')}</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Information</h4>
                    <ul className="footer-links">
                        <li><Link to="/resources">{t('nav.resources')}</Link></li>
                        <li><Link to="/about">{t('nav.about')}</Link></li>
                        <li><Link to="/contact">{t('nav.contact')}</Link></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} PathFinder. Educational Platform.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
