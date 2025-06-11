import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import usePrivacy from "@/stores/usePrivacy";

export function LegalNav() {
  const { privacyShow, setPrivacyShow } = usePrivacy();

  return (
    <nav className="bg-background border-b border-foreground sticky top-0 z-10">
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
              className="text-sm font-medium text-foreground hover:text-secondary-foreground"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy-policy"
              className="text-sm font-medium text-foreground hover:text-secondary-foreground"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
