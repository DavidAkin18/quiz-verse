import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Sidebar from "../layout/Sidebar";
import MobileHeader from "../layout/MobileHeader";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DashboardStatsPage({
  total = 10,
  correct = 7,
  quizzesTaken = 15,
  highestScore = 10,
  averageScore = 7,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const accuracy = Math.round((correct / total) * 100);

  const user = {
    name: "David",
    profileImg:
      "https://res.cloudinary.com/def9quyti/image/upload/v1761912705/ChatGPT_Image_Oct_31_2025_12_06_47_PM_bseihs.png",
  };

  const COLORS = ["#3550DC", "#E63946"];

  return (
    <div className="flex bg-gray-100 min-h-screen bg-quiz-gradient">
      <Sidebar
        user={user}
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        activePage="/dashboard"
      />

      <MobileHeader toggleSidebar={toggleSidebar} user={user} />

      <main className="flex-1 pt-20 lg:pt-8 ml-0 lg:ml-64 transition-all duration-300">
        <div className="px-4 lg:w-5/6 mx-auto">

          {/* USER INFO */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={user.profileImg}
              className="w-20 h-20 rounded-full object-cover shadow-md"
            />
            <h1 className="text-2xl font-bold mt-3 text-quiz-darkText">
              {user.name}
            </h1>
          </div>

          <h1 className="text-3xl font-bold text-quiz-darkText text-center mb-6">
            Dashboard Overview
          </h1>

          {/* TAKE QUIZ BUTTON */}
          <div className="flex gap-4 justify-center mb-6">
            <Link
              to="/quiz"
              className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
            >
              Take a Quiz
            </Link>
            <Link
              to="/leaderboard"
              className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
            >
              Check Leaderboard
            </Link>
          </div>

          {/* STAT CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <p className="text-sm text-gray-500">Quizzes Taken</p>
              <h2 className="text-2xl font-bold">{quizzesTaken}</h2>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <p className="text-sm text-gray-500">Accuracy</p>
              <h2 className="text-2xl font-bold text-blue-600">{accuracy}%</h2>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <p className="text-sm text-gray-500">Highest Score</p>
              <h2 className="text-2xl font-bold">{highestScore}/10</h2>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <p className="text-sm text-gray-500">Average Score</p>
              <h2 className="text-2xl font-bold">{averageScore}/10</h2>
            </div>
          </div>

          {/* PIE CHART */}
          <div className="bg-white p-4 rounded-xl shadow-lg mb-10 w-full max-w-md mx-auto">
            <h2 className="text-center text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3550DC] to-[#27E9F7]">
              Quiz Accuracy Breakdown
            </h2>

            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  dataKey="value"
                  data={[
                    { name: "Correct", value: correct },
                    { name: "Wrong", value: total - correct },
                  ]}
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label
                >
                  <Cell fill={COLORS[0]} />
                  <Cell fill={COLORS[1]} />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      </main>
    </div>
  );
}
