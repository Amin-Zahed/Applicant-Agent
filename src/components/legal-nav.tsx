import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function LegalNav() {
  return (
    <nav className="bg-background border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link to="/signup" className="text-sm font-medium">
              <Button variant="link">Back to Sign up form</Button>
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
          </div>
        </div>
      </div>
    </nav>
  );
}
