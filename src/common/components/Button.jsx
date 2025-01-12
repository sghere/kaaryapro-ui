import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(
  "px-4 py-2 font-semibold transition text-white bg-blue-500 rounded",
  {
    variants: {
      intent: {
        failureAlt:
          "bg-transperant text-red-500 border border-gray-300 hover:bg-red-500 hover:border-red-500 hover:text-white",
      },
      size: {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "small",
    },
  }
);

const Button = ({ intent, size, children, className, ...props }) => {
  return (
    <button
      className={twMerge(buttonStyles({ intent, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
