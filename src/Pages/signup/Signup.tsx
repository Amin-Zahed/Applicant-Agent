import SignupForm from "@/components/signup-form";
import image from "@/assets/images/a modern dashboard design with Reacts Logo on the left side of the wall next to a monitor and TS logo on the right side of the wall next to the monitor.png";

function Signup() {
  return (
    // <div className="flex h-full w-full flex-col items-center justify-center">
    <div className="grid h-full lg:grid-cols-2 border-2 border-border rounded-2xl overflow-hidden m-4">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start"></div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src={image}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

export default Signup;
