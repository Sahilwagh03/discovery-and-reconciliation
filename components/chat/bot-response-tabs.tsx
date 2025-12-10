import { useChatContext } from "@/context/chat-context";
import { Button, buttonVariants } from "../ui/button";
import { ChatMessage } from "@/interfaces/chat.interface";
import { TabsTrigger } from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

type BotResponseTabsProp = {
  message: ChatMessage;
};
const BotResponseTabs = ({ message }: BotResponseTabsProp) => {
  const { gridApis } = useChatContext();

  const exportCSV = () => {
    gridApis[message.id!]?.exportDataAsCsv({
      fileName: `${message.id}-data.csv`,
    });
  };

  return (
    <div className="w-full border mb-2 p-1.5 rounded-lg flex flex-row gap-2">
      <Button className="flex-1 cursor-pointer" onClick={exportCSV}>
        Export to CSV
      </Button>
      <TabsTrigger
        className={cn(buttonVariants(), "flex-1 cursor-pointer")}
        value="table"
      >
        View Table
      </TabsTrigger>
      <TabsTrigger
        className={cn(buttonVariants(), "flex-1 cursor-pointer")}
        value="json"
      >
        View JSON
      </TabsTrigger>
      {(message.cypher || message.sql) && (
        <TabsTrigger
          className={cn(buttonVariants(), "flex-1 cursor-pointer")}
          value="query"
        >
          View {(message.cypher && "Cypher") || (message.sql && "SQL") || ""}
        </TabsTrigger>
      )}
    </div>
  );
};

export default BotResponseTabs;
