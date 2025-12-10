import { ChatMessage } from "@/interfaces/chat.interface";
import DataAgGrid from "../ag-grid";
import OnDemand from "./on-demand";
import BotResponseTabs from "./bot-response-tabs";
import { Tabs, TabsContent, TabsList } from "@radix-ui/react-tabs";
import JSONViewer from "../json-viewer";
import MessageActions from "./message-actions";
import { useChatContext } from "@/context/chat-context";

type LLMResponseObject = {
  [key: string]: string[];
};

export type BotResponseProps = {
  message: ChatMessage;
};

const BotResponseView = ({ message }: BotResponseProps) => {
  const llm = message?.llm_response as LLMResponseObject[] | undefined;
  const { setGridApi } = useChatContext();

  const handleGridReady = (params: any) => {
    setGridApi(message.id!, params.api);
  };

  return (
    <>
      <OnDemand llm={llm} />
      {message.table && (
        <Tabs className="w-full overflow-x-auto" defaultValue="table">
          <TabsList>
            <BotResponseTabs message={message} />
          </TabsList>
          <TabsContent value="table">
            <DataAgGrid
              rowData={message.table.tableData}
              columnDefs={message.table.columnDefs}
              className="h-auto chat-table-view"
              onGridReady={handleGridReady}
            />
          </TabsContent>
          <TabsContent value="json">
            <JSONViewer data={message.table.tableData} />
          </TabsContent>
          {(message.cypher || message.sql) && (
            <TabsContent value="query">
              <JSONViewer data={message.cypher || message.sql} />
            </TabsContent>
          )}
        </Tabs>
      )}
      <MessageActions message={message} />
    </>
  );
};

export default BotResponseView;
