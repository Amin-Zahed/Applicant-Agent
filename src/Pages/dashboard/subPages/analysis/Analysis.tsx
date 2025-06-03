import Barchart from "@/components/bar-chart";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Piechart from "@/components/pie-chart";
import { TabsContent } from "@/components/ui/tabs";

const Analysis = () => {
  return (
    <TabsContent value="analysis">
      <Card>
        <CardHeader>
          <CardTitle>Chart</CardTitle>
          <CardDescription>
            Your activities chart application is here.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div id="chart-container" className="flex flex-col lg:flex-row">
            <Barchart />
            <Piechart />
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default Analysis;
