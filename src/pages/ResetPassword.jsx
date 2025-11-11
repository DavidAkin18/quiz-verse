import { useState, useEffect } from "react";
import { confirmPasswordReset, verifyPasswordResetCode } from "firebase/auth";
import { auth } from "../utils/firebase";
import AuthLayout from "../components/AuthLayout";
import { useSearchParams, Link } from "react-router-dom";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

const oobCode = searchParams.get("oobCode"); // Firebase code
const mode = searchParams.get("mode");       // should be "resetPassword"

useEffect(() => {
  if (!oobCode || mode !== "resetPassword") {
    setError("Invalid or expired password reset link.");
    return;
  }

  // Verify the code is valid
  verifyPasswordResetCode(auth, oobCode).catch(() => {
    setError("Expired or invalid link.");
  });
}, [oobCode, mode]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setSuccess(true);
    } catch (err) {
      setError("Failed to reset password. Please try again.");
    }

    setLoading(false);
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle={!success ? "Enter your new password to continue." : ""}
    >
      <div className="mt-6 w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md sm:p-8">
        {success ? (
          <div className="text-center">
            <p className="text-green-600 text-lg font-semibold mb-4">
              Your password has been reset successfully!
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
                New Password <span className="text-[#3550DC] font-bold">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter your new password"
                className="w-full p-2 border border-gray-300 rounded-md bg-[#EDEDF9] focus:outline-none focus:ring-2 focus:ring-[#3550DC]"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 font-semibold text-white rounded-md transition ${
                loading
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#3550DC] to-[#27E9F7]"
              }`}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}
      </div>
    </AuthLayout>
  );
}
