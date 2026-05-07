import Link from "next/link";
import { twMerge } from "tailwind-merge";

const variantClasses = {
  default: "bg-gray-100 text-gray-500",
  outline: "bg-white text-blue-600 hover:text-blue-700 border border-gray-300 font-inter",
  primary: "text-white bg-blue-600 hover:bg-blue-700",
  success: "!w-9 !h-9 !p-0 rounded-lg bg-green-100 hover:bg-green-200 text-green-500 text-lg",
  danger: "!w-9 !h-9 !p-0 rounded-lg bg-red-100 hover:bg-red-200 border-none text-red-500 text-lg",
  secondary: "!w-9 !h-9 !p-0 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-500 text-lg",
  white: "bg-white",
  black:"bg-gray-700 hover:bg-gray-300 text-white",
  gradient: " bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white font-bold font-montserrat "
};

function Button({
  children,
  variant = "default",
  bgColor,
  textColor,
  icon: Icon,
  href,
  height = "h-11",
  width = "px-4",
  rounded = "rounded-[4px]",
  className,
  loading,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-medium transition duration-200 focus:outline-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

  const variantClass = variantClasses[variant] || variantClasses.default;

  const classes = twMerge(
    baseClasses,
    variantClass,
    height,
    width,
    rounded,
    bgColor,
    textColor,
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {Icon && <i className={`ri-${Icon} text-[1rem] cursor-pointer`} />}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {Icon && <i className={`ri-${Icon} cursor-pointer`} />}
      {children}
    </button>
  );
}

export default Button;
