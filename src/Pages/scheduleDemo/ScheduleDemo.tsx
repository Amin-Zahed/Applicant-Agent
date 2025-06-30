import useScheduleForm from "@/stores/useScheduleForm";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScheduleDemoForm from "@/components/scheduleDemo-form";
import ScheduleDemoSvg from "../../assets/svgs/schedule-demo-svg";

function ScheduleDemo() {
  const { scheduleDemoFormDatas, scheduleDemoFormIsSubmit } = useScheduleForm();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div
        id="signup-form-container"
        className="lg:h-full lg:w-full border-2 lg:border-0 border-border rounded-2xl lg:rounded-none m-4 lg:m-0"
        style={{ display: scheduleDemoFormIsSubmit ? "none" : "flex" }}
      >
        <div className="flex flex-col gap-4 lg:w-1/2 w-full h-full px-6 md:p-10">
          <div className="flex justify-center gap-2 md:justify-start "></div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-sm lg:max-w-7xl space-y-8">
              <ScheduleDemoForm className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="relative hidden bg-muted lg:flex w-1/2 h-full">
          <div className="absolute inset-0 bg-background flex items-center justify-center px-3">
            <ScheduleDemoSvg />
          </div>
        </div>
      </div>
      <div
        id="signuped-card-container"
        className="overflow-auto scroll-auto items-center justify-center border-2 lg:border-0 border-border rounded-2xl lg:rounded-none m-4 lg:m-0"
        style={{ display: scheduleDemoFormIsSubmit ? "flex" : "none" }}
      >
        <div className="w-full max-w-sm lg:max-w-7xl space-y-8 p-16 flex items-center justify-center flex-col gap-4">
          <h1 className="xl:text-xl 2xl:text-5xl font-bold text-justify md:text-center">
            Verification email has been sent to {scheduleDemoFormDatas.email}
          </h1>
          <p>
            <Check size={200} strokeWidth={5} color="green" />
          </p>
          <p className="text-justify">
            To confirm your email address, please follow the link provided in
            email message sent to you
          </p>

          <Button variant="link" className="text-xl">
            <Link to="/">Back To Landing Page</Link>
          </Button>
          <Button variant="link" className="text-xl">
            <Link to="/signup">Go to Sign up Form</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ScheduleDemo;
