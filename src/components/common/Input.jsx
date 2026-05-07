"use client";

import clsx from "clsx";

const Input = ({
  label,
  className = "",
  error,
  options = [],
  valueKey,
  labelKey,
  labelRender,
  ...rest
}) => {
  return (
    <div className="flex w-full flex-col gap-1">

      {/* Label */}
      {label && (
        <label className="font-inter font-semibold mb-1 text-[12px] text-[var(--color-gray-500)] uppercase tracking-wider">
          {label}
        </label>
      )}

      {/* Textarea */}
      {rest?.type === "textarea" ? (
        <div
          className={clsx(
            "flex w-full rounded md:rounded-md px-3 py-2 border border-gray-300 bg-[var(--color-white)] min-h-36 max-h-56",
            error && "border-red-400 ring-2 ring-red-300",
            className
          )}
        >
          <textarea
            className="w-full outline-none text-sm text-[var(--foreground)] bg-transparent resize-none"
            {...rest}
          />
        </div>
      ) : rest?.type === "select" ? (

        /* Select */
        <div
          className={clsx(
            "flex w-full items-center rounded md:rounded-md px-3 py-1 border border-gray-300 bg-[var(--color-white)]",
            error && "border-red-400 ring-2 ring-red-300",
            className
          )}
        >
          <select
            defaultValue=""
            {...rest}
            className="py-3 md:py-2.5 w-full text-sm outline-none bg-[var(--color-white)] text-[var(--foreground)]"
          >
            {rest?.placeholder && (
              <option value="" disabled>
                {rest.placeholder}
              </option>
            )}

            {options.map((opt, idx) => (
              <option
                key={idx}
                value={opt[valueKey] || opt.value || opt}
              >
                {labelRender
                  ? labelRender(opt)
                  : opt[labelKey] || opt.label || opt}
              </option>
            ))}
          </select>
        </div>
      ) : (

        /* Input */
        <div
          className={clsx(
            "flex w-full items-center rounded md:rounded-md px-3 py-1 border border-gray-300 bg-[var(--color-white)]",
            error && "border-red-400 ring-2 ring-red-300",
            className
          )}
        >
          <input
            {...rest}
            className="py-3 md:py-2.5 w-full text-sm outline-none bg-transparent text-[var(--foreground)]"
          />
        </div>
      )}

      {/* Error */}
      {error && (
        <span className="text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;