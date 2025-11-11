import { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuizTabs({ searchQuery }) {
  const [activeCategory, setActiveCategory] = useState("Popular");
  const categories = ["Popular", "Science", "Mathematics", "Computer"];
  const navigate = useNavigate();

  const questionsData = {
    Popular: [
      {
        title: "UI UX Design",
        image:
          "https://dotbadges.com/wp-content/uploads/2023/01/UXUI-510x510.webp",
      },
      {
        title: "Graphic Design",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9y6wVqyWKrV4ePVXftTFQ3m6Pls05ty00Q&s",
      },
      {
        title: "3D Animation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwdwLilG_eDlq-j8L1fiAHDaN81EA4FC-NudsypTILnXUCvOP85ZfXhySS4camPa5VN0&usqp=CAU",
      },
    ],
    Science: [
      {
        title: "Physics Fundamentals",
        image: "https://cdn-icons-png.flaticon.com/512/2716/2716053.png",
      },
      {
        title: "Chemistry Reactions",
        image: "https://cdn-icons-png.flaticon.com/512/3094/3094898.png",
      },
      {
        title: "Biology Basics",
        image: "https://cdn-icons-png.flaticon.com/512/7665/7665126.png",
      },
    ],
    Mathematics: [
      {
        title: "Algebra Mastery",
        image: "https://cdn-icons-png.flaticon.com/512/3322/3322067.png",
      },
      {
        title: "Geometry Challenges",
        image: "https://cdn-icons-png.flaticon.com/512/2103/2103648.png",
      },
      {
        title: "Calculus Practice",
        image: "https://cdn-icons-png.flaticon.com/512/1048/1048941.png",
      },
    ],
    Computer: [
      {
        title: "Web Development",
        image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
      },
      {
        title: "App Development",
        image: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
      },
      {
        title: "Computer Science",
        image: "https://cdn-icons-png.flaticon.com/512/2721/2721234.png",
      },
    ],
  };

  // ✅ If activeCategory is "Popular", merge all categories
  const allQuizzes = Object.values(questionsData).flat();

  const displayedQuestions =
    activeCategory === "Popular"
      ? allQuizzes
      : questionsData[activeCategory];

  // ✅ Apply search filter to displayed questions
  const filteredQuestions = displayedQuestions.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="relative flex justify-center  items-center">
        <i
          className="ri-separator text-transparent bg-clip-text bg-gradient-to-r 
                from-[#3550DC] to-[#27E9F7] text-6xl"
        ></i>
      </div>

      {/* ✅ Category Tabs */}
      <ul className="flex justify-between items-center border-b pb-2">
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`cursor-pointer text-sm font-medium transition-all ${
              activeCategory === cat
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#3550DC] to-[#27E9F7] border-b-2 border-[#27E9F7]"
                : "text-[#999999] hover:text-quiz-gradient"
            }`}
          >
            {cat}
          </li>
        ))}
      </ul>

      {/* ✅ Questions list */}
      <div className="mt-6 space-y-4">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                navigate("/quiz-details", {
                  state: { title: item.title, image: item.image },
                })
              }
              className="flex justify-between items-center bg-white shadow-lg rounded-lg p-4 transition hover:scale-[1.01]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[72px] w-[72px] rounded-md border"
                />
                <div>
                  <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#3550DC] to-[#27E9F7] font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-[#999999] text-sm">
                    <i className="ri-booklet-line"></i> 10 questions
                  </p>
                  <p className="text-[#999999] text-sm">
                    <i className="ri-time-line"></i> 1 hour 15 min
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <i className="ri-star-half-line text-yellow-400"></i>
                <span className="text-quiz-gradient font-medium">4.8</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-[#999999]">No results found</p>
        )}
      </div>

      {/* ✅ Start button */}
      {/* <div>
        <button className="bg-quiz-gradient mt-6 p-4 w-full rounded-md text-white">
          Start Quiz
        </button>
      </div> */}
    </div>
  );
}

export default QuizTabs;
