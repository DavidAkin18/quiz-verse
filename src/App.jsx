import Home from "./component/Home";
import QuizPage from "./component/QuizPage";
import QuizDetails from "./component/QuizDetails";
import QuizQuestions from "./component/QuizQuestions";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quiz' element={<QuizPage/>}/>
        <Route path='/quiz-details' element={<QuizDetails/>}/>
        <Route path='/questions' element={<QuizQuestions/>}/>
      </Routes>
    </div>
  );
}