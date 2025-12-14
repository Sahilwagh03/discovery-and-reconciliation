import { LoginForm } from "@/components/login-form";
import Logo from "@/components/logo";
import { AnimatedBeamMultiple } from "@/components/login-page-animated-flow";
import { Highlighter } from "@/components/ui/highlighter";
import { FadeSequence } from "@/components/fade-sequence";
import NetworkBlockAnimation from "@/components/network-block-animation";
import { FeatureBlock } from "@/components/feature-block";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
              <Logo width={23} height={23} />
            </div>
            Network 360 AI
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>

      <div className="bg-muted/60 dark:bg-muted/40 w-full h-full relative hidden lg:flex flex-col justify-center backdrop-blur-3xl">
        <div className="absolute left-0 top-0 h-full w-0.5 bg-[linear-gradient(180deg,#ffaa40,#9c40ff)] rounded-r-lg" />
        <FadeSequence
          interval={3500}
          items={[
            <NetworkBlockAnimation key="network" />,
            <FeatureBlock key="feature"/>
          ]}
        />
      </div>
    </div>
  );
}
