import Home from "./components/Home";
import QuizPage from "./pages/QuizPage";
import QuizDetails from "./pages/QuizDetails";
import QuizQuestions from "./pages/QuizQuestions";
import LeaderboardPage from "./pages/LeaderboardPage";
import DashboardPage from './pages/DashboardPage'
import SignUp from "./pages/SignUp";
import SignIn from './pages/SignIn'
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        {/* <Route path='/home' element={<Home/>}/> */}
        <Route path='/quiz' element={<QuizPage/>}/>
        <Route path='/quiz-details' element={<QuizDetails/>}/>
        <Route path='/questions' element={<QuizQuestions/>}/>
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}