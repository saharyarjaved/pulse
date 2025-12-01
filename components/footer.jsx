import { Instagram, Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800/50 py-8 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      
      {/* Left side text */}
      <div className="flex items-center gap-6 text-sm text-gray-400">
        © {new Date().getFullYear()} | By Saharyar Javed
      </div>

      {/* Right side icons */}
      <div className="flex gap-4 items-center">
        <a
          href="https://www.instagram.com/rakibj1/"
          className="text-gray-400"
          target="_blank"
        >
          <Instagram className="w-5 h-5" />
        </a>

        <a
          href="mailto:saharyar@example.com"
          className="text-gray-400"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
