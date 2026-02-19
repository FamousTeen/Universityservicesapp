import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';
import { t, Language } from '../utils/translations';

interface ScheduleProps {
  isDarkMode: boolean;
  language: Language;
}

export function Schedule({ isDarkMode, language }: ScheduleProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 8, 16)); // September 16, 2024
  
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);

  const todayCourses = [
    {
      id: 1,
      name: 'Manual Drawing',
      time: '14:00',
      durationValue: '2.3',
      room: 'Room 23D',
      color: '#19304B'
    }
  ];

  const nextCourses = [
    {
      id: 2,
      name: 'Digital Architecture',
      time: '14:00',
      durationValue: '2.3',
      room: 'Room 23D',
      color: '#F8AD3D'
    },
    {
      id: 3,
      name: 'Urban Planning',
      time: '14:00',
      durationValue: '2.3',
      room: 'Room 23D',
      color: '#9b87f5'
    },
    {
      id: 4,
      name: 'Structural Design',
      time: '14:00',
      durationValue: '2.3',
      room: 'Room 23D',
      color: '#22c55e'
    }
  ];

  const changeMonth = (delta: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + delta);
    setCurrentDate(newDate);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <div className={`px-6 pt-12 pb-4 border-b ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="flex items-center justify-between">
          <button className="p-2">
            <ChevronLeft className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`} />
          </button>
          <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>Schedule</h1>
          <button className="p-2">
            <svg className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Calendar */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>
            {monthNames[currentDate.getMonth()]}
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={() => changeMonth(-1)}
              className={`p-1 rounded ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              <ChevronLeft className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`} />
            </button>
            <button 
              onClick={() => changeMonth(1)}
              className={`p-1 rounded ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              <ChevronRight className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`} />
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="mb-6">
          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center">
                <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{day}</span>
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2">
            {[...Array(startingDayOfWeek)].map((_, index) => (
              <div key={`empty-${index}`} className="aspect-square"></div>
            ))}
            {[...Array(daysInMonth)].map((_, index) => {
              const day = index + 1;
              const isToday = day === 16;
              return (
                <button
                  key={day}
                  className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-colors
                    ${isToday 
                      ? 'bg-[#19304B] text-white' 
                      : isDarkMode 
                        ? 'text-gray-300 hover:bg-gray-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Today Course */}
      <div className="px-6">
        <h3 className={`font-semibold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{t('schedulePage.todayCourse', language)}</h3>
        <div className="space-y-3 mb-6">
          {todayCourses.map((course) => (
            <div key={course.id} className={`rounded-2xl p-4 shadow-sm border-2 ${isDarkMode ? 'bg-gray-800 border-[#F8AD3D]' : 'bg-white border-[#19304B]'}`}>
              <div className="flex gap-3">
                <div className={`w-1 rounded-full`} style={{ backgroundColor: course.color }}></div>
                <div className="flex-1">
                  <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{course.name}</h4>
                  <div className={`flex items-center gap-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.time}</span>
                    </div>
                    <span>•</span>
                    <span>{course.durationValue} {t('home.hours', language)}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{course.room}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Course */}
        <h3 className={`font-semibold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{t('schedulePage.nextCourse', language)}</h3>
        <div className="space-y-3 pb-6">
          {nextCourses.map((course) => (
            <div key={course.id} className={`rounded-2xl p-4 shadow-sm border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <div className="flex gap-3">
                <div className={`w-1 rounded-full`} style={{ backgroundColor: course.color }}></div>
                <div className="flex-1">
                  <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{course.name}</h4>
                  <div className={`flex items-center gap-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.time}</span>
                    </div>
                    <span>•</span>
                    <span>{course.durationValue} {t('home.hours', language)}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{course.room}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}