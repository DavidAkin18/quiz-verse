// src/pages/SignUp.jsx
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
      setError(err.message);
    }
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Fill in the following information to get started"
    >
      <form onSubmit={handleSignUp} className="space-y-4 mt-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="p-2 border border-gray-300 rounded-md bg-[#EDEDF9]"
            value={user.first}
            onChange={(e) => setUser({ ...user, first: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-2 border border-gray-300 rounded-md bg-[#EDEDF9]"
            value={user.last}
            onChange={(e) => setUser({ ...user, last: e.target.value })}
            required
          />
        </div>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-2 border border-gray-300 rounded-md bg-[#EDEDF9]"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md bg-[#EDEDF9]"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 top-0 flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
          >
            <i className={`ri-${showPassword ? "eye-line" : "eye-off-line"} text-xl`} />
          </span>
        </div>

        <div className="relative">
          <input
            type={showRepeat ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full p-2 border border-gray-300 rounded-md bg-[#EDEDF9]"
            value={user.confirm}
            onChange={(e) => setUser({ ...user, confirm: e.target.value })}
            required
          />
          <span
            onClick={() => setShowRepeat(!showRepeat)}
            className="absolute inset-y-0 right-3 top-0 flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
          >
            <i className={`ri-${showRepeat ? "eye-line" : "eye-off-line"} text-xl`} />
          </span>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-2 font-semibold rounded-md transition ${
            isValid
              ? "bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          REGISTER <i className="ri-arrow-right-line ml-1"></i>
        </button>

        <p className="text-sm text-gray-600 text-left mt-4">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-[#3550DC] font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>

        <p className="text-xs text-gray-500 text-left mt-4">
          By creating an account, I confirm I have read and understood the{" "}
          <a href="#" className="text-[#3550DC] hover:underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#3550DC] hover:underline">
            Terms of Use
          </a>.
        </p>
      </form>
    </AuthLayout>
  );
}
