import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import useSigninForm from "@/stores/useSigninForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ForgotPassword = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) => {
  const { forgotPasswordInputValue, setForgotPasswordInputValue } =
    useSigninForm();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-4 p-6 md:p-10 border-2 border-border rounded-2xl m-4">
        <div className="flex justify-center gap-2 md:justify-start "></div>
        <div className="flex flex-1 items-center justify-center ">
          <div className="w-full max-w-xs ">
            <form
              className={cn("flex flex-col gap-6", className)}
              {...props}
              id="forgot-password-form"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <h1 className="text-2xl font-bold">Forgot your Password</h1>
                <p className="text-balance text-sm text-muted-foreground text-center">
                  If you forgot your password, give us your username or email so
                  we can send you a verification code
                </p>
              </div>
              <div className="grid gap-6">
                <Input
                  type="email"
                  id="email"
                  placeholder="Email or Username"
                  required
                  value={forgotPasswordInputValue}
                  onInput={(e) =>
                    setForgotPasswordInputValue(
                      (e.target as HTMLInputElement).value
                    )
                  }
                />
                <p className="text-sm text-balance text-muted-foreground">
                  Remembered my password,
                  <Button variant="link" className="ml-auto text-sm">
                    <Link to="/signin">Go back to login.</Link>
                  </Button>
                </p>
                <Button type="button">Send Verification Code</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
