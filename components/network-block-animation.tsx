import { Highlighter } from "./ui/highlighter";
import { AnimatedBeamMultiple } from "./login-page-animated-flow";

const NetworkBlockAnimation = () => {
  return (
    <>
      <div className="text-center relative z-10 px-6">
        <h2 className="text-4xl font-bold tracking-tight">
          <Highlighter iterations={2} isView action="underline" color="#9c40ff">
            AI Powered
          </Highlighter>{" "}
          – Network 360 AI
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          Intelligent Discovery & Reconciliation Engine
        </p>
      </div>
      <AnimatedBeamMultiple />
    </>
  );
};

export default NetworkBlockAnimation;
