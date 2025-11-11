// src/components/AuthLayout.jsx
export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="py-12 px-6 pt-10 rounded-lg space-y-6 w-full max-w-md shadow-lg">
        {/* Logo */}
        <div className="text-left">
          <img
            src="https://res.cloudinary.com/def9quyti/image/upload/v1761912705/ChatGPT_Image_Oct_31_2025_12_06_47_PM_bseihs.png"
            alt="logo"
            className="h-16"
          />
        </div>

        {/* Header */}
        <div className="text-left">
          <h2 className="text-xl font-bold tracking-wider">{title}</h2>
          {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
        </div>

        {children}
      </div>
    </div>
  );
}
