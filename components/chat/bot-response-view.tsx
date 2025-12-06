import { ChatMessage } from "@/interfaces/chat.interface";
import DataAgGrid from "../ag-grid";
import OnDemand from "./on-demand";

type LLMResponseObject = {
  [key: string]: string[];
};

type BotResponseProps = {
  message: ChatMessage;
};

const BotResponseView = ({ message }: BotResponseProps) => {
  const llm = message?.llm_response as LLMResponseObject[] | undefined;
  return (
    <>
      <OnDemand llm={llm}/>
      {message.table && (
        <>
          <h1>Tabs</h1>
          <DataAgGrid
            rowData={message.table.tableData}
            columnDefs={message.table.columnDefs}
            className="h-auto"
          />
        </>
      )}
    </>
  );
};

export default BotResponseView;
