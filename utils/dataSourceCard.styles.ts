export const getCardStyles = (isSelected: boolean) => ({
  iconWrapper: isSelected
    ? "bg-gradient-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 shadow-md shadow-green-500/20"
    : "bg-gray-100 dark:bg-gray-800",

  icon: isSelected
    ? "text-white"
    : "text-gray-600 dark:text-gray-400",

  text: isSelected
    ? "text-gray-900 dark:text-gray-100"
    : "text-gray-700 dark:text-gray-300",

  subtext: isSelected
    ? "text-gray-600 dark:text-gray-400"
    : "text-gray-500 dark:text-gray-500",

  card: isSelected
    ? "border-green-500 dark:border-green-600 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10 shadow-md shadow-green-500/5"
    : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-sm",

  radio: isSelected
    ? "border-green-500 dark:border-green-600 [&_[data-state=checked]>svg]:fill-green-500 dark:[&_[data-state=checked]>svg]:fill-green-600"
    : "border-gray-300 dark:border-gray-700 group-hover:border-gray-400 dark:group-hover:border-gray-600",
});

export const getStatusDotStyles = (connected: boolean) =>
  connected
    ? "bg-green-500 shadow-md shadow-green-500/50"
    : "bg-gray-400 dark:bg-gray-600";

// Base styles that don't change
export const baseStyles = {
  label: "cursor-pointer group",
  card: "p-3 flex flex-row items-center justify-between gap-4 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]",
  contentWrapper: "flex items-start gap-3 flex-1",
  iconWrapper: "p-2.5 rounded-lg shrink-0 transition-all duration-300",
  icon: "w-5 h-5",
  textContainer: "flex flex-col gap-1 flex-1 min-w-0",
  nameWrapper: "flex items-center gap-2",
  name: "text-sm font-semibold tracking-tight",
  statusWrapper: "flex items-center gap-2",
  statusDot: "w-1.5 h-1.5 rounded-full",
  statusText: "text-xs font-medium",
  lastSync: "text-xs",
  radio: "border-2 w-5 h-5 transition-all duration-200",
} as const;