// src/pages/SignIn.jsx
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
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

      // ✅ Navigate to Quiz page and pass first name
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
        setError(""); // clear any previous error
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
          Welcome back to QuizVerse!
        </>
      }
    >
      <form onSubmit={handleLogin} className="space-y-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-[#3550DC] font-bold">*</span>
          </label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md bg-[#EDEDF9]"
            placeholder="What's your email?"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password <span className="text-[#3550DC] font-bold">*</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full p-2 border border-gray-300 rounded-md bg-[#EDEDF9]"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 top-6 flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
          >
            <i
              className={`ri-${
                showPassword ? "eye-line" : "eye-off-line"
              } text-xl`}
            />
          </span>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="text-right text-sm text-[#3550DC]">
            <Link to="/forgot-password">Forgot password?</Link>
        </div>


        <button
          type="submit"
          className="w-full py-2 font-semibold text-white rounded-md bg-gradient-to-r from-[#3550DC] to-[#27E9F7]"
        >
          LOGIN <i className="ri-arrow-right-line ml-1"></i>
        </button>

        <p className="text-sm text-gray-600 text-left mt-4">
          New to QuizVerse?{" "}
          <Link
            to="/signup"
            className="text-[#3550DC] font-semibold hover:underline"
          >
            Create an account
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
