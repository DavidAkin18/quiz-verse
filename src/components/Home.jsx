import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigate();

  const handleSubmit = () => {
    if (name.trim() === "") {
      setErrorMessage("Please input your name");
      return;
    }
    setErrorMessage("");
    navigation("/quiz", { state: { username: name } });
  };

  // ✅ Trigger submit when Enter is pressed
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="bg-quiz-gradient flex flex-col items-center min-h-screen w-full gap-4">
      <h1 className="text-4xl p-4 text-white font-bold">QUIZ!!</h1>

      <div className="rounded-full border border-blue-300 h-40 w-40 mb-12">
        <img
          src="https://res.cloudinary.com/def9quyti/image/upload/v1761912705/ChatGPT_Image_Oct_31_2025_12_06_47_PM_bseihs.png"
          alt="quiz"
          className="object-fit h-40 w-40 rounded-full"
        />
      </div>

      <div className="w-80 bg-white relative rounded-xl p-4 flex flex-col items-center">
        <h1
          className="p-4 py-2 border absolute -top-6 border-quiz-gradient text-white rounded-lg 
          font-bold text-center bg-[#404040]"
        >
          WELCOME
        </h1>

        {/* <label className="mt-4 text-center">
          Please Enter Your Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyPress} // ✅ Enter key support
            className="border-2 rounded-lg px-2 py-1 w-full my-4 focus:outline-none focus:ring-2 focus:ring-[#27E9F7]"
          />
        </label> */}
        <link to=''></link>
        <button
          className="bg-quiz-gradient p-4 py-2 w-full rounded-lg text-white font-bold hover:opacity-90 transition"
        >
          Join Us
        </button>

        {errorMessage && (
          <p className="text-red-600 font-medium mt-2">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

export default Home;
