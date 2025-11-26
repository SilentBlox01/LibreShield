
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, Wrench, Home, Heart, Moon, Sun, Palette, Globe, Layers } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ThemeColor } from '../types';
import { LANGUAGES } from '../data/locales';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, themeColor, setThemeColor, language, setLanguage, t, dir } = useApp();
  const location = useLocation();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showLangPicker, setShowLangPicker] = useState(false);

  // Detect scroll for navbar styling (Threshold updated to 50px)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path 
    ? "text-primary-700 font-semibold bg-primary-50/80 dark:bg-primary-900/30 dark:text-primary-400" 
    : "text-slate-500 hover:text-primary-600 hover:bg-slate-50 font-medium dark:text-slate-400 dark:hover:text-primary-400 dark:hover:bg-slate-800";

  const colors: { id: ThemeColor, color: string }[] = [
    { id: 'teal', color: '#14b8a6' },
    { id: 'blue', color: '#3b82f6' },
    { id: 'violet', color: '#8b5cf6' },
    { id: 'rose', color: '#f43f5e' },
    { id: 'amber', color: '#f59e0b' },
  ];

  const BetaBadge = () => (
    <span className="px-1.5 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 text-[9px] font-extrabold uppercase tracking-widest border border-primary-100 dark:border-primary-800 select-none ml-2 self-center">
        Beta
    </span>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-300">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled || isMenuOpen 
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo Section with Scroll Animation */}
            <Link to="/" className="flex items-center gap-2.5 group select-none">
              <div className={`relative transition-all duration-500 ease-out ${scrolled ? 'scale-110 opacity-100' : 'scale-100 opacity-90'}`}>
                <div className="absolute inset-0 bg-primary-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-tr from-primary-600 to-primary-400 text-white p-2.5 rounded-xl shadow-lg shadow-primary-600/20 group-hover:scale-105 transition-transform duration-300">
                    <Shield size={24} strokeWidth={2.5} />
                </div>
              </div>
              <div className="flex items-center">
                <span className={`text-xl font-bold text-slate-800 dark:text-white tracking-tight transition-all duration-500 ${scrolled ? 'translate-x-1' : ''}`}>
                    {t.common.appName}
                </span>
                <BetaBadge />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-2 rtl:space-x-reverse">
              <Link to="/" className={`px-5 py-2.5 rounded-xl transition-all duration-200 ${isActive('/')}`}>{t.nav.home}</Link>
              <Link to="/tools" className={`px-5 py-2.5 rounded-xl transition-all duration-200 ${isActive('/tools')}`}>{t.nav.tools}</Link>
              <Link to="/hub" className={`px-5 py-2.5 rounded-xl transition-all duration-200 ${isActive('/hub')}`}>{t.nav.hub}</Link>
              
              <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2"></div>
              
              {/* Language Picker */}
              <div className="relative">
                <button 
                  onClick={() => setShowLangPicker(!showLangPicker)}
                  className="p-2.5 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-primary-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  <Globe size={20} />
                  <span className="text-sm font-bold uppercase">{language}</span>
                </button>
                
                {showLangPicker && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setShowLangPicker(false)}></div>
                    <div className={`absolute top-full mt-2 w-48 max-h-80 overflow-y-auto bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 z-20 animate-scale-in ${dir === 'rtl' ? 'left-0' : 'right-0'}`}>
                      {LANGUAGES.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => { setLanguage(l.code); setShowLangPicker(false); }}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-slate-800 ${language === l.code ? 'text-primary-600 dark:text-primary-400 font-bold bg-slate-50 dark:bg-slate-800' : 'text-slate-600 dark:text-slate-300'}`}
                        >
                          <span className="text-lg">{l.flag}</span>
                          <span className="text-sm">{l.name}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Theme Color Picker */}
              <div className="relative">
                <button 
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  className="p-2.5 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-primary-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-primary-400 transition-colors"
                >
                  <Palette size={20} />
                </button>
                
                {showColorPicker && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setShowColorPicker(false)}></div>
                    <div className={`absolute top-full mt-2 p-2 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 flex gap-2 z-20 animate-scale-in ${dir === 'rtl' ? 'left-0' : 'right-0'}`}>
                      {colors.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => { setThemeColor(c.id); setShowColorPicker(false); }}
                          className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${themeColor === c.id ? 'border-slate-400 dark:border-slate-400 scale-110' : 'border-transparent'}`}
                          style={{ backgroundColor: c.color }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <button 
                onClick={toggleTheme}
                className="p-2.5 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-primary-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-primary-400 transition-colors"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button 
                  onClick={() => setShowLangPicker(!showLangPicker)}
                  className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
              >
                 <Globe size={22} />
              </button>
              {/* Mobile Lang Picker Overlay */}
              {showLangPicker && (
                  <div className="absolute top-20 right-4 bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 rounded-xl z-50 p-2 grid grid-cols-2 gap-2 w-64">
                       {LANGUAGES.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => { setLanguage(l.code); setShowLangPicker(false); }}
                          className={`flex items-center gap-2 px-2 py-2 rounded-lg text-left ${language === l.code ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 font-bold' : 'text-slate-600 dark:text-slate-300'}`}
                        >
                          <span>{l.flag}</span>
                          <span className="text-xs">{l.code.toUpperCase()}</span>
                        </button>
                      ))}
                  </div>
              )}
              
              <button 
                className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 active:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden absolute w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? 'max-h-[600px] opacity-100 shadow-xl' : 'max-h-0 opacity-0'}`}>
          <div className="p-4 space-y-2">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-4 rounded-2xl ${isActive('/')}`}
            >
              <Home size={22} className="opacity-80" /> {t.nav.home}
            </Link>
            <Link 
              to="/tools" 
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-4 rounded-2xl ${isActive('/tools')}`}
            >
              <Wrench size={22} className="opacity-80" /> {t.nav.tools}
            </Link>
            <Link 
              to="/hub" 
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-4 rounded-2xl ${isActive('/hub')}`}
            >
              <Layers size={22} className="opacity-80" /> {t.nav.hub}
            </Link>
            
            <div className="px-4 py-4 border-t border-slate-100 dark:border-slate-800 mt-2 flex justify-between items-center">
               <span className="text-sm font-bold text-slate-500">{t.nav.theme}</span>
               <div className="flex gap-3">
                  <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800"
                  >
                    {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                  </button>
                  {colors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setThemeColor(c.id)}
                    className={`w-8 h-8 rounded-full border-2 transition-transform ${themeColor === c.id ? 'border-slate-400 dark:border-slate-400 scale-110' : 'border-transparent'}`}
                    style={{ backgroundColor: c.color }}
                  />
                ))}
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Spacer for fixed header */}
      <div className="h-20"></div>

      {/* Main Content */}
      <main className="flex-grow w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2.5">
                  <div className="bg-gradient-to-tr from-primary-600 to-primary-400 text-white p-2 rounded-lg shadow-md">
                    <Shield size={18} strokeWidth={2.5} />
                  </div>
                  <span className="font-bold text-xl text-slate-800 dark:text-white">{t.common.appName}</span>
                  <BetaBadge />
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-sm">
                {t.home.heroDesc}
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider">{t.common.seeMore}</h4>
              <div className="flex flex-col space-y-3">
                <Link to="/" className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors w-fit">{t.nav.home}</Link>
                <Link to="/assessment" className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors w-fit">{t.nav.assessment}</Link>
                <Link to="/tools" className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors w-fit">{t.nav.tools}</Link>
                <Link to="/hub" className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors w-fit">{t.nav.hub}</Link>
                <Link to="/faq" className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors w-fit">{t.nav.faq}</Link>
                <Link to="/about" className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors w-fit">{t.nav.about}</Link>
              </div>
            </div>

            <div className="space-y-4">
               <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider">{t.nav.legal}</h4>
               <div className="flex flex-col space-y-3">
                 <Link to="/terms" className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors w-fit">{t.nav.terms}</Link>
                 <Link to="/privacy" className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors w-fit">{t.nav.privacy}</Link>
                 <a href="https://github.com/SilentBlox01/LibreShield" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors w-fit flex items-center gap-2">
                   GitHub
                 </a>
               </div>
            </div>
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400 dark:text-slate-500">
             <p>&copy; {new Date().getFullYear()} LibreShield. {t.common.openSource}.</p>
             <p className="flex items-center gap-1">
                {t.common.free} <Heart size={14} className="text-red-400 fill-red-400" />
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
