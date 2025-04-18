import SignupForm from "@/components/signup-form";
import image from "@/assets/images/a modern dashboard design with Reacts Logo on the left side of the wall next to a monitor and TS logo on the right side of the wall next to the monitor.png";
import useSignupForm from "../../stores/useSignupForm";

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
        className="h-full w-full overflow-auto scroll-auto bg-lime-400"
        style={{ display: signupFormIsValid ? "flex" : "none" }}
      ></div>
    </div>
  );
}

export default Signup;
