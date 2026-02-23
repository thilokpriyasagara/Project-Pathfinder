import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Compass, Menu, X, Globe } from 'lucide-react';

const Header: React.FC = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'si' : 'en');
    };

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/pathway-finder', label: t('nav.pathways') },
        { path: '/opportunities', label: t('nav.opportunities') },
        { path: '/fields', label: t('nav.fields') },
        { path: '/resources', label: t('nav.resources') },
    ];

    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="brand">
                    <Compass className="brand-icon" />
                    <span className="brand-text">PathFinder</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button onClick={toggleLanguage} className="lang-switcher" aria-label="Toggle Language">
                        <Globe className="lang-icon" size={18} />
                        <span className="lang-text">{language === 'en' ? 'සිංහල' : 'English'}</span>
                    </button>
                </nav>

                {/* Mobile menu toggle */}
                <div className="mobile-menu-toggle">
                    <button onClick={toggleLanguage} className="lang-switcher mobile" aria-label="Toggle Language">
                        <span className="lang-text">{language === 'en' ? 'සිං' : 'EN'}</span>
                    </button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu" className="menu-btn">
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="mobile-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
