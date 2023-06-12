import { IButtonProps } from "@/utils/types";

export default function Button({
  onClick,
  children,
  iconArrow,
  iconSearch,
  pill,
  size = "sm",
  variant = "solid",
}: IButtonProps) {
  const styles = {
    sizes: {
      sm: `px-5 py-2 text-sm ${iconSearch ? "pl-3" : ""}`,
      md: `px-6 py-3 text-sm ${iconSearch ? "pl-4" : ""}`,
      lg: `px-8 py-4 text-base ${iconSearch ? "pl-5" : ""}`,
    },
    variants: {
      solid: "bg-blue-700 text-zinc-100 hover:bg-blue-700/95",
      outline:
        "bg-transparent text-blue-700 border border-blue-700 hover:bg-blue-700/10",
      light: "bg-zinc-100 text-blue-700 hover:bg-zinc-200",
    },
    radius: pill ? "rounded-full" : "rounded",
  };

  return (
    <button
      className={`${styles.sizes[size]} ${styles.variants[variant]} ${styles.radius} flex items-center gap-2 transition-all duration-300`}
      onClick={onClick}
    >
      {iconSearch && (
        <span className="h-5 w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-full w-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
      )}
      <span>{children}</span>
      {iconArrow && (
        <span className="h-5 w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-full w-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </span>
      )}
    </button>
  );
}
