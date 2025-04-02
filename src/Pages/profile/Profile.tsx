import Barchart from "@/components/bar-chart";
import ComboBox from "@/components/comboBox";
import DataTable from "@/components/data-table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

function Profile() {
  return (
    <div id="profile">
      <br />
      <h1 className="text-center">Profile</h1>
      <br />
      <Tabs defaultValue="info" className="w-[320px] sm:w-[600px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="info" className="cursor-pointer">
            Info
          </TabsTrigger>
          <TabsTrigger value="application" className="cursor-pointer">
            Application
          </TabsTrigger>
          <TabsTrigger value="chart" className="cursor-pointer">
            chart
          </TabsTrigger>
        </TabsList>
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
        <TabsContent value="application">
          <Card>
            <CardHeader>
              <CardTitle>Application</CardTitle>
              <CardDescription>
                Change your application here. After saving, you'll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label>Data table</Label>
                <DataTable />
              </div>
            </CardContent>
            {/* <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter> */}
          </Card>
        </TabsContent>
        <TabsContent value="chart">
          <Card>
            <CardHeader>
              <CardTitle>Chart</CardTitle>
              <CardDescription>
                Your activities chart application is here.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Barchart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Profile;
