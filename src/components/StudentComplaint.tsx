import { ChevronLeft, AlertCircle, CheckCircle, Clock, XCircle, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { Language, t } from '../utils/translations';

interface StudentComplaintProps {
  onBack: () => void;
  isDarkMode: boolean;
  language: Language;
}

interface Complaint {
  id: number;
  category: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'resolved' | 'rejected';
  date: string;
  response?: string;
}

export function StudentComplaint({ onBack, isDarkMode, language }: StudentComplaintProps) {
  const [showForm, setShowForm] = useState(false);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [complaints, setComplaints] = useState<Complaint[]>([
    {
      id: 1,
      category: 'academic',
      title: 'Issue with course registration',
      description: 'Unable to register for required course due to system error',
      status: 'resolved',
      date: '2026-01-10',
      response: 'The issue has been fixed. You can now register for the course.'
    },
    {
      id: 2,
      category: 'facility',
      title: 'Air conditioning not working in room P201',
      description: 'The AC unit in P201 has been broken for 3 days',
      status: 'in-progress',
      date: '2026-01-12'
    },
    {
      id: 3,
      category: 'administration',
      title: 'Transcript request delay',
      description: 'Waiting for transcript for more than 2 weeks',
      status: 'pending',
      date: '2026-01-13'
    }
  ]);

  const categories = [
    { value: 'academic', label: language === 'indonesia' ? 'Akademik' : 'Academic' },
    { value: 'facility', label: language === 'indonesia' ? 'Fasilitas' : 'Facility' },
    { value: 'administration', label: language === 'indonesia' ? 'Administrasi' : 'Administration' },
    { value: 'financial', label: language === 'indonesia' ? 'Keuangan' : 'Financial' },
    { value: 'library', label: language === 'indonesia' ? 'Perpustakaan' : 'Library' },
    { value: 'other', label: language === 'indonesia' ? 'Lainnya' : 'Other' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'in-progress':
        return <AlertCircle className="w-4 h-4" />;
      case 'resolved':
        return <CheckCircle className="w-4 h-4" />;
      case 'rejected':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'indonesia' ? 'id-ID' : 'en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new complaint
    const newComplaint: Complaint = {
      id: complaints.length > 0 ? Math.max(...complaints.map(c => c.id)) + 1 : 1,
      category,
      title,
      description,
      status: 'pending',
      date: new Date().toISOString().split('T')[0]
    };
    
    // Add to complaints list (newest first)
    setComplaints([newComplaint, ...complaints]);
    
    // Reset form and close modal
    setShowForm(false);
    setCategory('');
    setTitle('');
    setDescription('');
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
            {t('complaintPage.title', language)}
          </h1>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 pb-24">
        {/* New Complaint Button */}
        <button
          onClick={() => setShowForm(true)}
          className="w-full bg-[#F8AD3D] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 mb-6 shadow-lg hover:bg-[#e69d2d] transition-colors"
        >
          <Plus className="w-5 h-5" />
          {t('complaintPage.newComplaint', language)}
        </button>

        {/* Complaint History */}
        <div>
          <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>
            {t('complaintPage.complaintHistory', language)}
          </h2>

          {complaints.length === 0 ? (
            <div className={`p-6 rounded-xl text-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <AlertCircle className={`w-12 h-12 mx-auto mb-2 ${isDarkMode ? 'text-gray-600' : 'text-gray-300'}`} />
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {t('complaintPage.noComplaints', language)}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {complaints.map((complaint) => (
                <div
                  key={complaint.id}
                  className={`p-4 rounded-xl shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  {/* Complaint Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(complaint.status)} flex items-center gap-1`}>
                          {getStatusIcon(complaint.status)}
                          {t(`complaintPage.status.${complaint.status}`, language)}
                        </span>
                      </div>
                      <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>
                        {complaint.title}
                      </h3>
                    </div>
                  </div>

                  {/* Category & Date */}
                  <div className="flex items-center gap-4 mb-2 text-sm">
                    <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {t('complaintPage.category', language)}: <span className="font-medium">{categories.find(c => c.value === complaint.category)?.label}</span>
                    </span>
                    <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {formatDate(complaint.date)}
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {complaint.description}
                  </p>

                  {/* Response */}
                  {complaint.response && (
                    <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <p className={`text-xs font-semibold mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {t('complaintPage.response', language)}:
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {complaint.response}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* New Complaint Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
          <div className={`w-full max-w-lg rounded-t-3xl p-6 pb-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {/* Form Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>
                {t('complaintPage.newComplaint', language)}
              </h2>
              <button onClick={() => setShowForm(false)} className="p-2">
                <X className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Category */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('complaintPage.category', language)} *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className={`w-full px-3 py-3 rounded-xl border ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-[#F8AD3D]`}
                >
                  <option value="">{t('complaintPage.selectCategory', language)}</option>
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Title */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('complaintPage.complaintTitle', language)} *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder={t('complaintPage.titlePlaceholder', language)}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-[#F8AD3D]`}
                />
              </div>

              {/* Description */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('complaintPage.description', language)} *
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows={4}
                  placeholder={t('complaintPage.descriptionPlaceholder', language)}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-[#F8AD3D] resize-none`}
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className={`flex-1 py-3 rounded-xl font-semibold ${
                    isDarkMode 
                      ? 'bg-gray-700 text-white hover:bg-gray-600' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition-colors`}
                >
                  {t('personalInfo.cancel', language)}
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#F8AD3D] text-white font-semibold py-3 rounded-xl hover:bg-[#e69d2d] transition-colors"
                >
                  {t('complaintPage.submit', language)}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}