import { ChevronLeft, Moon, Sun, Globe, Fingerprint } from 'lucide-react';
import { useState, useEffect } from 'react';
import pcuLogo from 'figma:asset/6d2f17e84a7eff8e9b1070e18c785297c8f157b0.png';
import { t, Language } from '../utils/translations';

interface SettingsProps {
  onBack: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  language: Language;
  setLanguage: (value: Language) => void;
}

export function Settings({ onBack, isDarkMode, setIsDarkMode, language, setLanguage }: SettingsProps) {
  const [biometricEnabled, setBiometricEnabled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen pb-24 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`px-6 pt-12 pb-6 ${isDarkMode ? 'bg-[#0f1f35]' : 'bg-[#19304B]'}`}>
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="text-white">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-xl font-semibold">{t('settingsPage.title', language)}</h1>
          </div>
        </div>
        <p className="text-white/70 text-sm mt-2">{t('settingsPage.subtitle', language)}</p>
      </div>

      {/* Settings Sections */}
      <div className="px-6 py-6 space-y-6">
        {/* Appearance Section */}
        <div className={`rounded-2xl shadow-sm overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
            <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{t('settingsPage.preferences', language)}</h3>
          </div>
          
          {/* Theme Toggle */}
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-purple-900/50' : 'bg-purple-100'}`}>
                  {isDarkMode ? (
                    <Moon className={`w-5 h-5 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  ) : (
                    <Sun className={`w-5 h-5 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  )}
                </div>
                <div>
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{t('settingsPage.darkMode', language)}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t('settingsPage.darkModeDesc', language)}</p>
                </div>
              </div>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  isDarkMode ? 'bg-[#F8AD3D]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                    isDarkMode ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Language Section */}
        <div className={`rounded-2xl shadow-sm overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
            <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{t('settingsPage.selectLanguage', language)}</h3>
          </div>
          
          {/* Language Options */}
          <div className="p-4 space-y-3">
            <button
              onClick={() => setLanguage('english')}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                language === 'english'
                  ? `border-[#F8AD3D] ${isDarkMode ? 'bg-[#F8AD3D]/10' : 'bg-[#F8AD3D]/5'}`
                  : `${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center overflow-hidden ${
                  language === 'english' ? 'bg-[#F8AD3D]/20' : isDarkMode ? 'bg-blue-900/50' : 'bg-blue-100'
                }`}>
                  <svg viewBox="0 0 60 30" className="w-8 h-8">
                    <clipPath id="s">
                      <path d="M0,0 v30 h60 v-30 z"/>
                    </clipPath>
                    <clipPath id="t">
                      <path d="M30,15 h30 v15 z v-30 h-30 z h-30 v15 z v-15 h30 z"/>
                    </clipPath>
                    <g clipPath="url(#s)">
                      <path d="M0,0 v30 h60 v-30 z" fill="#b22234"/>
                      <path d="M0,3.5 h60 M0,7 h60 M0,10.5 h60 M0,14 h60 M0,17.5 h60 M0,21 h60 M0,24.5 h60 M0,28 h60" stroke="#fff" strokeWidth="2.3"/>
                      <path d="M0,0 v15 h30 v-15 z" fill="#3c3b6e"/>
                    </g>
                  </svg>
                </div>
                <div className="text-left">
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{t('settingsPage.englishLabel', language)}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t('settingsPage.englishSubtitle', language)}</p>
                </div>
              </div>
              {language === 'english' && (
                <div className="w-6 h-6 bg-[#F8AD3D] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </button>

            <button
              onClick={() => setLanguage('indonesia')}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                language === 'indonesia'
                  ? `border-[#F8AD3D] ${isDarkMode ? 'bg-[#F8AD3D]/10' : 'bg-[#F8AD3D]/5'}`
                  : `${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center overflow-hidden ${
                  language === 'indonesia' ? 'bg-[#F8AD3D]/20' : isDarkMode ? 'bg-red-900/50' : 'bg-red-100'
                }`}>
                  <svg viewBox="0 0 60 30" className="w-8 h-8">
                    <rect width="60" height="30" fill="#fff"/>
                    <rect width="60" height="15" fill="#CE1126"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{t('settingsPage.indonesiaLabel', language)}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t('settingsPage.indonesiaSubtitle', language)}</p>
                </div>
              </div>
              {language === 'indonesia' && (
                <div className="w-6 h-6 bg-[#F8AD3D] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Security Section */}
        <div className={`rounded-2xl shadow-sm overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
            <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{t('settingsPage.security', language)}</h3>
          </div>
          
          {/* Biometric Toggle */}
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-green-900/50' : 'bg-green-100'}`}>
                  <Fingerprint className={`w-5 h-5 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                </div>
                <div>
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{t('settingsPage.biometric', language)}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t('settingsPage.biometricDesc', language)}</p>
                </div>
              </div>
              <button
                onClick={() => setBiometricEnabled(!biometricEnabled)}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  biometricEnabled ? 'bg-[#F8AD3D]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                    biometricEnabled ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className={`rounded-2xl p-6 text-white ${isDarkMode ? 'bg-gradient-to-r from-[#0f1f35] to-[#1a3550]' : 'bg-gradient-to-r from-[#19304B] to-[#2a4a6f]'}`}>
          <h3 className="font-bold text-lg mb-2">{t('settingsPage.appInformation', language)}</h3>
          <div className="space-y-2 text-sm text-white/80">
            <div className="flex justify-between">
              <span>{t('settingsPage.version', language)}</span>
              <span className="font-medium text-white">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span>{t('settingsPage.lastUpdated', language)}</span>
              <span className="font-medium text-white">Jan 14, 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}