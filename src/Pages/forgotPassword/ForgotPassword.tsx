import { ChangeEvent, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import useForgotPassword from "@/stores/useForgotPassword";
import useSignupForm from "@/stores/useSignupForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import VisiblePasswordInput from "@/components/visible-password-input";
import useLogin from "@/stores/useLogin";

const ForgotPassword = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) => {
  const {
    forgotPasswordInputValue,
    setForgotPasswordInputValue,
    sendRequestVerificationCode,
    setSendRequestVerificationCode,
    inputOptIsValid,
    setInputOptIsValid,
    sendVerifyCode,
    setSendVerifyCode,
    changePasswordButtonEnabled,
    setChangePasswordButtonEnabled,
  } = useForgotPassword();

  const {
    signupFormDatas,
    signupFormInputsHandler,
    passwordInputChangeHandler,
    passwordHasASpecialChar,
    passwordHasANumber,
    passwordHasALowercase,
    passwordHasAUppercase,
    confirmPassword,
    confirmPasswordInputHandler,
  } = useSignupForm();

  const { setIsLogin } = useLogin();

  useEffect(() => {
    if (
      typeof signupFormDatas.password === "string" &&
      typeof confirmPassword === "string"
    ) {
      setChangePasswordButtonEnabled(true);
    } else {
      setChangePasswordButtonEnabled(false);
    }
  }, [signupFormDatas, confirmPassword]);

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
                  disabled={typeof forgotPasswordInputValue !== "string"}
                  onClick={() => setSendRequestVerificationCode(true)}
                >
                  Send Verification Code
                </Button>
              </div>
            </form>
          </div>
          <div
            style={{
              display:
                sendRequestVerificationCode === false ||
                (sendVerifyCode && sendRequestVerificationCode)
                  ? "none"
                  : "block",
            }}
          >
            <form className={cn("flex flex-col gap-6", className)} {...props}>
              <div className="flex flex-col items-center gap-4 text-center">
                <h1 className="text-2xl font-bold">
                  Enter the verification code
                </h1>
              </div>
              <div className="grid gap-6 mb-5">
                <InputOTP
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                  onInput={(e) => {
                    (e.target as HTMLInputElement).value.length === 6
                      ? setInputOptIsValid(true)
                      : setInputOptIsValid(false);
                  }}
                >
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
                <Button
                  type="button"
                  disabled={!inputOptIsValid}
                  onClick={() => setSendVerifyCode(true)}
                >
                  Verify
                </Button>
              </div>
            </form>
          </div>
          <div style={{ display: sendVerifyCode ? "block" : "none" }}>
            <form className={cn("flex flex-col gap-6", className)} {...props}>
              <div className="flex flex-col items-center gap-4 text-center">
                <h1 className="text-2xl font-bold">Change Password</h1>
              </div>
              <div className="grid gap-2">
                <VisiblePasswordInput
                  id="newPassword"
                  name="password"
                  placeholder="New Password"
                  value={signupFormDatas.password}
                  onInput={(e: ChangeEvent<HTMLInputElement>) =>
                    signupFormInputsHandler(
                      e,
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()[\]{}\-_=+|;:'",.<>/?\\`~])[\s\S]{4,}$/
                    )
                  }
                  onChange={passwordInputChangeHandler}
                />
                <ol className="text-balance text-sm text-muted-foreground list-inside list-disc">
                  <li
                    style={{
                      color:
                        signupFormDatas.password === null
                          ? "var(--muted-foreground)"
                          : passwordHasANumber
                          ? "green"
                          : "red",
                    }}
                  >
                    At least one number.
                  </li>
                  <li
                    style={{
                      color:
                        signupFormDatas.password === null
                          ? "var(--muted-foreground)"
                          : passwordHasALowercase && passwordHasAUppercase
                          ? "green"
                          : passwordHasALowercase || passwordHasAUppercase
                          ? "orange"
                          : "red",
                    }}
                  >
                    Combination of upper and lower case letters.
                  </li>
                  <li
                    style={{
                      color:
                        signupFormDatas.password === null
                          ? "var(--muted-foreground)"
                          : passwordHasASpecialChar
                          ? "green"
                          : "red",
                    }}
                  >
                    At least one special charactor - [] , + = ? .{" "}
                  </li>
                </ol>
              </div>
              <div className="grid gap-2">
                <VisiblePasswordInput
                  id="confirmNewPassword"
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onInput={confirmPasswordInputHandler}
                />
                <p
                  className="text-balance text-sm text-muted-foreground"
                  style={{
                    color:
                      confirmPassword === undefined
                        ? "red"
                        : confirmPassword === null
                        ? "var(--muted-foreground)"
                        : "green",
                  }}
                >
                  {confirmPassword === undefined
                    ? "Confirm password is not the same as password"
                    : confirmPassword === null
                    ? "Confirm password must be the same as password"
                    : "Confirm password is the same as password"}
                </p>
              </div>
              <div className="grid gap-6">
                <Link to="/dashboard">
                  <Button
                    type="button"
                    disabled={!changePasswordButtonEnabled}
                    className="w-full"
                    onClick={() => {
                      setIsLogin(true);
                      sessionStorage.setItem(
                        "username",
                        signupFormDatas.username!
                      );
                      sessionStorage.setItem(
                        "password",
                        signupFormDatas.password!
                      );
                      sessionStorage.setItem("email", signupFormDatas.email!);
                    }}
                  >
                    Change Password
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
