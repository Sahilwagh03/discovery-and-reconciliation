import { LoginForm } from "@/components/login-form";
import Logo from "@/components/logo";
import { AnimatedBeamMultiple } from "@/components/login-page-animated-flow";

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

      {/* Right Panel with Gradient Left Border */}
      <div className="relative hidden lg:flex flex-col justify-center">
        {/* Gradient Left Border */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-[linear-gradient(180deg,#ffaa40,#9c40ff)] rounded-r-lg" />

        {/* Animated Background Blobs */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 blur-3xl">
          <div className="size-64 rounded-full bg-purple-500/40 dark:bg-purple-400/60" />
        </div>
        {/* Text Content */}
        <div className="text-center relative z-10 px-6">
          <h2 className="text-5xl font-bold tracking-tight">
            AI Powered – Network 360 AI
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Intelligent Discovery & Reconciliation Engine
          </p>
        </div>

        <AnimatedBeamMultiple />
      </div>
    </div>
  );
}
