

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown } from "lucide-react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsDropdownOpen(false);
  };

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-900 relative z-50">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800/30 to-gray-700/30"></div>
      
      {/* Header Content */}
      <div className="relative px-4 sm:px-6 md:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Logo/Title */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-indigo-600 rounded-lg">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4" />
              </svg>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
              Clip<span className="text-indigo-400">Flow</span>
            </h1>
          </div>

          {/* Language Selector */}
          <div className="relative z-50" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 px-2 sm:px-3 py-1 sm:py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 border border-gray-700"
            >
              <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              <span className="text-white text-xs sm:text-sm font-medium">
                <span className="hidden sm:inline">{currentLanguage.flag} {currentLanguage.name}</span>
                <span className="sm:hidden">{currentLanguage.flag} {currentLanguage.code.toUpperCase()}</span>
              </span>
              <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Responsive Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 sm:w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-[60] max-h-[70vh] overflow-y-auto">
                <div className="py-1">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`w-full px-3 py-2 sm:px-4 sm:py-2 text-left flex items-center space-x-2 sm:space-x-3 hover:bg-gray-700 transition-colors duration-150 ${
                        i18n.language === language.code ? 'bg-gray-700 text-white' : 'text-gray-300'
                      }`}
                    >
                      <span className="text-base sm:text-lg">{language.flag}</span>
                      <div className="flex flex-col">
                        <span className="text-xs sm:text-sm font-medium">{language.name}</span>
                        <span className="text-[10px] sm:text-xs text-gray-400">{language.code.toUpperCase()}</span>
                      </div>
                      {i18n.language === language.code && (
                        <span className="ml-auto text-indigo-400">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;