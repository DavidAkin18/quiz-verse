import { useState } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import AuthLayout from "../components/AuthLayout";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // ✅ Sign in user
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Fetch user's first name from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      let name = "User";
      if (userDoc.exists()) {
        name = userDoc.data().firstName || "User";
        setFirstName(name);
      }

      // ✅ Navigate to Quiz page
      navigate("/quiz", { state: { firstName: name } });
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email to reset your password.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setError("");
      alert("Password reset email sent! Check your inbox.");
    } catch (err) {
      console.error("Password reset error:", err);
      setError("Failed to send password reset email. Please check your email and try again.");
    }
  };

  return (
    <AuthLayout
      title={
        <>
          Hello{firstName ? `, ${firstName}` : ""} <br />
          <span className="text-quiz-primary">Welcome back to QuizVerse!</span>
        </>
      }
    >
      <form onSubmit={handleLogin} className="space-y-5 mt-4 min-h-screen md:min-h-0">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-quiz-dark mb-1">
            Email Address <span className="text-quiz-primary font-bold">*</span>
          </label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-quiz-primary focus:outline-none"
            placeholder="What's your email?"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block text-sm font-medium text-quiz-dark mb-1">
            Password <span className="text-quiz-primary font-bold">*</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-quiz-primary focus:outline-none"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 top-6 flex items-center cursor-pointer text-gray-500 hover:text-quiz-primary"
          >
            <i className={`ri-${showPassword ? "eye-line" : "eye-off-line"} text-xl`} />
          </span>
        </div>

        {/* Error */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Forgot Password */}
        <div className="text-right text-sm">
          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-quiz-primary hover:underline"
          >
            Forgot password?
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-2 font-semibold text-white rounded-md bg-quiz-gradient hover:opacity-90 transition"
        >
          LOGIN <i className="ri-arrow-right-line ml-1"></i>
        </button>

        {/* Signup Link */}
        <p className="text-sm text-gray-600 text-left mt-4">
          New to <span className="font-semibold text-quiz-primary">QuizVerse?</span>{" "}
          <Link
            to="/signup"
            className="text-quiz-secondary font-semibold hover:underline"
          >
            Create an account
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
