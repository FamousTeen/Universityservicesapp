import { ChevronRight, User, HelpCircle, LogOut, Settings, Headphones } from 'lucide-react';
import pcuLogo from 'figma:asset/6d2f17e84a7eff8e9b1070e18c785297c8f157b0.png';
import { t, Language } from '../utils/translations';

interface ProfileProps {
  onNavigateToSettings: () => void;
  onNavigateToFAQ: () => void;
  onNavigateToContactSupport: () => void;
  onNavigateToPersonalInformation: () => void;
  onLogout: () => void;
  isDarkMode: boolean;
  language: Language;
}

export function Profile({ onNavigateToSettings, onNavigateToFAQ, onNavigateToContactSupport, onNavigateToPersonalInformation, onLogout, isDarkMode, language }: ProfileProps) {
  const menuItems = [
    {
      section: t('profilePage.account', language),
      items: [
        { icon: User, label: t('profilePage.personalInformation', language), color: '#F8AD3D', action: onNavigateToPersonalInformation },
        { icon: HelpCircle, label: t('profilePage.faq', language), color: '#3b82f6', action: onNavigateToFAQ }
      ]
    },
    {
      section: t('profilePage.support', language),
      items: [
        { icon: Headphones, label: t('profilePage.contactSupport', language), color: '#a855f7', action: onNavigateToContactSupport },
        { icon: Settings, label: t('profilePage.settings', language), color: '#64748b', action: onNavigateToSettings }
      ]
    }
  ];

  const academicInfo = [
    { label: t('profilePage.studentID', language), value: '6012345678' },
    { label: t('profilePage.program', language), value: 'Architecture' },
    { label: t('profilePage.year', language), value: '3rd Year' },
    { label: t('profilePage.gpa', language), value: '3.42' }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header with Profile */}
      <div className={`px-6 pt-12 pb-8 rounded-b-3xl ${isDarkMode ? 'bg-[#0f1f35]' : 'bg-[#19304B]'}`}>
        <div className="flex items-center justify-between mb-6">
          <img src={pcuLogo} alt="PCU Logo" className="h-10" />
          <button className="text-white" onClick={onNavigateToSettings}>
            <Settings className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-[#F8AD3D] rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
            SN
          </div>
          <h2 className="text-white text-2xl font-bold mb-1">Student Name</h2>
          <p className="text-white/70 text-sm">student@pcu.ac.th</p>
          
          {/* Academic Stats */}
          <div className="grid grid-cols-2 gap-4 w-full mt-6">
            {academicInfo.map((info, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-4">
                <p className="text-white/70 text-xs mb-1">{info.label}</p>
                <p className="text-white font-semibold">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6 py-6 space-y-6">
        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className={`text-sm font-medium mb-3 px-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{section.section}</h3>
            <div className={`rounded-2xl shadow-sm overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              {section.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  onClick={item.action}
                  className={`w-full flex items-center gap-4 p-4 transition-colors
                    ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}
                    ${itemIndex !== section.items.length - 1 ? (isDarkMode ? 'border-b border-gray-700' : 'border-b border-gray-100') : ''}
                  `}
                >
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <span className={`flex-1 text-left font-medium ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{item.label}</span>
                  <ChevronRight className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Quick Stats */}
        <div>
          <h3 className={`text-sm font-medium mb-3 px-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t('profilePage.thisSemester', language)}</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className={`rounded-2xl p-4 shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <p className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>8</p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t('profilePage.courses', language)}</p>
            </div>

            <div className={`rounded-2xl p-4 shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-green-500/20' : 'bg-green-100'}`}>
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>24</p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t('profilePage.credits', language)}</p>
            </div>

            <div className={`rounded-2xl p-4 shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-[#F8AD3D]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#F8AD3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <p className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>Rp 0</p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t('profilePage.collegeArrears', language)}</p>
            </div>

            <div className={`rounded-2xl p-4 shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-purple-500/20' : 'bg-purple-100'}`}>
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>86%</p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t('profilePage.attendance', language)}</p>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button className={`w-full rounded-2xl p-4 shadow-sm flex items-center justify-center gap-2 text-red-500 font-medium transition-colors ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-red-50'}`} onClick={onLogout}>
          <LogOut className="w-5 h-5" />
          <span>{t('profilePage.logout', language)}</span>
        </button>

        {/* Version Info */}
        <div className="text-center pb-6">
          <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{t('profilePage.version', language)}</p>
        </div>
      </div>
    </div>
  );
}