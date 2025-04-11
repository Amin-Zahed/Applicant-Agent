import DataTable from "@/components/data-table";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";

const Application = () => {
  return (
    <TabsContent value="application">
      <Card>
        <CardHeader>
          <CardTitle>Application</CardTitle>
          <CardDescription>
            Change your application here. After saving, you'll be logged out.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label>Data table</Label>
            <DataTable />
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default Application;
