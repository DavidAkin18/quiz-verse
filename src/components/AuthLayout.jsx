 export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-quiz-dark text-quiz-darkText">
      <div className="py-12 px-6 pt-10 md:rounded-lg space-y-6 w-full max-w-md shadow-lg bg-white text-quiz-lightText">
        {/* Logo & Branding */}
        <div className="flex items-center justify-start space-x-3">
          <img
            src="https://res.cloudinary.com/def9quyti/image/upload/v1761912705/ChatGPT_Image_Oct_31_2025_12_06_47_PM_bseihs.png"
            alt="logo"
            className="h-12 w-12 rounded-full"
          />
          <h1 className="text-2xl font-bold text-quiz-primary">QuizMaster</h1>
        </div>

        {/* Header */}
        <div className="text-left">
          <h2 className="text-xl font-bold tracking-wider text-quiz-dark">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 mt-2">{subtitle}</p>
          )}
        </div>

        {/* Main content (Form or children) */}
        {children}

        {/* Optional Footer accent */}
        <div className="h-1 w-full bg-quiz-gradient rounded-full"></div>
      </div>
    </div>
  );
}
