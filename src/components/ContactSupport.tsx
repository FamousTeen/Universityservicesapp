import { ChevronLeft, Mail, MessageCircle } from 'lucide-react';
import { useEffect } from 'react';
import pcuLogo from 'figma:asset/6d2f17e84a7eff8e9b1070e18c785297c8f157b0.png';
import { t, Language } from '../utils/translations';

interface ContactSupportProps {
  onBack: () => void;
  isDarkMode: boolean;
  language: Language;
}

interface ContactCard {
  title: string;
  whatsapp: string;
  email: string;
}

export function ContactSupport({ onBack, isDarkMode, language }: ContactSupportProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contacts: ContactCard[] = [
    {
      title: "Humas dan Informasi Studi",
      whatsapp: "+62 812-3456-7890",
      email: "humas@pcu.ac.id"
    },
    {
      title: "Perpustakaan",
      whatsapp: "+62 812-3456-7891",
      email: "perpustakaan@pcu.ac.id"
    },
    {
      title: "Biro Administrasi Akademik",
      whatsapp: "+62 812-3456-7892",
      email: "akademik@pcu.ac.id"
    },
    {
      title: "Biro Administrasi Kemahasiswaan dan Alumni",
      whatsapp: "+62 812-3456-7893",
      email: "kemahasiswaan@pcu.ac.id"
    },
    {
      title: "Biro Administrasi Keuangan",
      whatsapp: "+62 812-3456-7894",
      email: "keuangan@pcu.ac.id"
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className={`text-white p-4 sticky top-0 z-10 ${isDarkMode ? 'bg-[#0f1f35]' : 'bg-[#19304B]'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="p-1">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl">Contact Support</h1>
          </div>
          <img src={pcuLogo} alt="PCU Logo" className="h-10" />
        </div>
      </header>

      {/* Content */}
      <div className="px-6 py-6">
        <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {t('contactSupport.description', language)}
        </p>

        {contacts.map((contact, index) => (
          <div 
            key={index}
            className={`border rounded-xl p-4 shadow-sm ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
          >
            <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>
              {contact.title}
            </h3>
            
            <div className="space-y-2">
              {/* WhatsApp */}
              <a 
                href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${isDarkMode ? 'bg-green-900/30 hover:bg-green-900/40' : 'bg-green-50 hover:bg-green-100'}`}
              >
                <MessageCircle className="w-5 h-5 text-green-600" />
                <div className="flex-1">
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>WhatsApp</p>
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{contact.whatsapp}</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${contact.email}`}
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${isDarkMode ? 'bg-blue-900/30 hover:bg-blue-900/40' : 'bg-blue-50 hover:bg-blue-100'}`}
              >
                <Mail className="w-5 h-5 text-blue-600" />
                <div className="flex-1">
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-[#19304B]'}`}>{contact.email}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}