import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ user, sidebarOpen, toggleSidebar, activePage }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const navigate = useNavigate();

  const links = [
    { label: "Dashboard", icon: "ri-dashboard-line", path: "/dashboard" },
    { label: "Quiz", icon: "ri-question-answer-line", path: "/quiz" },
    { label: "Leaderboard", icon: "ri-bar-chart-line", path: "/leaderboard" },
    { label: "Logout", icon: "ri-logout-box-line", path: "/signin", isLogout: true },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigate = (link) => {
    navigate(link.path);
    if (isMobile) toggleSidebar();
  };

  return (
    <>
      <aside
        className={`
          bg-quiz-primary text-white flex flex-col z-40 transition-all duration-300
          fixed top-0 left-0 h-screen overflow-y-auto
          ${isMobile ? (sidebarOpen ? "w-64" : "w-0 -left-64") : "w-64"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <img
              src={user.profileImg}
              alt="profile"
              className="w-10 h-10 rounded-full border-2 border-quiz-primary"
            />
            <span className="font-bold text-lg">{user.name}</span>
          </div>

          {isMobile && (
            <button onClick={toggleSidebar} className="text-white text-xl">
              {sidebarOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {links.map((link) => (
            <div
              key={link.label}
              onClick={() => handleNavigate(link)}
              className={`
                flex items-center space-x-3 p-2 rounded cursor-pointer transition-all duration-200
                ${
                  activePage === link.path
                    ? "bg-gradient-to-r from-quiz-primary to-quiz-secondary text-white shadow-lg"
                    : "hover:bg-white/10 text-white"
                }
              `}
            >
              <i className={link.icon}></i>
              <span>{link.label}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && isMobile && (
        <div className="fixed inset-0 bg-black/50 z-30" onClick={toggleSidebar}></div>
      )}
    </>
  );
}
