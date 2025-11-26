import { useState } from "react";
import Sidebar from "../layout/Sidebar";
import MobileHeader from "../layout/MobileHeader";
import QuizTabs from "../components/QuizTabs";

function QuizPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [activeTab, setActiveTab] = useState("Quiz"); // internal tabs if needed

  const user = {
    name: "David",
    profileImg: "https://res.cloudinary.com/def9quyti/image/upload/v1761912705/ChatGPT_Image_Oct_31_2025_12_06_47_PM_bseihs.png",
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex min-h-screen bg-quiz-gradient">
      <Sidebar user={user} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} activePage="/quiz" />
      <MobileHeader toggleSidebar={toggleSidebar} user={user} />

      <main className="flex-1 flex flex-col items-center p-4 pt-20 lg:pt-8 text-white ml-0 lg:ml-64 transition-all duration-300">
        {/* Greeting & Search */}
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-sm mb-2 text-quiz-darkText">Hello, {user.name}!</h1>
          <p className="text-xl font-bold text-quiz-darkText">Let’s test your Knowledge</p>

          <div className="relative mt-4">
            <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-xl text-transparent bg-clip-text bg-quiz-gradient"></i>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-quiz-primary text-quiz-dark"
            />
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {["All", "Easy", "Medium", "Hard"].map((level) => (
              <button
                key={level}
                className={`px-3 py-1 rounded-full border transition-all duration-200 ${
                  difficulty === level ? "bg-quiz-gradient text-white border-none" : "bg-quiz-dark text-white border-none hover:opacity-80"
                }`}
                onClick={() => setDifficulty(level)}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full min-h-screen sm:max-w-4xl mt-6 text-quiz-dark">
          <QuizTabs searchQuery={searchQuery} difficulty={difficulty} />
        </div>
      </main>
    </div>
  );
}

export default QuizPage;
