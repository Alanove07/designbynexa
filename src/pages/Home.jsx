import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Chatbot from '../components/Chatbot';

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Chatbot />

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Nexa Designs by Alanove. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
