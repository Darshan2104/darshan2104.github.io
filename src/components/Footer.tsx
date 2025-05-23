import { Heart, Code, Coffee } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* <div className="flex items-center gap-2 text-gray-300">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Coffee className="h-4 w-4 text-amber-500" />
            <span>using</span>
            <Code className="h-4 w-4 text-blue-500" />
            <span>React + TypeScript</span>
          </div> */}
          
          <div className="text-center text-gray-400">
            <p>&copy; {currentYear} Darshan Tank. All rights reserved.</p>
          </div>
          
          {/* <div className="text-gray-400 text-sm">
            <p>Made with ❤️ in Bengaluru</p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};