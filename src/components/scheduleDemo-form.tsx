import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";
import ComboBoxScheduleDemo from "./comboBoxScheduleDemo";
import { Textarea } from "./ui/textarea";
import useScheduleForm from "@/stores/useScheduleForm";

function ScheduleDemoForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const {
    scheduleDemoFormDatas,
    profession,
    scheduleDemoFormInputsHandler,
    setScheduleDemoFormIsSubmit,
  } = useScheduleForm();

  return (
    <form
      className={cn("flex flex-col gap-6 lg:gap-2 2xl:gap-6 pb-7", className)}
      {...props}
      id="signup-form"
    >
      <div className="flex flex-col items-center gap-2  lg:gap-1 2xl:gap-2 text-center">
        <h1 className="text-2xl lg:text-lg 2xl:text-2xl font-bold">
          Schedule a demo
        </h1>
        <p className="text-balance text-sm lg:text-xs 2xl:text-sm text-muted-foreground">
          Tell us who you are ?
        </p>
      </div>
      <div className="grid gap-6 lg:gap-2 2xl:gap-6">
        <div className="grid gap-2 lg:gap-1 2xl:gap-2">
          <Input
            id="name"
            type="text"
            name="name"
            maxLength={20}
            minLength={3}
            placeholder="Name - What should we call you ?"
            required
            value={scheduleDemoFormDatas.name!}
            onInput={(e: ChangeEvent<HTMLInputElement>) =>
              scheduleDemoFormInputsHandler(e, /^[A-Za-z0-9._\-\+]{3,}$/)
            }
          />
          <p
            className="text-balance text-sm text-muted-foreground"
            style={{
              color:
                scheduleDemoFormDatas.name === undefined
                  ? "red"
                  : scheduleDemoFormDatas.name === null
                  ? "var(--muted-foreground)"
                  : "green",
            }}
          >
            At least 3 charactors and only letters, numbers, dotes, underscores,
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
            value={scheduleDemoFormDatas.email!}
            onInput={(e: ChangeEvent<HTMLInputElement>) =>
              scheduleDemoFormInputsHandler(
                e,
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              )
            }
          />
          <p
            className="text-balance text-sm text-muted-foreground"
            style={{
              color:
                scheduleDemoFormDatas.email === undefined
                  ? "red"
                  : scheduleDemoFormDatas.email === null
                  ? "var(--muted-foreground)"
                  : "green",
            }}
          >
            {scheduleDemoFormDatas.email === undefined
              ? "Not a valid email address"
              : scheduleDemoFormDatas.email === null
              ? "Email must be a valid email address"
              : "Valid email address"}
          </p>
        </div>
        <div className="grid gap-2">
          <ComboBoxScheduleDemo id="profession" />
          {/* <VisiblePasswordInput
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
          </ol> */}
        </div>
        <div className="grid gap-2 lg:gap-1 2xl:gap-2">
          <Textarea
            id="anythingElse"
            name="anythingElse"
            placeholder="Any thing else?"
            value={scheduleDemoFormDatas.anythingElse!}
            onInput={(e: ChangeEvent<HTMLTextAreaElement>) =>
              scheduleDemoFormInputsHandler(e, /.*/)
            }
          />
          {/* <VisiblePasswordInput
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
          </p> */}
        </div>
        <Button
          type="button"
          disabled={
            typeof scheduleDemoFormDatas.name === "string" &&
            typeof scheduleDemoFormDatas.email === "string" &&
            typeof profession === "string"
              ? false
              : true
          }
          title={
            typeof scheduleDemoFormDatas.name === "string" &&
            typeof scheduleDemoFormDatas.email === "string" &&
            typeof profession === "string"
              ? "Submit the form"
              : "Button is disabled, Please fill all the fields"
          }
          onClick={() => setScheduleDemoFormIsSubmit(true)}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default ScheduleDemoForm;
