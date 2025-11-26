import { useLocation, useNavigate } from "react-router-dom";

function QuestionDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, image } = location.state || {};

  return (
    <div className="min-h-screen bg-quiz-gradient p-6 text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <i
          className="ri-arrow-left-line text-2xl cursor-pointer"
          onClick={() => navigate(-1)} // go back
        ></i>
        <h1 className="text-lg font-bold">Quiz Details</h1>
        <div className="w-6"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center mt-8">
        <img
          src={image}
          alt={title}
          className="w-40 h-40 rounded-xl border-4 border-white mb-6"
        />
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-center text-lg text-white/90 max-w-md">
          Ready to test your knowledge in <span className="font-semibold">{title}</span>?  
          This quiz has 10 fun and challenging questions. 🚀
        </p>

        <button
          onClick={() =>
            navigate("/questions", {
              state: { 
                title, 
                difficulty: location.state?.difficulty || "all" // ✅ pass difficulty
              },
            })
          }
          className="bg-white text-[#3550DC] font-semibold rounded-lg px-6 py-3 mt-8 hover:scale-105 transition"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default QuestionDetails;
