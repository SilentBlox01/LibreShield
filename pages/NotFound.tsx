import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Home, ArrowRight } from 'lucide-react';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Text */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[10rem] font-black text-slate-900 dark:text-white opacity-5 leading-none">
            404
          </h1>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-6 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full">
            <Shield size={48} />
          </div>
        </div>

        {/* Content */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-colors"
          >
            <Home size={20} />
            Go Home
          </button>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
          >
            Go Back
            <ArrowRight size={20} className="rotate-180" />
          </button>
        </div>

        {/* Suggestion */}
        <p className="mt-12 text-sm text-slate-500 dark:text-slate-400">
          Need help? Visit our <a href="/faq" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">FAQ</a> or <a href="/about" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">About</a> pages.
        </p>
      </div>
    </div>
  );
};
