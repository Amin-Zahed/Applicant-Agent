import SignupForm from "@/components/signup-form";
import image from "@/assets/images/a modern dashboard design with Reacts Logo on the left side of the wall next to a monitor and TS logo on the right side of the wall next to the monitor.png";
import useSignupForm from "../../stores/useSignupForm";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

function Signup() {
  const { signupFormIsValid } = useSignupForm();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div
        id="signup-form-container"
        className="h-full w-full overflow-auto scroll-auto"
        style={{ display: signupFormIsValid ? "none" : "flex" }}
      >
        <div className="flex flex-col gap-4 p-6 md:p-10 lg:w-1/2 w-full h-full">
          <div className="flex justify-center gap-2 md:justify-start"></div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-sm lg:max-w-7xl space-y-8">
              <SignupForm className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="relative hidden bg-muted lg:flex w-1/2 h-full">
          <img
            src={image}
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
      <div
        id="signuped-card-container"
        className="h-full w-full overflow-auto scroll-auto items-center justify-center"
        style={{ display: signupFormIsValid ? "flex" : "none" }}
      >
        <div className="w-full max-w-sm lg:max-w-7xl space-y-8 p-16 flex items-center justify-center flex-col gap-4">
          <h1 className="xl:text-xl 2xl:text-5xl font-bold">
            Verification email has been sent to @Emails
          </h1>
          <p>
            <Check size={200} strokeWidth={5} color="green" />
          </p>
          <p>
            To confirm your email address, please follow the link provided in
            email message sent to you
          </p>
          <p className="font-semibold text-2xl italic border-b-2 border-foreground">
            <Link to="/">Open Home Page</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
