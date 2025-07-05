import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useEffect } from "react";
import useSignupForm from "../stores/useSignupForm";
// import useLogin from "../stores/useLogin";
import VisiblePasswordInput from "./visible-password-input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const {
    signupFormDatas,
    signupFormInputsHandler,
    passwordHasANumber,
    passwordHasALowercase,
    passwordHasAUppercase,
    passwordHasASpecialChar,
    confirmPassword,
    passwordInputChangeHandler,
    confirmPasswordInputHandler,
    checkboxChecked,
    setCheckboxChecked,
    signupButtonEnabled,
    setSignupButtonEnabled,
    setSignupFormIsSubmit,
  } = useSignupForm();

  // const { setIsLogin } = useLogin();

  useEffect(() => {
    setSignupButtonEnabled();
  }, [signupFormDatas, confirmPassword, checkboxChecked]);

  return (
    <form
      className={cn("flex flex-col gap-6 lg:gap-2 2xl:gap-6 pb-7", className)}
      {...props}
      id="signup-form"
    >
      <div className="flex flex-col items-center gap-2  lg:gap-1 2xl:gap-2 text-center">
        <h1 className="text-2xl lg:text-lg 2xl:text-2xl font-bold">
          Sign up form
        </h1>
        <p className="text-balance text-sm lg:text-xs 2xl:text-sm text-muted-foreground">
          Create an account
        </p>
      </div>
      <div className="grid gap-6 lg:gap-2 2xl:gap-6">
        <div className="grid gap-2 lg:gap-1 2xl:gap-2">
          <Input
            id="username"
            type="username"
            name="username"
            maxLength={20}
            minLength={3}
            placeholder="Username"
            required
            value={signupFormDatas.username!}
            onInput={(e: ChangeEvent<HTMLInputElement>) =>
              signupFormInputsHandler(e, /^[A-Za-z0-9._\-\+]{3,}$/)
            }
          />
          <p
            className="text-balance text-sm text-muted-foreground"
            style={{
              color:
                signupFormDatas.username === undefined
                  ? "red"
                  : signupFormDatas.username === null
                  ? "var(--muted-foreground)"
                  : "green",
            }}
          >
            At least 3 characters and only letters, numbers, dotes, underscores,
            dashes and pluses.
          </p>
        </div>
        <div className="grid gap-2 lg:gap-1 2xl:gap-2">
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={signupFormDatas.email!}
            onInput={(e: ChangeEvent<HTMLInputElement>) =>
              signupFormInputsHandler(
                e,
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              )
            }
          />
          <p
            className="text-balance text-sm text-muted-foreground"
            style={{
              color:
                signupFormDatas.email === undefined
                  ? "red"
                  : signupFormDatas.email === null
                  ? "var(--muted-foreground)"
                  : "green",
            }}
          >
            {signupFormDatas.email === undefined
              ? "Not a valid email address"
              : signupFormDatas.email === null
              ? "Email must be a valid email address"
              : "Valid email address"}
          </p>
        </div>
        <div className="grid gap-2">
          <VisiblePasswordInput
            id="password"
            name="password"
            placeholder="Password"
            value={signupFormDatas.password!}
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
              At least one special character - [] , + = ? .{" "}
            </li>
          </ol>
        </div>
        <div className="grid gap-2 lg:gap-1 2xl:gap-2">
          <VisiblePasswordInput
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword!}
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
        <div className="gap-2 lg:gap-1 2xl:gap-2 flex items-center">
          <Checkbox
            className="cursor-pointer"
            onCheckedChange={() =>
              checkboxChecked === false
                ? setCheckboxChecked(true)
                : setCheckboxChecked(false)
            }
            checked={checkboxChecked}
            id="terms-and-conditions"
          />
          <span className="text-md">
            Accept
            <Button variant="link" className="text-md">
              <Link to="/Applicant-Agent/terms&conditions">
                terms and conditions
              </Link>
            </Button>
          </span>
        </div>
        <Button
          type="button"
          disabled={signupButtonEnabled ? false : true}
          title={
            signupButtonEnabled
              ? "Sign up"
              : "Button is disabled, Please fill all the fields"
          }
          onClick={() => setSignupFormIsSubmit(true)}
        >
          Sign up
        </Button>
      </div>
    </form>
  );
}

export default SignupForm;
