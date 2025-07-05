import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import usePrivacy from "@/stores/usePrivacy";

export function LegalNav() {
  const { setShowPrivacy } = usePrivacy();

  return (
    <nav className="bg-background border-b border-foreground sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link to="/Applicant-Agent/signup" className="text-sm font-medium">
              <Button variant="link">Back to Sign up form</Button>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <p
              className="cursor-pointer text-sm font-medium text-foreground hover:text-secondary-foreground hover:border-b hover:border-secondary-foreground"
              onClick={() => setShowPrivacy(false)}
            >
              Terms & Conditions
            </p>
            <p
              className="cursor-pointer text-sm font-medium text-foreground hover:text-secondary-foreground hover:border-b hover:border-secondary-foreground"
              onClick={() => setShowPrivacy(true)}
            >
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
