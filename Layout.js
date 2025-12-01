import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { BookOpen, Grid3x3, Home, Calendar, Timer } from "lucide-react";

const navigationItems = [
  {
    title: "Islam",
    url: createPageUrl("Islam"),
    icon: BookOpen,
  },
  {
    title: "Matrice",
    url: createPageUrl("Matrix"),
    icon: Grid3x3,
  },
  {
    title: "Maison",
    url: createPageUrl("Home"),
    icon: Home,
  },
  {
    title: "Calendrier",
    url: createPageUrl("Calendar"),
    icon: Calendar,
  },
  {
    title: "Pomodoro",
    url: createPageUrl("Pomodoro"),
    icon: Timer,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      <style>{`
        :root {
          --primary: #059669;
          --primary-dark: #047857;
          --accent: #D4AF37;
          --bg-light: #FDFBF7;
          --text-dark: #1F2937;
        }
        
        .nav-item-active {
          color: var(--primary);
        }
        
        .nav-item-inactive {
          color: #6B7280;
        }
        
        .nav-item:hover {
          transform: translateY(-2px);
        }
        
        .nav-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>

      {/* Header - Compact pour mobile */}
      <header className="bg-white/80 backdrop-blur-md border-b border-emerald-100 px-4 md:px-6 py-3 md:py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm md:text-base">D</span>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
                DEENLY
              </h1>
              <p className="text-[10px] md:text-xs text-gray-500 hidden sm:block">Équilibre • Foi • Productivité</p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <span className="text-sm font-medium text-gray-600">
              {currentPageName || "Home"}
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 pb-20 md:pb-6 animate-fade-in">
        {children}
      </main>

      {/* Bottom navigation - Compact pour mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-1 py-2 md:py-3 z-50 md:relative md:bg-white/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-around">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.url;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.title}
                  to={item.url}
                  className="nav-item flex flex-col items-center justify-center gap-0.5 md:gap-1 py-1.5 md:py-2 px-2 md:px-3 rounded-xl md:rounded-2xl min-w-[55px] md:min-w-[60px] hover:bg-emerald-50"
                >
                  <Icon 
                    className={`w-5 h-5 md:w-6 md:h-6 ${isActive ? 'nav-item-active' : 'nav-item-inactive'}`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span 
                    className={`text-[10px] md:text-xs font-medium ${isActive ? 'nav-item-active' : 'nav-item-inactive'}`}
                  >
                    {item.title}
                  </span>
                  {isActive && (
                    <div className="w-1 h-1 bg-emerald-600 rounded-full mt-0.5" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
