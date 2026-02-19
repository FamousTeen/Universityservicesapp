import { ChevronLeft, Book, Calendar, Clock, CheckCircle } from 'lucide-react';
import { Language, t } from '../utils/translations';

interface LibraryProps {
  onBack: () => void;
  isDarkMode: boolean;
  language: Language;
}

interface BookLoan {
  id: number;
  title: string;
  author: string;
  borrowDate: string;
  dueDate: string;
  status: 'active' | 'returned' | 'overdue';
  coverColor: string;
}

export function Library({ onBack, isDarkMode, language }: LibraryProps) {
  const activeLoans: BookLoan[] = [
    {
      id: 1,
      title: 'Introduction to Architecture',
      author: 'Francis D.K. Ching',
      borrowDate: '2026-01-05',
      dueDate: '2026-01-19',
      status: 'active',
      coverColor: '#19304B'
    },
    {
      id: 2,
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      borrowDate: '2026-01-08',
      dueDate: '2026-01-22',
      status: 'active',
      coverColor: '#F8AD3D'
    }
  ];

  const loanHistory: BookLoan[] = [
    {
      id: 3,
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      borrowDate: '2025-12-10',
      dueDate: '2025-12-24',
      status: 'returned',
      coverColor: '#4A5568'
    },
    {
      id: 4,
      title: 'Data Structures and Algorithms',
      author: 'Thomas H. Cormen',
      borrowDate: '2025-11-20',
      dueDate: '2025-12-04',
      status: 'returned',
      coverColor: '#2D3748'
    },
    {
      id: 5,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      borrowDate: '2025-11-05',
      dueDate: '2025-11-19',
      status: 'returned',
      coverColor: '#1A202C'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'indonesia' ? 'id-ID' : 'en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getDaysRemaining = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`px-6 pt-12 pb-4 border-b ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="p-2">
            <ChevronLeft className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`} />
          </button>
          <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>
            {t('libraryPage.title', language)}
          </h1>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 pb-24">
        {/* Active Loans Section */}
        <div className="mb-8">
          <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>
            {t('libraryPage.activeLoans', language)}
          </h2>
          
          {activeLoans.length === 0 ? (
            <div className={`p-6 rounded-xl text-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <Book className={`w-12 h-12 mx-auto mb-2 ${isDarkMode ? 'text-gray-600' : 'text-gray-300'}`} />
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {t('libraryPage.noActiveLoans', language)}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {activeLoans.map((loan) => {
                const daysRemaining = getDaysRemaining(loan.dueDate);
                return (
                  <div 
                    key={loan.id} 
                    className={`p-4 rounded-xl shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                  >
                    <div className="flex gap-4">
                      {/* Book Cover */}
                      <div 
                        className="w-16 h-20 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: loan.coverColor }}
                      >
                        <Book className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Book Info */}
                      <div className="flex-1">
                        <h3 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>
                          {loan.title}
                        </h3>
                        <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {loan.author}
                        </p>
                        
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs">
                            <Calendar className={`w-4 h-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                              {t('libraryPage.borrowed', language)}: {formatDate(loan.borrowDate)}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <Clock className={`w-4 h-4 ${daysRemaining <= 3 ? 'text-red-500' : isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                            <span className={daysRemaining <= 3 ? 'text-red-500 font-medium' : isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                              {t('libraryPage.due', language)}: {formatDate(loan.dueDate)}
                              {daysRemaining > 0 && (
                                <span className="ml-1">
                                  ({daysRemaining} {t('libraryPage.daysLeft', language)})
                                </span>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* History Section */}
        <div>
          <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>
            {t('libraryPage.loanHistory', language)}
          </h2>
          
          {loanHistory.length === 0 ? (
            <div className={`p-6 rounded-xl text-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <Book className={`w-12 h-12 mx-auto mb-2 ${isDarkMode ? 'text-gray-600' : 'text-gray-300'}`} />
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {t('libraryPage.noLoanHistory', language)}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {loanHistory.map((loan) => (
                <div 
                  key={loan.id} 
                  className={`p-4 rounded-xl shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <div className="flex gap-4">
                    {/* Book Cover */}
                    <div 
                      className="w-14 h-18 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: loan.coverColor }}
                    >
                      <Book className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Book Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>
                          {loan.title}
                        </h3>
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 ml-2" />
                      </div>
                      <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {loan.author}
                      </p>
                      
                      <div className="flex items-center gap-2 text-xs">
                        <Calendar className={`w-4 h-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                          {formatDate(loan.borrowDate)} - {formatDate(loan.dueDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}