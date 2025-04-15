import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";
// import { Eye } from "lucide-react";
// import { EyeOff } from "lucide-react";
import useSignupForm from "../stores/useSignupForm";

function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const {
    signupFormDatas,
    signupFormInputsHandler,
    passwordInputChangeHandler,
    passwordHasANumber,
    passwordHasALowercase,
    passwordHasAUppercase,
    passwordHasASpecialChar,
  } = useSignupForm();

  // const [showPassword, setShowPassword] = useState(false);

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <fieldset
        id="main-signup-fieldset"
        className="flex flex-col gap-6 w-full h-full"
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Sign up form</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Create an account
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Input
              id="username"
              type="username"
              name="username"
              maxLength={20}
              minLength={3}
              placeholder="Username"
              required
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
              At least 3 charactors and only letters, numbers, dotes,
              underscores, dashes and pluses.
            </p>
          </div>
          <div className="grid gap-2">
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
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
            <Input
              id="password"
              type="password"
              name="password"
              maxLength={20}
              minLength={3}
              placeholder="Password"
              required
              // className="w-[80%]"
              onInput={(e: ChangeEvent<HTMLInputElement>) =>
                signupFormInputsHandler(
                  e,
                  // /(?=(\S*[0-9]))((?=\S*[a-zA-Z0-9])(?=\S*[A-Z])(?=\S*[a-z]))^\S{4,}$/
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()[\]{}\-_=+|;:'",.<>/?\\`~])[\s\S]{4,}$/
                )
              }
              onChange={passwordInputChangeHandler}
            />
            {/* <span className="w-[10%] bg-amber-400">
            {showPassword ? (
              <Eye onClick={setShowPassword(false)} />
            ) : (
              <EyeOff onClick={setShowPassword(true)} />
            )}
          </span> */}
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
                      ? "yellow"
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
          <Button type="button" className="w-full cursor-pointer">
            Sign up
          </Button>
        </div>
      </fieldset>
    </form>
  );
}

export default SignupForm;
