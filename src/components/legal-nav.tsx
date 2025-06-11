// import a from "next/a"
import { Bot } from "lucide-react";
import { Link } from "react-router-dom";

export function LegalNav() {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Apollo</span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link
              to="/terms&conditions"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy-policy"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
