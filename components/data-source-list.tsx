"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useChatContext } from "@/context/chat-context";
import DataSourceCard from "./data-source-card";
import { dataSources } from "@/constant/chatConstants";

const DataSourceList = () => {
  const { selectedDataSource, setSelectedDataSource } = useChatContext();

  return (
    <div className="grid grid-cols-1 gap-3">
      <h2 className="text-lg font-semibold">Data Sources</h2>

      <RadioGroup
        value={selectedDataSource?.value || ""}
        onValueChange={(value) => {
          const selected = dataSources.find((ds) => ds.value === value);
          if (selected) setSelectedDataSource(selected);
        }}
        className="grid grid-cols-1 gap-3"
      >
        {dataSources.map((item) => (
          <DataSourceCard key={item.value} item={item}  isSelected={selectedDataSource?.value === item.value}/>
        ))}
      </RadioGroup>
    </div>
  );
};

export default DataSourceList;
