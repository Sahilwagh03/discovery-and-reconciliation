"use client";
import { LLMResponseObject } from "@/interfaces/chat.interface";

interface OnDemandProps {
  llm: LLMResponseObject[] | undefined;
}

const OnDemand = ({ llm }: OnDemandProps) => {
  if (llm?.length === 0) return null;

  return (
    <>
      {llm?.map((deviceObj, deviceIndex) =>
        Object.keys(deviceObj).map((key) => (
          <div key={`${deviceIndex}-${key}`} className="mb-4">
            <h3 className="font-bold text-2xl mb-1">{key}</h3>
            <div className="bg-accent rounded-md p-2.5 font-mono whitespace-pre-wrap">
              {deviceObj[key].map((line, lineIndex) => (
                <div className="text-[0.7rem] my-[0.4rem]" key={lineIndex}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default OnDemand;
