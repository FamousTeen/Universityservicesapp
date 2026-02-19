import { useState } from "react";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Schedule } from "./components/Schedule";
import { Profile } from "./components/Profile";
import { FAQ } from "./components/FAQ";
import { Settings } from "./components/Settings";
import { ContactSupport } from "./components/ContactSupport";
import { PersonalInformation } from "./components/PersonalInformation";
import { WGG } from "./components/WGG";
import { Library } from "./components/Library";
import { StudentComplaint } from "./components/StudentComplaint";
import { Home as HomeIcon, Calendar, User } from "lucide-react";
import { t, Language } from "./utils/translations";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [navigationHistory, setNavigationHistory] = useState<
    string[]
  >(["home"]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<Language>("english");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab("home");
    setNavigationHistory(["home"]);
  };

  // If not logged in, show login page
  if (!isLoggedIn) {
    return (
      <Login
        onLogin={handleLogin}
        language={language}
        isDarkMode={isDarkMode}
      />
    );
  }

  const navigateToTab = (tab: string) => {
    setNavigationHistory((prev) => [...prev, tab]);
    setActiveTab(tab);
  };

  const navigateBack = () => {
    setNavigationHistory((prev) => {
      if (prev.length > 1) {
        const newHistory = prev.slice(0, -1);
        setActiveTab(newHistory[newHistory.length - 1]);
        return newHistory;
      }
      return prev;
    });
  };

  const navigateToMainTab = (tab: string) => {
    // Reset history when navigating to a main tab (home, schedule, profile)
    setNavigationHistory([tab]);
    setActiveTab(tab);
  };

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
    >
      {/* Main Content */}
      <main className="pb-20 max-w-md mx-auto">
        {activeTab === "home" && (
          <Home
            onNavigateToFAQ={() => navigateToTab("faq")}
            onNavigateToWGG={() => navigateToTab("wgg")}
            onNavigateToLibrary={() => navigateToTab("library")}
            onNavigateToStudentComplaint={() =>
              navigateToTab("studentComplaint")
            }
            isDarkMode={isDarkMode}
            language={language}
          />
        )}
        {activeTab === "schedule" && (
          <Schedule
            isDarkMode={isDarkMode}
            language={language}
          />
        )}
        {activeTab === "profile" && (
          <Profile
            onNavigateToSettings={() =>
              navigateToTab("settings")
            }
            onNavigateToFAQ={() => navigateToTab("faq")}
            onNavigateToContactSupport={() =>
              navigateToTab("contactSupport")
            }
            onNavigateToPersonalInformation={() =>
              navigateToTab("personalInformation")
            }
            onLogout={handleLogout}
            isDarkMode={isDarkMode}
            language={language}
          />
        )}
        {activeTab === "faq" && (
          <FAQ
            onBack={navigateBack}
            onNavigateToContactSupport={() =>
              navigateToTab("contactSupport")
            }
            isDarkMode={isDarkMode}
            language={language}
          />
        )}
        {activeTab === "settings" && (
          <Settings
            onBack={navigateBack}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            language={language}
            setLanguage={setLanguage}
          />
        )}
        {activeTab === "contactSupport" && (
          <ContactSupport
            onBack={navigateBack}
            isDarkMode={isDarkMode}
            language={language}
          />
        )}
        {activeTab === "personalInformation" && (
          <PersonalInformation
            onBack={navigateBack}
            isDarkMode={isDarkMode}
            language={language}
          />
        )}
        {activeTab === "wgg" && (
          <WGG
            onBack={navigateBack}
            isDarkMode={isDarkMode}
            language={language}
          />
        )}
        {activeTab === "library" && (
          <Library
            onBack={navigateBack}
            isDarkMode={isDarkMode}
            language={language}
          />
        )}
        {activeTab === "studentComplaint" && (
          <StudentComplaint
            onBack={navigateBack}
            isDarkMode={isDarkMode}
            language={language}
          />
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-6 left-0 right-0 flex justify-center px-6 max-w-md mx-auto pointer-events-none">
        <div
          className={`flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl border pointer-events-auto ${isDarkMode ? "bg-gray-800/60 border-white/10 shadow-2xl shadow-black/40" : "bg-white/70 border-white/40 shadow-2xl shadow-gray-900/20"}`}
        >
          <button
            onClick={() => navigateToMainTab("home")}
            className={`flex flex-col items-center justify-center px-6 py-2 rounded-full transition-all duration-300 ${activeTab === "home" ? "bg-[#F8AD3D]/20 backdrop-blur-sm" : ""}`}
          >
            <HomeIcon
              className={`w-6 h-6 transition-colors ${activeTab === "home" ? "text-[#F8AD3D]" : isDarkMode ? "text-gray-400" : "text-gray-500"}`}
            />
            <span
              className={`text-xs mt-1 font-medium transition-colors ${activeTab === "home" ? "text-[#F8AD3D]" : isDarkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              {t("navigation.home", language)}
            </span>
          </button>
          <button
            onClick={() => navigateToMainTab("schedule")}
            className={`flex flex-col items-center justify-center px-6 py-2 rounded-full transition-all duration-300 ${activeTab === "schedule" ? "bg-[#F8AD3D]/20 backdrop-blur-sm" : ""}`}
          >
            <Calendar
              className={`w-6 h-6 transition-colors ${activeTab === "schedule" ? "text-[#F8AD3D]" : isDarkMode ? "text-gray-400" : "text-gray-500"}`}
            />
            <span
              className={`text-xs mt-1 font-medium transition-colors ${activeTab === "schedule" ? "text-[#F8AD3D]" : isDarkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              {t("navigation.schedule", language)}
            </span>
          </button>
          <button
            onClick={() => navigateToMainTab("profile")}
            className={`flex flex-col items-center justify-center px-6 py-2 rounded-full transition-all duration-300 ${activeTab === "profile" ? "bg-[#F8AD3D]/20 backdrop-blur-sm" : ""}`}
          >
            <User
              className={`w-6 h-6 transition-colors ${activeTab === "profile" ? "text-[#F8AD3D]" : isDarkMode ? "text-gray-400" : "text-gray-500"}`}
            />
            <span
              className={`text-xs mt-1 font-medium transition-colors ${activeTab === "profile" ? "text-[#F8AD3D]" : isDarkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              {t("navigation.profile", language)}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}