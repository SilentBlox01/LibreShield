
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Layout } from './components/Layout';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/Home';
import { Assessment } from './pages/Assessment';
import { Results } from './pages/Results';
import { Tools } from './pages/Tools';
import { PrivacyHub } from './pages/PrivacyHub';
import { ImageLab } from './pages/ImageLab';
import { Phishing } from './pages/Phishing';
import { FAQ } from './pages/FAQ';
import { Terms, Privacy } from './pages/Legal';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { logger } from './lib/logger';

function App() {
  useEffect(() => {
    // Register service worker for PWA functionality
    if ('serviceWorker' in navigator && import.meta.env.PROD) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((reg) => {
          logger.info('Service Worker registered', { scope: reg.scope });
        })
        .catch((err) => {
          logger.warn('Service Worker registration failed', { error: err.message });
        });
    }
  }, []);

  return (
    <ErrorBoundary>
      <AppProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/results" element={<Results />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/hub" element={<PrivacyHub />} />
              <Route path="/lab" element={<ImageLab />} />
              <Route path="/phishing" element={<Phishing />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;