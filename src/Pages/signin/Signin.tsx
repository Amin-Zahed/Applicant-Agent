import SigninForm from "@/components/signin-form";

function Signin() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-4 p-6 md:p-10 border-2 border-border rounded-2xl m-4">
        <div className="flex justify-center gap-2 md:justify-start "></div>
        <div className="flex flex-1 items-center justify-center ">
          <div className="w-full max-w-xs ">
            <SigninForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
