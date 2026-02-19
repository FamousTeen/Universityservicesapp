import { useState, useEffect } from 'react';
import { ArrowLeft, Edit2, Check, X } from 'lucide-react';
import { t, Language } from '../utils/translations';

interface PersonalInformationProps {
  onBack: () => void;
  isDarkMode: boolean;
  language: Language;
}

export function PersonalInformation({ onBack, isDarkMode, language }: PersonalInformationProps) {
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('081234567890');
  const [tempPhoneNumber, setTempPhoneNumber] = useState('081234567890');

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [email, setEmail] = useState('student@email.com');
  const [tempEmail, setTempEmail] = useState('student@email.com');

  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [address, setAddress] = useState('Jl. Siwalankerto No. 121-131, Surabaya');
  const [tempAddress, setTempAddress] = useState('Jl. Siwalankerto No. 121-131, Surabaya');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSavePhone = () => {
    setPhoneNumber(tempPhoneNumber);
    setIsEditingPhone(false);
  };

  const handleCancelEditPhone = () => {
    setTempPhoneNumber(phoneNumber);
    setIsEditingPhone(false);
  };

  const handleSaveEmail = () => {
    setEmail(tempEmail);
    setIsEditingEmail(false);
  };

  const handleCancelEditEmail = () => {
    setTempEmail(email);
    setIsEditingEmail(false);
  };

  const handleSaveAddress = () => {
    setAddress(tempAddress);
    setIsEditingAddress(false);
  };

  const handleCancelEditAddress = () => {
    setTempAddress(address);
    setIsEditingAddress(false);
  };

  const personalInfo = [
    { label: t('personalInfo.fullName', language), value: 'Student Name' },
    { label: t('personalInfo.nrp', language), value: '6012345678' },
    { label: t('personalInfo.nik', language), value: '3578123456789012' },
    { label: t('personalInfo.birthplaceDate', language), value: 'Surabaya, 15 Maret 2003' },
    { label: t('personalInfo.gender', language), value: 'Laki-laki' },
    { label: t('personalInfo.religion', language), value: 'Kristen' },
    { label: t('personalInfo.ktpAddress', language), value: 'Jl. Siwalankerto No. 121-131, Surabaya' },
    { label: t('personalInfo.handphone', language), value: phoneNumber, editable: true, field: 'phone' },
    { label: t('personalInfo.parentPhone', language), value: '081298765432' },
    { label: t('personalInfo.petraEmail', language), value: 'c14220001@john.petra.ac.id' },
    { label: t('personalInfo.personalEmail', language), value: email, editable: true, field: 'email' },
    { label: t('personalInfo.domicileAddress', language), value: address, editable: true, field: 'address' }
  ];

  const academicInfo = [
    { label: t('personalInfo.studyMajor', language), value: 'Architecture' },
    { label: t('personalInfo.faculty', language), value: 'Faculty of Civil Engineering and Planning' },
    { label: t('personalInfo.admissionPeriod', language), value: '2022/2023 Ganjil' },
    { label: t('personalInfo.studentStatus', language), value: 'AKTIF', highlight: true },
    { label: t('personalInfo.academicAdvisor', language), value: 'Dr. John Doe, ST., MT.' },
    { label: t('personalInfo.gpa', language), value: '3.42' },
    { label: t('personalInfo.totalCredits', language), value: '84' },
    { label: t('personalInfo.credits', language), value: '12' }
  ];

  const documents = [
    { label: 'Form Registrasi', checked: true },
    { label: 'Akte Lahir', checked: true },
    { label: 'Surat Pernyataan Mahasiswa', checked: true },
    { label: 'Surat Pernyataan Biaya', checked: true },
    { label: 'Kartu Keluarga', checked: true },
    { label: 'Pas Foto', checked: true },
    { label: 'Fotocopy Ijazah', checked: true },
    { label: 'Tunjuk Ijazah', checked: false },
    { label: 'KTP', checked: true }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`px-6 pt-12 pb-6 sticky top-0 z-10 ${isDarkMode ? 'bg-[#0f1f35]' : 'bg-[#19304B]'}`}>
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-white text-xl font-semibold">{t('personalInfo.title', language)}</h1>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Personal Information Section */}
        <div>
          <h2 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{t('personalInfo.title', language)}</h2>
          <div className={`rounded-2xl shadow-sm overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {personalInfo.map((info, index) => (
              <div
                key={index}
                className={`p-4 ${
                  index !== personalInfo.length - 1 ? (isDarkMode ? 'border-b border-gray-700' : 'border-b border-gray-100') : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{info.label}</p>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{info.value}</p>
                  </div>
                  {info.editable && (
                    <button
                      onClick={() => {
                        if (info.field === 'phone') {
                          setTempPhoneNumber(phoneNumber);
                          setIsEditingPhone(true);
                        } else if (info.field === 'email') {
                          setTempEmail(email);
                          setIsEditingEmail(true);
                        } else if (info.field === 'address') {
                          setTempAddress(address);
                          setIsEditingAddress(true);
                        }
                      }}
                      className={`ml-3 p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
                    >
                      <Edit2 className="w-4 h-4 text-[#F8AD3D]" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Information Section */}
        <div>
          <h2 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{t('personalInfo.academicInfo', language)}</h2>
          <div className={`rounded-2xl shadow-sm overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {academicInfo.map((info, index) => (
              <div
                key={index}
                className={`p-4 ${
                  index !== academicInfo.length - 1 ? (isDarkMode ? 'border-b border-gray-700' : 'border-b border-gray-100') : ''
                }`}
              >
                <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{info.label}</p>
                <p
                  className={`font-medium ${
                    info.highlight
                      ? 'text-green-600 bg-green-50 inline-block px-3 py-1 rounded-full text-sm'
                      : isDarkMode ? 'text-white' : 'text-[#19304B]'
                  }`}
                >
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Document Information Section */}
        <div className="pb-6">
          <h2 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{t('personalInfo.documents', language)}</h2>
          <div className={`rounded-2xl shadow-sm overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {documents.map((doc, index) => (
              <div
                key={index}
                className={`p-4 flex items-center justify-between ${
                  index !== documents.length - 1 ? (isDarkMode ? 'border-b border-gray-700' : 'border-b border-gray-100') : ''
                }`}
              >
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{doc.label}</p>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    doc.checked ? 'bg-green-500' : isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
                  }`}
                >
                  {doc.checked && <Check className="w-4 h-4 text-white" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit Phone Modal */}
      {isEditingPhone && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
          <div className={`rounded-2xl p-6 w-full max-w-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{t('personalInfo.editPhoneNumber', language)}</h3>
            <input
              type="tel"
              value={tempPhoneNumber}
              onChange={(e) => setTempPhoneNumber(e.target.value)}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F8AD3D] mb-4 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
              placeholder="Enter phone number"
            />
            <div className="flex gap-3">
              <button
                onClick={handleCancelEditPhone}
                className={`flex-1 px-4 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ${isDarkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <X className="w-4 h-4" />
                {t('personalInfo.cancel', language)}
              </button>
              <button
                onClick={handleSavePhone}
                className="flex-1 px-4 py-3 bg-[#F8AD3D] text-white rounded-xl font-medium hover:bg-[#e09a2d] transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                {t('personalInfo.save', language)}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Email Modal */}
      {isEditingEmail && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
          <div className={`rounded-2xl p-6 w-full max-w-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{t('personalInfo.editEmailAddress', language)}</h3>
            <input
              type="email"
              value={tempEmail}
              onChange={(e) => setTempEmail(e.target.value)}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F8AD3D] mb-4 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
              placeholder="Enter email address"
            />
            <div className="flex gap-3">
              <button
                onClick={handleCancelEditEmail}
                className={`flex-1 px-4 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ${isDarkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <X className="w-4 h-4" />
                {t('personalInfo.cancel', language)}
              </button>
              <button
                onClick={handleSaveEmail}
                className="flex-1 px-4 py-3 bg-[#F8AD3D] text-white rounded-xl font-medium hover:bg-[#e09a2d] transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                {t('personalInfo.save', language)}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Address Modal */}
      {isEditingAddress && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
          <div className={`rounded-2xl p-6 w-full max-w-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{t('personalInfo.editAddress', language)}</h3>
            <input
              type="text"
              value={tempAddress}
              onChange={(e) => setTempAddress(e.target.value)}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F8AD3D] mb-4 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
              placeholder="Enter address"
            />
            <div className="flex gap-3">
              <button
                onClick={handleCancelEditAddress}
                className={`flex-1 px-4 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ${isDarkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <X className="w-4 h-4" />
                {t('personalInfo.cancel', language)}
              </button>
              <button
                onClick={handleSaveAddress}
                className="flex-1 px-4 py-3 bg-[#F8AD3D] text-white rounded-xl font-medium hover:bg-[#e09a2d] transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                {t('personalInfo.save', language)}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}