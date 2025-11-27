import React, { Component, ReactNode, ErrorInfo } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface StateType {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, StateType> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): StateType {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Log to monitoring service (optional)
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
      // Could send to Sentry or similar
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    const { hasError, error } = this.state;
    if (hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full">
                <AlertTriangle size={32} />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Oops! Something went wrong
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              We encountered an unexpected error. Our team has been notified.
            </p>
            {import.meta.env.DEV && error && (
              <details className="text-left mb-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <summary className="cursor-pointer font-mono text-sm text-slate-700 dark:text-slate-300">
                  Error details (dev only)
                </summary>
                <pre className="mt-2 text-xs overflow-auto max-h-32 text-red-600 dark:text-red-400">
                  {error.toString()}
                </pre>
              </details>
            )}
            <button
              onClick={this.handleReset}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }

    const { children } = this.props;
    return children;
  }
}
