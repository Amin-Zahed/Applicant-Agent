import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import useSigninForm from "@/stores/useSigninForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ForgotPassword = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) => {
  const {
    setForgotPassword,
    forgotPasswordInputValue,
    setForgotPasswordInputValue,
  } = useSigninForm();

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      id="forgot-password-form"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold">Forgot your Password</h1>
        <p className="text-balance text-sm text-muted-foreground">
          If you forgot your password, give us your username or email so we can
          send you a verification code
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
            setForgotPasswordInputValue((e.target as HTMLInputElement).value)
          }
        />
        <h3>
          Remembered my password,{" "}
          <Link
            className="italic border-b-2 border-accent-foreground"
            to="/signin"
            onClick={() => setForgotPassword(false)}
          >
            Go back to login.
          </Link>
        </h3>
        <Button type="button">Send Verification Code</Button>
      </div>
    </form>
  );
};

export default ForgotPassword;
