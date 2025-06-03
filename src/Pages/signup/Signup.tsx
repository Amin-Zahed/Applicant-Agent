import SignupForm from "@/components/signup-form";
import image from "@/assets/images/a modern dashboard design with Reacts Logo on the left side of the wall next to a monitor and TS logo on the right side of the wall next to the monitor.png";
import useSignupForm from "../../stores/useSignupForm";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useLogin from "@/stores/useLogin";

function Signup() {
  const { signupFormDatas, signupFormIsSubmit } = useSignupForm();
  const { setIsLogin } = useLogin();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div
        id="signup-form-container"
        className="lg:h-full lg:w-full border-2 lg:border-0 border-border rounded-2xl lg:rounded-none m-4 lg:m-0"
        style={{ display: signupFormIsSubmit ? "none" : "flex" }}
      >
        <div className="flex flex-col gap-4 lg:w-1/2 w-full h-full px-6 md:p-10">
          <div className="flex justify-center gap-2 md:justify-start "></div>
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
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
      <div
        id="signuped-card-container"
        className="overflow-auto scroll-auto items-center justify-center border-2 lg:border-0 border-border rounded-2xl lg:rounded-none m-4 lg:m-0"
        style={{ display: signupFormIsSubmit ? "flex" : "none" }}
      >
        <div className="w-full max-w-sm lg:max-w-7xl space-y-8 p-16 flex items-center justify-center flex-col gap-4">
          <h1 className="xl:text-xl 2xl:text-5xl font-bold text-justify md:text-center">
            Verification email has been sent to {signupFormDatas.email}
          </h1>
          <p>
            <Check size={200} strokeWidth={5} color="green" />
          </p>
          <p className="text-justify">
            To confirm your email address, please follow the link provided in
            email message sent to you
          </p>

          <Button
            variant="link"
            className="text-xl"
            onClick={() => {
              setIsLogin(true);
              sessionStorage.setItem("username", signupFormDatas.username!);
              sessionStorage.setItem("password", signupFormDatas.password!);
              sessionStorage.setItem("email", signupFormDatas.email!);
            }}
          >
            <Link to="/dashboard">Open Your Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
