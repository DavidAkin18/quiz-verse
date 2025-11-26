import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import AuthLayout from "../components/AuthLayout";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [user, setUser] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isValid =
    user.first &&
    user.last &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email) &&
    user.password === user.confirm &&
    user.password.length >= 6;

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!isValid) return setError("Please fill in all required fields correctly.");
    setError("");

    try {
      // ✅ Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      const currentUser = userCredential.user;

      // ✅ Save extra info to Firestore
      await setDoc(doc(db, "users", currentUser.uid), {
        firstName: user.first,
        lastName: user.last,
        email: user.email,
        createdAt: new Date(),
      });

      // ✅ Redirect to SignIn page
      navigate("/signin");
    } catch (err) {
      console.error("Signup error:", err);
      setError("Failed to create account. Please try again.");
    }
  };

  return (
    <AuthLayout
      title="Create your QuizVerse Account"
      subtitle="Fill in the following details to get started"
    >
      <form
        onSubmit={handleSignUp}
        className="space-y-5 mt-4 min-h-screen md:min-h-0"
      >
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="p-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-quiz-primary focus:outline-none"
            value={user.first}
            onChange={(e) => setUser({ ...user, first: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-quiz-primary focus:outline-none"
            value={user.last}
            onChange={(e) => setUser({ ...user, last: e.target.value })}
            required
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-quiz-primary focus:outline-none"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-quiz-primary focus:outline-none"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 top-0 flex items-center cursor-pointer text-gray-500 hover:text-quiz-primary"
          >
            <i className={`ri-${showPassword ? "eye-line" : "eye-off-line"} text-xl`} />
          </span>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <input
            type={showRepeat ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-quiz-primary focus:outline-none"
            value={user.confirm}
            onChange={(e) => setUser({ ...user, confirm: e.target.value })}
            required
          />
          <span
            onClick={() => setShowRepeat(!showRepeat)}
            className="absolute inset-y-0 right-3 top-0 flex items-center cursor-pointer text-gray-500 hover:text-quiz-primary"
          >
            <i className={`ri-${showRepeat ? "eye-line" : "eye-off-line"} text-xl`} />
          </span>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Register Button */}
        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-2 font-semibold rounded-md transition ${
            isValid
              ? "bg-quiz-gradient text-white hover:opacity-90"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          REGISTER <i className="ri-arrow-right-line ml-1"></i>
        </button>

        {/* Sign In Link */}
        <p className="text-sm text-gray-600 text-left mt-4">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-quiz-primary font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>

        {/* Terms & Privacy */}
        <p className="text-xs text-gray-500 text-left mt-4">
          By creating an account, I confirm that I have read and understood the{" "}
          <a href="#" className="text-quiz-primary hover:underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-quiz-primary hover:underline">
            Terms of Use
          </a>.
        </p>
      </form>
    </AuthLayout>
  );
}
