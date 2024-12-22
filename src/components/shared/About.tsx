import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import Education from './Education';
import Work from './Work';

export default function About() {
  return (
    <Tabs defaultValue="work">
      <TabsList className="w-full">
        <TabsTrigger className="w-full" value="work">
          Work
        </TabsTrigger>
        <TabsTrigger className="w-full" value="education">
          Education
        </TabsTrigger>
      </TabsList>
      <TabsContent value="work">
        <Work />
      </TabsContent>
      <TabsContent value="education">
        <Education />
      </TabsContent>
    </Tabs>
  );
}
