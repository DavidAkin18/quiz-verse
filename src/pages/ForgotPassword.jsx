import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../utils/firebase";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email) {
      setError("Please enter your email address.");
      setLoading(false);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
    } catch (err) {
      console.error("Password reset error:", err);
      setError("Failed to send password reset email. Please check your email and try again.");
    }

    setLoading(false);
  };

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle={!success ? "Enter your email below and we’ll send you a link to reset your password." : ""}
    >
      <div className="mt-6 w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md sm:p-8">
        {success ? (
          <div className="text-center">
            <p className="text-green-600 text-lg font-semibold mb-4">
              Password reset email sent successfully! Check your inbox.
            </p>
            <Link
              to="/signin"
              className="text-white bg-gradient-to-r from-[#3550DC] to-[#27E9F7] px-6 py-2 rounded-md inline-block mt-2 hover:opacity-90 transition"
            >
              Back to Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-[#3550DC] font-bold">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-md bg-[#EDEDF9] focus:outline-none focus:ring-2 focus:ring-[#3550DC]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 font-semibold text-white rounded-md transition flex items-center justify-center ${
                loading
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#3550DC] to-[#27E9F7]"
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Reset Link"
              )}
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">
              Remembered your password?{" "}
              <Link
                to="/signin"
                className="text-[#3550DC] font-semibold hover:underline"
              >
                Back to Login
              </Link>
            </p>
          </form>
        )}
      </div>
    </AuthLayout>
  );
}
