


import React from "react";
import { useTranslation } from "react-i18next";
import { Heart, Code, Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Disclaimer Banner */}
      <div className="bg-red-600 text-white text-center p-2 sm:p-3">
        <h1 className="text-xs sm:text-sm">{t("disclaimer")}</h1>
      </div>
      
      {/* Main Footer */}
      <footer className="bg-gray-900 text-white px-4 sm:px-6 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* Column 1 - Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-indigo-600 rounded-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold">
                  Clip<span className="text-indigo-400">Flow</span>
                </h2>
              </div>
              <p className="text-gray-400 text-sm">
                "Paste the link, click download. That's it."
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2 - Company */}
            <div>
              <h3 className="font-semibold text-md mb-4 sm:mb-5">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-indigo-400 text-[13px] transition-colors flex items-center">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 text-[13px] transition-colors flex items-center">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 text-[13px] transition-colors flex items-center">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 text-[13px] transition-colors flex items-center">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Resources */}
            <div>
              <h3 className="font-semibold text-lg mb-4 sm:mb-5">Resources</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-indigo-400 text-[13px] transition-colors flex items-center">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 text-[13px] transition-colors flex items-center">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 text-[13px] transition-colors flex items-center">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 text-[13px] transition-colors flex items-center">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Explore */}
            <div>
              <h3 className="font-semibold text-lg mb-4 sm:mb-5">Explore</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-indigo-400 text-[13px] transition-colors flex items-center">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 text-[13px] transition-colors flex items-center">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 text-[13px] transition-colors flex items-center">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 text-[13px] transition-colors flex items-center">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-[13px] mb-3 md:mb-0">
              © {new Date().getFullYear()} ClipFlow. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-gray-500 text-sm">
              <a href="#" className="hover:text-indigo-400 text-[13px] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-indigo-400 text-[13px] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-indigo-400 text-[13px] transition-colors">
                Cookies
              </a>
            </div>
          </div>

          {/* Made with love */}
          <div className="text-center text-xs text-gray-600 mt-6 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-current" />
            <span>and</span>
            <Code className="w-3 h-3 text-indigo-400" />
            <span>by ClipFlow Team</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;  