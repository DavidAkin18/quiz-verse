import { useNavigate } from "react-router-dom";

export default function MobileHeader({ toggleSidebar, user }) {
  const navigate = useNavigate();

  return (
    <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-quiz-gradient text-white fixed w-full z-20 shadow">
      <button onClick={toggleSidebar} className="text-2xl">
        <i className="ri-menu-line"></i>
      </button>
      <div className="flex items-center space-x-4">
        <button className="text-2xl">
          <i className="ri-notification-3-line"></i>
        </button>
        <img src={user.profileImg} alt="profile" className="w-8 h-8 rounded-full border" />
      </div>
    </header>
  );
}
