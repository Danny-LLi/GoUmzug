import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import PackagesPage from './components/PackagesPage';
import WhyUsPage from './components/WhyUsPage';
import ContactPage from './components/ContactPage';

function App() {
  // This App component is the central router for your application.
  // Its primary job is to render the correct page component based on the URL.

  return (
    // The HelmetProvider is essential. It must wrap your entire router structure.
    // This allows each page component to manage the document head (<title>, <meta>, etc.)
    // for its specific route. The tags from the active page will be applied automatically.
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          {/* The <main> tag should grow to fill available space, pushing the footer down */}
          <main className="flex-grow">
            <Routes>
              {/* Each Route renders a specific page component. */}
              {/* The <Helmet> component inside each of these page components will control the SEO tags. */}
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/packages" element={<PackagesPage />} />
              <Route path="/why-us" element={<WhyUsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
