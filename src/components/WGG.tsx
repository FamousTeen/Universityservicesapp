import { Language } from '../utils/translations';

interface WGGProps {
  onBack: () => void;
  isDarkMode: boolean;
  language: Language;
}

export function WGG({ onBack, isDarkMode }: WGGProps) {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Iframe Content */}
      <div className="w-full h-screen">
        <iframe
          src="https://wgg.petra.ac.id/"
          className="w-full h-[calc(100vh-6rem)] border-0"
          title="WGG - Widyaloka Gema Ganendra"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
}