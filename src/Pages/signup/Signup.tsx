import SignupForm from "@/components/signup-form";
function Signup() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-4 p-6 md:p-10 border-2 border-border rounded-2xl">
        <div className="flex justify-center gap-2 md:justify-start"></div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
