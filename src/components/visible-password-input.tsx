import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";

interface VisiblePasswordInputProps {
  id: string;
  name: string;
  placeholder: string;
  onInput?: React.FormEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const VisiblePasswordInput = (props: VisiblePasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="rounded-md flex items-center justify-between dark:bg-input/30 border-input bg-transparent file:bg-transparent file:font-medium border text-basefile:border-0 file:text-sm  md:text-sm selection:bg-primary selection:text-primary-foreground aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive">
      <Input
        id={props.id}
        type={showPassword ? "text" : "password"}
        name={props.name}
        maxLength={20}
        minLength={3}
        placeholder={props.placeholder}
        required={true}
        className="w-[90%] border-none dark:bg-input/0"
        onInput={props.onInput}
        onChange={props.onChange}
      />

      <span className="w-[10%] h-[100%] rounded-2xl flex items-center justify-center bg-transparent file:bg-transparent">
        {showPassword ? (
          <EyeOff
            onClick={() => setShowPassword(false)}
            className="cursor-pointer"
          />
        ) : (
          <Eye
            onClick={() => setShowPassword(true)}
            className="cursor-pointer"
          />
        )}
      </span>
    </div>
  );
};

export default VisiblePasswordInput;
