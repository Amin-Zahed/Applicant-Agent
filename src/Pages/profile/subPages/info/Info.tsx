import ComboBox from "@/components/comboBox";
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

const Info = () => {
  return (
    <TabsContent value="info">
      <Card>
        <CardHeader>
          <CardTitle>Info</CardTitle>
          <CardDescription>
            Make changes to your account here. Click save when you're done.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
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
            <Textarea id="site" placeholder="Url ..." />
          </div>
          <div className="space-y-1">
            <Label htmlFor="resume">Resume</Label>
            <Input id="resume" type="file" accept=".pdf" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save changes</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default Info;
