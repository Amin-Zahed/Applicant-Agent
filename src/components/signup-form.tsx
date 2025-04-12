import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCallback, useState, ChangeEvent } from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Eye } from "lucide-react";
// import { EyeOff } from "lucide-react";

function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [formDatas, setFormDatas] = useState({
    username: null,
    password: null,
  });
  // const [showPassword, setShowPassword] = useState(false);

  const inputsHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>, regex: RegExp) => {
      const { name, value } = e.target;

      setFormDatas((prev) => {
        if (value) {
          if (value.match(regex)) {
            return { ...prev, [name]: value };
          } else {
            return { ...prev, [name]: "notValid" };
          }
        } else {
          return { ...prev, [name]: null };
        }
      });
    },
    []
  );

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <fieldset id="main-signup-fieldset" className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your user name below to sign up at this website
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="username">User name</Label>
            <Input
              id="username"
              type="username"
              name="username"
              maxLength={20}
              minLength={3}
              placeholder="AminZahed"
              required
              onInput={(e: ChangeEvent<HTMLInputElement>) =>
                inputsHandler(e, /^(\w+(\w+|\s+))+[\w]+$/)
              }
            />
            {formDatas.username === "notValid" && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  User name must be between 3 and 20 charactors contains
                  uppercase and/or lowercase letters and/or numbers and/or under
                  score. also you can to place white spaces between charactors
                </AlertDescription>
              </Alert>
            )}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              id="password"
              type="password"
              name="password"
              maxLength={20}
              minLength={6}
              placeholder="******"
              required
              // className="w-[80%]"
              onInput={(e: ChangeEvent<HTMLInputElement>) =>
                inputsHandler(
                  e,
                  /(?=(\S*[0-9]))((?=\S*[a-zA-Z0-9])(?=\S*[A-Z])(?=\S*[a-z]))^\S{6,}$/
                )
              }
            />
            {/* <span className="w-[10%] bg-amber-400">
            {showPassword ? (
              <Eye onClick={setShowPassword(false)} />
            ) : (
              <EyeOff onClick={setShowPassword(true)} />
            )}
          </span> */}
            {formDatas.password === "notValid" && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  Password must be between 6 and 20 charactors That's for sure
                  contains minimum 1 number and 1 uppercase and 1 lowercase
                  letter and 1 special characters like @ or ~ or \ or ...
                </AlertDescription>
              </Alert>
            )}
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
