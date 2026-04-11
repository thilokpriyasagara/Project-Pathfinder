import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import PathwayFinder from './pages/PathwayFinder';
import Opportunities from './pages/Opportunities';
import CareerFields from './pages/CareerFields';
import CareerFieldDetails from './pages/CareerFieldDetails';
import Resources from './pages/Resources';
import About from './pages/About';
import BlogPost1 from './pages/BlogPost1';
import BlogPost2 from './pages/BlogPost2';
import BlogPost3 from './pages/BlogPost3';
import Contact from './pages/Contact';
import ScrollToTop from './components/ui/ScrollToTop';
import Chatbot from './components/ui/Chatbot';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pathway-finder" element={<PathwayFinder />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/fields" element={<CareerFields />} />
            <Route path="/fields/:id" element={<CareerFieldDetails />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog/choosing-right-path" element={<BlogPost1 />} />
            <Route path="/blog/vocational-nvq-training" element={<BlogPost2 />} />
            <Route path="/blog/career-fields-sri-lanka" element={<BlogPost3 />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
        <Chatbot/>
      </Router>
    </LanguageProvider>
  );
}

export default App;
