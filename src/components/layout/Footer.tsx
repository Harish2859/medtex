
import { Link } from "react-router-dom";
import { Github, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-neon-darkBlue/90 border-t border-gray-200 dark:border-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">MedTech</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Revolutionizing healthcare with AI-powered tools for better health management and personalized recommendations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-neon-blue">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-neon-blue">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-neon-blue">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-neon-blue">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/symptom-checker" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-neon-blue">
                  Symptom Checker
                </Link>
              </li>
              <li>
                <Link to="/nutrition" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-neon-blue">
                  Mood Nutrition
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-neon-blue">
                  Health Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-neon-blue">
                  Health Articles
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-neon-blue">
                  Nutrition Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-neon-blue">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-neon-blue">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-neon-blue">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-neon-blue">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} MedTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
