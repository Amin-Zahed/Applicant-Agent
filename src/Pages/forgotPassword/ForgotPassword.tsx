import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import useForgotPassword from "@/stores/useForgotPassword";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

const ForgotPassword = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) => {
  const {
    forgotPasswordInputValue,
    setForgotPasswordInputValue,
    sendRequestVerificationCode,
    setSendRequestVerificationCode,
  } = useForgotPassword();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-4 p-6 md:p-10 border-2 border-border rounded-2xl m-4">
        <div className="flex justify-center gap-2 md:justify-start "></div>
        <div className="flex flex-1 items-center justify-center ">
          <div
            className="w-full max-w-xs"
            style={{ display: sendRequestVerificationCode ? "none" : "block" }}
          >
            <form className={cn("flex flex-col gap-6", className)} {...props}>
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
                <Button
                  type="button"
                  onClick={() => setSendRequestVerificationCode(true)}
                >
                  Send Verification Code
                </Button>
              </div>
            </form>
          </div>
          <div
            style={{ display: sendRequestVerificationCode ? "block" : "none" }}
          >
            <form className={cn("flex flex-col gap-6", className)} {...props}>
              <div className="flex flex-col items-center gap-4 text-center">
                <h1 className="text-2xl font-bold">
                  Enter the verification code
                </h1>
              </div>
              <div className="grid gap-6 mb-5">
                <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <div className="grid gap-6">
                <Button type="button">Verify</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
