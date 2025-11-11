import { useLocation } from "react-router-dom";
import { useState } from "react";
import QuizTabs from "../components/QuizTabs";

function QuizPage() {
  const location = useLocation();
  const { firstName } = location.state || {};
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-quiz-gradient min-h-screen">
      <div className="p-4 pt-8 text-white">
        {/* Header */}
        <div className="flex item-center justify-between w-80 mt-4 text-[32px] mx-auto">
          <i className="ri-bar-chart-horizontal-line text-lg font-bold"></i>
          <img
            src="https://res.cloudinary.com/def9quyti/image/upload/v1761912705/ChatGPT_Image_Oct_31_2025_12_06_47_PM_bseihs.png"
            alt="avatar"
            className="w-[32px] h-[32px] rounded-full"
          />
        </div>

        {/* Greeting */}
        <div className="relative w-80 mt-4 mx-auto">
          <h1 className="text-sm mb-2">Hello, {firstName || "Guest"}!</h1>
          <p className="text-xl font-bold">Let’s test your Knowledge</p>
        </div>

        {/* Search Bar */}
        <div className="relative w-80 mt-4 mx-auto">
          {/* Left icon */}
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-transparent bg-clip-text bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-xl"></i>

          {/* Input */}
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3550DC] text-black"
          />

          {/* Right icon */}
          <i className="ri-arrow-left-right-line absolute right-3 top-1/2 -translate-y-1/2 text-transparent bg-clip-text bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-xl"></i>
        </div>
      </div>

      {/* Quiz List */}
      <div className="md:w-4/5 w-full mx-auto min-h-screen rounded-t-2xl p-4 bg-white">
        <QuizTabs searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default QuizPage;
