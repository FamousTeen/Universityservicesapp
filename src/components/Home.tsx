import { HelpCircle, Clock, TrendingUp, Calendar, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, useRef } from 'react';
import pcuLogo from 'figma:asset/6d2f17e84a7eff8e9b1070e18c785297c8f157b0.png';
import wggLogo from 'figma:asset/3e5edf93291ac9642ec08c6edd0feaa2ff5204da.png';
import { t, Language } from '../utils/translations';

interface HomeProps {
  onNavigateToFAQ: () => void;
  onNavigateToWGG?: () => void;
  onNavigateToLibrary?: () => void;
  onNavigateToStudentComplaint?: () => void;
  isDarkMode: boolean;
  language: Language;
}

export function Home({ onNavigateToFAQ, onNavigateToWGG, onNavigateToLibrary, onNavigateToStudentComplaint, isDarkMode, language }: HomeProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6" />
        </svg>
      ),
      label: 'PRS'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Finance'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Schedule'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      label: 'Grade'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      label: 'Library'
    },
    {
      icon: (
        <img src={wggLogo} alt="WGG" className="w-6 h-6 object-contain" />
      ),
      label: 'WGG'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      label: 'Attendance'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      label: 'Complaint'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
      ),
      label: 'Scan QR'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      label: 'SKKK'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Transcript'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 11h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      label: 'Counseling'
    }
  ];

  const itemsPerPage = 6; // 2 rows × 3 columns
  const totalPages = Math.ceil(quickActions.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      scrollToPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      scrollToPage(currentPage - 1);
    }
  };

  const scrollToPage = (page: number) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * page;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const todayCourses = [
    {
      id: 1,
      name: 'Manual Drawing',
      instructor: 'Prof. Sarah Anderson',
      time: '14:00',
      durationValue: '2.3',
      room: 'Room 23D',
      color: '#F8AD3D'
    },
    {
      id: 2,
      name: 'Digital Design',
      instructor: 'Dr. Michael Chen',
      time: '16:30',
      durationValue: '1.5',
      room: 'Lab 102',
      color: '#19304B'
    }
  ];

  const quickStats = [
    { label: t('home.gpa', language), value: '3.42', icon: TrendingUp },
    { label: t('home.credits', language), value: '84', icon: null },
    { label: 'Semester', value: '6th', icon: null }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`px-6 pt-12 pb-8 rounded-b-3xl ${isDarkMode ? 'bg-[#0f1f35]' : 'bg-[#19304B]'}`}>
        <div className="flex items-center justify-between mb-6">
          <img src={pcuLogo} alt="PCU Logo" className="h-10" />
          <button onClick={onNavigateToFAQ} className="relative w-10 h-10 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 shadow-lg hover:bg-white/25 hover:scale-105 transition-all duration-200">
            <HelpCircle className="w-6 h-6 text-white" />
          </button>
        </div>
        
        <div>
          <p className="text-white/70 text-sm mb-1">{t('home.greeting', language)}</p>
          <h1 className="text-white text-2xl font-bold">Student Name</h1>
        </div>

        {/* Quick Actions */}
        <div className="relative mt-6">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory"
          >
            <div className="flex">
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="min-w-full snap-start px-6">
                  <div className="grid grid-cols-3 grid-rows-2 gap-4">
                    {quickActions
                      .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                      .map((action, index) => (
                        <button 
                          key={index} 
                          className="flex flex-col items-center justify-center py-3 group"
                          onClick={action.label === 'WGG' ? onNavigateToWGG : action.label === 'Library' ? onNavigateToLibrary : action.label === 'Complaint' ? onNavigateToStudentComplaint : undefined}
                        >
                          <div className="w-14 h-14 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center mb-2 border border-white/20 shadow-lg group-hover:bg-white/25 group-hover:scale-105 transition-all duration-200">
                            {action.icon}
                          </div>
                          <span className="text-white text-xs font-medium">{action.label}</span>
                        </button>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-4">
            {currentPage > 0 ? (
              <button 
                onClick={handlePrev}
                className="flex items-center gap-1 text-[#F8AD3D] bg-[#F8AD3D]/10 backdrop-blur-md px-3 py-2 rounded-full text-sm font-medium border border-[#F8AD3D]/20 shadow-md hover:bg-[#F8AD3D]/20 hover:scale-105 transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{t('home.previous', language)}</span>
              </button>
            ) : (
              <div></div>
            )}
            
            {currentPage < totalPages - 1 ? (
              <button 
                onClick={handleNext}
                className="flex items-center gap-1 text-[#F8AD3D] bg-[#F8AD3D]/10 backdrop-blur-md px-3 py-2 rounded-full text-sm font-medium border border-[#F8AD3D]/20 shadow-md hover:bg-[#F8AD3D]/20 hover:scale-105 transition-all duration-200"
              >
                <span>{t('home.next', language)}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>

      {/* Progress Card */}
      <div className="px-6 -mt-6">
        <div className="bg-gradient-to-br from-[#19304B]/80 to-[#2a4563]/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold">{t('home.yourProgress', language)}</h2>
            <button className="text-white/70">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
          <p className="text-white/60 text-sm mb-4">120 SKS</p>
          <div className="grid grid-cols-3 gap-4">
            {quickStats.map((stat, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-white/70 text-xs">{stat.label}</p>
                </div>
                <p className="text-white text-xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Today Course */}
      <div className="px-6 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{t('home.todayCourse', language)}</h3>
          <button className="text-[#F8AD3D] bg-[#F8AD3D]/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-[#F8AD3D]/20 hover:bg-[#F8AD3D]/20 transition-all">{t('home.seeAll', language)}</button>
        </div>

        <div className="space-y-3">
          {todayCourses.map((course) => (
            <div key={course.id} className={`rounded-2xl p-4 backdrop-blur-xl border ${isDarkMode ? 'bg-gray-800/60 border-white/5 shadow-lg shadow-gray-900/20' : 'bg-white/70 border-white/40 shadow-lg shadow-gray-200/50'}`}>
              <div className="flex gap-4">
                <div className={`w-1 rounded-full`} style={{ backgroundColor: course.color }}></div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{course.name}</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{course.durationValue} {t('home.hours', language)} • {course.room}</p>
                    </div>
                    <div className={`flex items-center gap-1 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{course.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-8 h-8 bg-[#F8AD3D] rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {course.instructor.split(' ').map(n => n[0]).join('')}
                    </div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{course.instructor}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Events Section - Horizontal Carousel */}
      <div className="mt-6 pb-6">
        <div className="px-6 flex items-center justify-between mb-4">
          <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{t('home.upcomingEvents', language)}</h3>
          <button className="text-[#F8AD3D] bg-[#F8AD3D]/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-[#F8AD3D]/20 hover:bg-[#F8AD3D]/20 transition-all">{t('home.viewAll', language)}</button>
        </div>

        <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex gap-4 px-6 pb-2">
            {/* Event Card 1 */}
            <div className="min-w-[280px] bg-gradient-to-br from-[#19304B]/80 to-[#2a4563]/80 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-white/10">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 bg-[#F8AD3D] rounded-xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <span className="text-[#F8AD3D] text-xs font-semibold bg-[#F8AD3D]/20 backdrop-blur-sm px-3 py-1 rounded-full border border-[#F8AD3D]/20">
                  {t('home.tomorrow', language)}
                </span>
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">Architecture Exhibition 2024</h4>
              <p className="text-white/70 text-sm mb-4">Annual showcase of student works and innovations</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Jan 14, 2026 • 09:00 AM</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>PCU Main Hall</span>
                </div>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="min-w-[280px] bg-gradient-to-br from-[#F8AD3D]/80 to-[#f5a02d]/80 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-white/20">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-6 h-6 text-[#F8AD3D]" />
                </div>
                <span className="text-[#19304B] text-xs font-semibold bg-white/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                  {t('home.thisWeek', language)}
                </span>
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">Guest Lecture Series</h4>
              <p className="text-white/90 text-sm mb-4">Renowned architect discussing sustainable design</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Jan 17, 2026 • 02:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Auditorium A</span>
                </div>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="min-w-[280px] bg-gradient-to-br from-purple-600/80 to-purple-700/80 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-white/10">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-white text-xs font-semibold bg-white/25 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                  {t('home.nextWeek', language)}
                </span>
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">Workshop: 3D Modeling</h4>
              <p className="text-white/90 text-sm mb-4">Hands-on training with industry tools</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Jan 20, 2026 • 10:00 AM</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Computer Lab 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Section - Vertical Carousel with Images */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{t('home.latestNews', language)}</h3>
          <button className="text-[#F8AD3D] bg-[#F8AD3D]/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-[#F8AD3D]/20 hover:bg-[#F8AD3D]/20 transition-all">{t('home.seeAll', language)}</button>
        </div>

        <div className="space-y-3">
          {/* News Card 1 */}
          <div className={`rounded-2xl overflow-hidden backdrop-blur-xl border ${isDarkMode ? 'bg-gray-800/60 border-white/5 shadow-lg shadow-gray-900/20' : 'bg-white/70 border-white/40 shadow-lg shadow-gray-200/50'}`}>
            <div className="flex gap-4 p-4">
              <div className="w-24 h-24 bg-gradient-to-br from-[#19304B] to-[#2a4a6f] rounded-xl flex-shrink-0 flex items-center justify-center shadow-md">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-[#F8AD3D] text-xs font-semibold">{t('home.academic', language)}</span>
                <h4 className={`font-semibold mt-1 mb-2 line-clamp-2 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>
                  New Scholarship Program Announced for Outstanding Students
                </h4>
                <p className={`text-sm line-clamp-2 mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  PCU introduces merit-based scholarships covering up to 50% tuition...
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>2 {t('home.hoursAgo', language)}</span>
                  <button className="text-[#F8AD3D] text-sm font-medium flex items-center gap-1">
                    {t('home.read', language)} <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* News Card 2 */}
          <div className={`rounded-2xl overflow-hidden backdrop-blur-xl border ${isDarkMode ? 'bg-gray-800/60 border-white/5 shadow-lg shadow-gray-900/20' : 'bg-white/70 border-white/40 shadow-lg shadow-gray-200/50'}`}>
            <div className="flex gap-4 p-4">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex-shrink-0 flex items-center justify-center shadow-md">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-green-600 text-xs font-semibold">{t('home.campus', language)}</span>
                <h4 className={`font-semibold mt-1 mb-2 line-clamp-2 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>
                  PCU Ranks Top 10 in National University Assessment
                </h4>
                <p className={`text-sm line-clamp-2 mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Latest rankings highlight excellence in research and innovation...
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>5 {t('home.hoursAgo', language)}</span>
                  <button className="text-[#F8AD3D] text-sm font-medium flex items-center gap-1">
                    {t('home.read', language)} <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* News Card 3 */}
          <div className={`rounded-2xl overflow-hidden backdrop-blur-xl border ${isDarkMode ? 'bg-gray-800/60 border-white/5 shadow-lg shadow-gray-900/20' : 'bg-white/70 border-white/40 shadow-lg shadow-gray-200/50'}`}>
            <div className="flex gap-4 p-4">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex-shrink-0 flex items-center justify-center shadow-md">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-purple-600 text-xs font-semibold">{t('home.studentLife', language)}</span>
                <h4 className={`font-semibold mt-1 mb-2 line-clamp-2 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>
                  Student Council Elections Open for Registration
                </h4>
                <p className={`text-sm line-clamp-2 mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Nominations now open for leadership positions in student council...
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>1 {t('home.dayAgo', language)}</span>
                  <button className="text-[#F8AD3D] text-sm font-medium flex items-center gap-1">
                    {t('home.read', language)} <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}