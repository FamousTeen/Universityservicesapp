import { ChevronLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import pcuLogo from 'figma:asset/6d2f17e84a7eff8e9b1070e18c785297c8f157b0.png';
import { t, Language } from '../utils/translations';

interface FAQProps {
  onBack: () => void;
  onNavigateToContactSupport: () => void;
  isDarkMode: boolean;
  language: Language;
}

export function FAQ({ onBack, onNavigateToContactSupport, isDarkMode, language }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: t('faq.schedule.question', language),
      answer: t('faq.schedule.answer', language)
    },
    {
      question: t('faq.grades.question', language),
      answer: t('faq.grades.answer', language)
    },
    {
      question: t('faq.prs.question', language),
      answer: t('faq.prs.answer', language)
    },
    {
      question: t('faq.tuition.question', language),
      answer: t('faq.tuition.answer', language)
    },
    {
      question: t('faq.skkk.question', language),
      answer: t('faq.skkk.answer', language)
    },
    {
      question: t('faq.scan_qr.question', language),
      answer: t('faq.scan_qr.answer', language)
    },
    {
      question: t('faq.library.question', language),
      answer: t('faq.library.answer', language)
    },
    {
      question: t('faq.wgg.question', language),
      answer: t('faq.wgg.answer', language)
    },
    {
      question: t('faq.complaint.question', language),
      answer: t('faq.complaint.answer', language)
    },
    {
      question: t('faq.transcript.question', language),
      answer: t('faq.transcript.answer', language)
    },
    {
      question: t('faq.counseling.question', language),
      answer: t('faq.counseling.answer', language)
    },
    {
      question: t('faq.attendance.question', language),
      answer: t('faq.attendance.answer', language)
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`min-h-screen pb-24 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`px-6 pt-12 pb-6 rounded-b-3xl ${isDarkMode ? 'bg-[#0f1f35]' : 'bg-[#19304B]'}`}>
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="text-white">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <img src={pcuLogo} alt="PCU Logo" className="h-10" />
          <div className="w-6" /> {/* Spacer for alignment */}
        </div>
        <h1 className="text-white text-3xl font-bold">FAQ</h1>
        <p className="text-white/70 text-sm mt-2">Frequently Asked Questions</p>
      </div>

      {/* FAQ List */}
      <div className="px-6 py-6 space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className={`rounded-2xl shadow-sm overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex items-center justify-between p-4 text-left transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
            >
              <span className={`font-medium pr-4 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-[#F8AD3D] flex-shrink-0" />
              ) : (
                <ChevronDown className={`w-5 h-5 flex-shrink-0 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 pt-0">
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Support */}
      <div className="px-6 pb-6">
        <div className="bg-gradient-to-r from-[#19304B] to-[#2a4a6f] rounded-2xl p-6 text-white">
          <h3 className="font-bold text-lg mb-2">{t('faqPage.stillHaveQuestions', language)}</h3>
          <p className="text-white/80 text-sm mb-4">
            {t('faqPage.contactSupportDescription', language)}
          </p>
          <button className="bg-[#F8AD3D] text-[#19304B] font-medium px-6 py-3 rounded-xl hover:bg-[#f9b84d] transition-colors" onClick={onNavigateToContactSupport}>
            {t('faqPage.contactSupportButton', language)}
          </button>
        </div>
      </div>
    </div>
  );
}