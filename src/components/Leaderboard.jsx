import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import Sidebar from "../layout/Sidebar";
import MobileHeader from "../layout/MobileHeader";

function LeaderboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categories, setCategories] = useState({});
  const [activeCategory, setActiveCategory] = useState("All");
  const [timeframe, setTimeframe] = useState("All-time");

  const user = {
    name: "David",
    profileImg:
      "https://res.cloudinary.com/def9quyti/image/upload/v1761912705/ChatGPT_Image_Oct_31_2025_12_06_47_PM_bseihs.png",
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

  useEffect(() => {
  const fetchLeaderboard = async () => {
    const snapshot = await getDocs(collection(db, "leaderboard"));
    const grouped = {};

    snapshot.forEach((doc) => {
      const data = doc.data();
      const category = data.quizTitle || "Unknown";
      if (!grouped[category]) grouped[category] = [];
      grouped[category].push(data);
    });

    const now = Date.now();
    const weekAgo = now - 7 * 24 * 60 * 60 * 1000;
    const monthAgo = now - 30 * 24 * 60 * 60 * 1000;

    const filterByTime = (data) => {
      if (timeframe === "Weekly") return data.filter((x) => x.timestamp >= weekAgo);
      if (timeframe === "Monthly") return data.filter((x) => x.timestamp >= monthAgo);
      return data;
    };

    const sorted = {};

    Object.keys(grouped).forEach((cat) => {
      const entries = filterByTime(grouped[cat]);
      sorted[cat] = entries.sort((a, b) => b.score - a.score);
    });

    sorted.All = Object.values(grouped)
      .flat()
      .filter((x) => filterByTime([x]).length > 0)
      .sort((a, b) => b.score - a.score);

    setCategories(sorted);
  };

  fetchLeaderboard();
}, [timeframe]);




  return (
    <div className="flex bg-gray-100 min-h-screen bg-quiz-gradient">
      <Sidebar
        user={user}
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        activePage="/leaderboard"
      />
      <MobileHeader toggleSidebar={toggleSidebar} user={user} />

      {/* FIXED: removed items-center + removed forced height */}
      <main className="flex-1 pt-20 lg:pt-8 ml-0 lg:ml-64 transition-all duration-300 overflow-x-hidden">
        
        {/* FIXED: center content but without breaking mobile height */}
        <div className="w-full md:w-5/6 mx-auto px-3">
          <h1 className="text-3xl font-bold text-center mb-6 text-quiz-darkText">
            <i className="ri-trophy-fill text-yellow-400"></i> Leaderboard
          </h1>

          {/* Timeframe Filter */}
          <div className="flex justify-center gap-3 mb-4 overflow-x-auto pb-2">
            {["All-time", "Monthly", "Weekly"].map((time) => (
              <button
                key={time}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  timeframe === time
                    ? "bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white"
                    : "bg-white text-gray-700 shadow"
                }`}
                onClick={() => setTimeframe(time)}
              >
                {time}
              </button>
            ))}
          </div>


          {/* Category Tabs */}
          <div className="category-tabs-wrapper">
            <div className="category-tabs">
              {Object.keys(categories).map((cat) => (
                <button
                  key={cat}
                  className={`category-tab ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>


          {/* Leaderboard List */}
          {categories[activeCategory]?.length > 0 ? (
            <ul className="mt-4 space-y-3 ">
              {categories[activeCategory].map((user, i) => (
              <li
                key={i}
                className={`flex justify-between items-center p-3  rounded-xl shadow bg-white text-gray-800 animate-slideUp`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-center gap-3">
                  {/* Rank number or medal */}
                  <span className="w-4 text-center font-bold text-lg">
                    {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1}
                  </span>

                  {/* Avatar OR initials */}
                  {user.avatar ? (
                    <img src={user.avatar} className="w-10 h-10 rounded-full object-cover" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-semibold">
                      {user.username?.charAt(0).toUpperCase() || "?"}
                    </div>
                  )}

                  <div>
                    <p className="font-semibold">{user.username}</p>
                    {/* accuracy */}
                    {user.total ? (
                      <p className="text-xs text-gray-500">
                        Accuracy: {Math.round((user.score / user.total) * 100)}%
                      </p>
                    ) : null}
                  </div>
                </div>

                <span className="font-bold text-xl">{user.score}</span>
              </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-center text-gray-500">No leaderboard data</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default LeaderboardPage;
