import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import questionsData from "../data/questionsData";

function QuizQuestions() {
  const location = useLocation();
  const navigate = useNavigate();
  const { title } = location.state || {};

  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const tabContainerRef = useRef(null); // 👈 for auto-scroll
  const tabRefs = useRef([]); // 👈 store individual tab refs
  const { user } = useUserStore();


  useEffect(() => {
    if (questionsData[title]) setQuestions(questionsData[title]);
    else console.warn("No questions found for:", title);
  }, [title]);

  useEffect(() => {
    if (isSubmitted || showAnswers) return;
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted, showAnswers]);

  // ✅ Auto-scroll active tab into view
  useEffect(() => {
    if (tabRefs.current[activeQuestion - 1]) {
      tabRefs.current[activeQuestion - 1].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeQuestion]);

  const currentQuestion = questions[activeQuestion - 1];

  const handleSelect = (option) =>
    setSelectedAnswers({ ...selectedAnswers, [activeQuestion]: option });

  const handleSubmit = async () => {
    let newScore = 0;
    questions.forEach((q, i) => {
      if (selectedAnswers[i + 1] === q.answer) newScore++;
    });
    setScore(newScore);
    setIsSubmitted(true);

    if (user) {
      await addDoc(collection(db, "leaderboard"), {
        username: user.email,
        score: newScore,
        quizTitle: title,
        createdAt: new Date(),
      });
    }
  };

  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const optionLabels = ["A", "B", "C", "D", "E"];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center justify-between w-full max-w-3xl px-4 py-4">
        <i
          className="ri-arrow-left-line text-2xl cursor-pointer"
          onClick={() => navigate(-1)}
        ></i>
        <h1 className="text-lg sm:text-xl font-bold text-center">{title}</h1>
        {!showAnswers && (
          <span className="text-white font-semibold">
            {formatTime(timeLeft)}
          </span>
        )}
      </div>

      {/* Question Container */}
      <div className="bg-white w-full max-w-3xl text-black p-6 sm:p-8 rounded-3xl shadow-2xl mt-4 flex-1 flex flex-col overflow-y-auto scrollbar-hide">
        {/* Tabs */}
        {!showAnswers && (
          <div
            ref={tabContainerRef}
            className="overflow-x-auto scrollbar-hide whitespace-nowrap py-3"
          >
            <ul className="flex md:justify-center items-center justify-start space-x-3 px-4">
              {questions.map((_, i) => (
                <li
                  key={i}
                  ref={(el) => (tabRefs.current[i] = el)}
                  onClick={() => setActiveQuestion(i + 1)}
                  className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeQuestion === i + 1
                      ? "bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white"
                      : "bg-[#D4D4D4] text-white hover:opacity-90"
                  }`}
                >
                  {i + 1}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Show Quiz Questions */}
        {!isSubmitted && !showAnswers && currentQuestion && (
          <>
            <h2 className="font-semibold text-lg sm:text-xl mb-4 mt-2 text-center sm:text-left">
              {currentQuestion.question}
            </h2>
            <ul className="space-y-3">
              {currentQuestion.options.map((opt, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(opt)}
                  className={`border px-4 py-3 rounded-lg cursor-pointer flex items-center gap-3 transition ${
                    selectedAnswers[activeQuestion] === opt
                      ? "bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white"
                      : "hover:bg-blue-100"
                  }`}
                >
                  <span className="font-bold">
                    {optionLabels[index] ? `${optionLabels[index]}.` : ""}
                  </span>
                  <span>{opt}</span>
                </li>
              ))}
            </ul>

            {/* Nav Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() =>
                  setActiveQuestion((prev) => (prev > 1 ? prev - 1 : prev))
                }
                disabled={activeQuestion === 1}
                className={`px-3 py-2 sm:px-5 sm:py-2 rounded-full font-semibold ${
                  activeQuestion === 1
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white"
                }`}
              >
                <i className="ri-arrow-left-s-line text-xl"></i>
              </button>

              <button
                onClick={() =>
                  activeQuestion === questions.length
                    ? handleSubmit()
                    : setActiveQuestion((prev) => prev + 1)
                }
                className="px-3 py-2 sm:px-5 sm:py-2 rounded-full font-semibold bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white"
              >
                {activeQuestion === questions.length ? (
                  "Submit"
                ) : (
                  <i className="ri-arrow-right-s-line text-xl"></i>
                )}
              </button>
            </div>
          </>
        )}

        {/* ✅ Show Answers Section */}
        {showAnswers && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#3550DC] to-[#27E9F7]">
              Correct Answers Review
            </h2>
            {questions.map((q, i) => (
              <div key={i} className="mb-6">
                <p className="font-semibold text-base mb-2">
                  {i + 1}. {q.question}
                </p>
                <ul className="space-y-2">
                  {q.options.map((opt, index) => {
                    const isCorrect = opt === q.answer;
                    const isUserChoice = selectedAnswers[i + 1] === opt;
                    return (
                      <li
                        key={index}
                        className={`px-4 py-2 rounded-lg flex items-center gap-3 ${
                          isCorrect
                            ? "bg-green-100 border border-green-500"
                            : isUserChoice && !isCorrect
                            ? "bg-red-100 border border-red-400"
                            : "border"
                        }`}
                      >
                        <span className="font-bold">{optionLabels[index]}.</span>
                        <span>{opt}</span>
                        {isCorrect && (
                          <span className="ml-auto text-green-700 font-medium">
                            ✔
                          </span>
                        )}
                        {isUserChoice && !isCorrect && (
                          <span className="ml-auto text-red-700 font-medium">
                            ✖
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            <button
              onClick={() => navigate(-2)}
              className="bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white mt-4 px-6 py-3 rounded-xl w-full font-semibold"
            >
              Back to Categories
            </button>
          </div>
        )}
      </div>

      {/* ✅ Modal Overlay for Score */}
      {isSubmitted && !showAnswers && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-sm z-50">
          <div className="bg-white text-center p-8 rounded-3xl shadow-2xl w-[90%] max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3550DC] to-[#27E9F7]">
              Quiz Completed ✅
            </h2>
            <p className="text-lg text-gray-700 mt-2">
              You scored{" "}
              <span className="font-semibold text-[#3550DC]">{score}</span> /{" "}
              {questions.length}
            </p>
            <div className="flex flex-col gap-3 mt-6">
              <button
                onClick={() => setShowAnswers(true)}
                className="bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white px-6 py-2 rounded-lg w-full font-semibold"
              >
                View Answers
              </button>
              <button
                onClick={() => navigate(-2)}
                className="border border-[#3550DC] text-[#3550DC] px-6 py-2 rounded-lg w-full font-semibold"
              >
                Back to Categories
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizQuestions;
