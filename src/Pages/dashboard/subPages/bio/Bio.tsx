import ComboBox from "@/components/comboBoxScheduleDemo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useInfo from "@/stores/useInfo";

const Bio = () => {
  const { portraitURL, setPortraitFile, setPortraitUrl } = useInfo();

  return (
    <TabsContent value="bio">
      <Card>
        <CardHeader>
          <CardTitle>Info</CardTitle>
          <CardDescription>
            Make changes to your account here. Click save when you're done.
          </CardDescription>
        </CardHeader>
        <div className="flex flex-col lg:flex-row">
          <CardContent className="lg:w-1/3 border border-border mx-3 mt-2 py-4 rounded-3xl">
            <Label htmlFor="portrait">portriat</Label>
            <Label className="flex flex-col items-center">
              <Input
                type="file"
                accept=".png, .jpeg, .svg, .jpg"
                className="w-0 h-0 opacity-0"
                id="portrait"
                onInput={(e) => {
                  setPortraitFile((e.target as HTMLInputElement).files?.[0]!);
                  setPortraitUrl();
                }}
              ></Input>
              <span className="items-center">
                <Avatar
                  className="w-full h-full cursor-pointer"
                  title="Click to upload your portrait"
                >
                  <AvatarImage
                    src={
                      portraitURL
                        ? portraitURL
                        : "https://github.com/shadcn.png"
                    }
                    alt="@shadcn"
                    className="max-w-full max-h-full"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </span>
            </Label>
          </CardContent>
          <CardContent className="space-y-2 lg:w-2/3 border border-border mx-3 mt-2 py-4 rounded-3xl">
            <div className="space-y-1">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" placeholder="About me ..." />
            </div>
            <div className="space-y-1">
              <Label htmlFor="instruction">Instruction</Label>
              <Textarea id="instruction" placeholder="Instruction ..." />
            </div>
            <div className="space-y-1">
              <Label>References</Label>
              <ComboBox
                inputWidth="w-full"
                popoverWidth="w-[270px] sm:w-[550px]"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="site">Site</Label>
              <Input type="url" id="site" placeholder="Url ..." />
            </div>
            <div className="space-y-1">
              <Label htmlFor="resume">Resume</Label>
              <Input
                id="resume"
                type="file"
                accept=".pdf, .tex, .md, .odt, .text, .txt, .docx"
              />
            </div>
          </CardContent>
        </div>
        <CardFooter>
          <Button>Save changes</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default Bio;
