import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import useSigninForm from "@/stores/useSigninForm";
import useLogin from "@/stores/useLogin";
import GoogleIconSvg from "../assets/svgs/google-icon-svg";
import GitHubIconSvg from "../assets/svgs/github-icon-svg";

function SigninForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const {
    usernameInputValue,
    passwordInputValue,
    setUsernameInputValue,
    setPasswordInputValue,
  } = useSigninForm();

  const { isLogin, setIsLogin } = useLogin();

  return (
    <form
      className={cn("flex flex-col gap-6 lg:gap-2 2xl:gap-6", className)}
      {...props}
      id="signin-form"
    >
      <div className="flex flex-col items-center gap-2 lg:gap-1 2xl:gap-2 text-center">
        <h1 className="text-2xl lg:text-lg 2xl:text-2xl font-bold">
          Sign in to your account
        </h1>
        <p className="text-balance text-sm lg:text-xs 2xl:text-sm text-muted-foreground">
          Enter your username below to sign in to your account
        </p>
      </div>
      <div className="grid gap-6 lg:gap-2 2xl:gap-6">
        <div className="grid gap-2 lg:gap-1 2xl:gap-2">
          <Label htmlFor="username">User name</Label>
          <Input
            id="username"
            type="username"
            placeholder=""
            onInput={(e) => {
              setUsernameInputValue((e.target as HTMLInputElement).value);
            }}
          />
        </div>
        <div className="grid gap-2 lg:gap-1 2xl:gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Button variant="link" className="ml-auto text-sm">
              <Link to="/Applicant-Agent/forgot-password">
                Forgot your password?
              </Link>
            </Button>
          </div>
          <Input
            id="password"
            type="password"
            placeholder=""
            onInput={(e) => {
              setPasswordInputValue((e.target as HTMLInputElement).value);
            }}
          />
        </div>
        <Link to={isLogin ? "/Applicant-Agent/dashboard" : ""}>
          <Button
            type="button"
            disabled={
              typeof usernameInputValue !== "string" ||
              typeof passwordInputValue !== "string"
            }
            className="w-full"
            onClick={() => {
              usernameInputValue === sessionStorage.getItem("username") &&
              passwordInputValue === sessionStorage.getItem("password")
                ? setIsLogin(true)
                : setIsLogin(false);
            }}
          >
            Signin
          </Button>
        </Link>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full">
          <GitHubIconSvg />
          Sign in with GitHub
        </Button>
        <Button variant="outline" className="w-full flex items-center gap-2">
          <GoogleIconSvg />
          Sign in with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?
        <Button variant="link" className="text-sm">
          <Link to="/Applicant-Agent/signup">Sign up</Link>
        </Button>
      </div>
    </form>
  );
}

export default SigninForm;
