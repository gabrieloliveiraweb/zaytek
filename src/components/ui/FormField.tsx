import { forwardRef } from "react";
import type { InputHTMLAttributes, SelectHTMLAttributes } from "react";

// ── Base input class ───────────────────────────────────────────────────────────
const INPUT_BASE =
  "w-full px-4 py-3.5 bg-bg-primary border rounded-xl text-[15px] outline-none transition-all " +
  "disabled:opacity-60 disabled:cursor-not-allowed " +
  "focus:ring-1";

const INPUT_NORMAL = "border-border-light focus:border-accent focus:ring-accent";
const INPUT_ERROR  = "border-red-400 focus:border-red-500 focus:ring-red-400";

// ── FormField wrapper ──────────────────────────────────────────────────────────
interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}

export function FormField({ label, htmlFor, error, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-[14px] font-bold text-[#112A32]">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="text-[13px] text-red-500 mt-0.5">
          {error}
        </p>
      )}
    </div>
  );
}

// ── TextInput ─────────────────────────────────────────────────────────────────
// Uses forwardRef so react-hook-form's register() can attach its ref directly.
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ id, error, className = "", ...props }, ref) => (
    <input
      ref={ref}
      id={id}
      className={`${INPUT_BASE} ${error ? INPUT_ERROR : INPUT_NORMAL} ${className}`}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      {...props}
    />
  )
);
TextInput.displayName = "TextInput";

// ── SelectInput ───────────────────────────────────────────────────────────────
// Uses forwardRef for the same reason as TextInput.
interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  error?: string;
  placeholder?: string;
  options: readonly string[];
}

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  (
    {
      id,
      error,
      placeholder = "Selecione uma opção",
      options,
      className = "",
      ...props
    },
    ref
  ) => (
    <select
      ref={ref}
      id={id}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`${INPUT_BASE} ${error ? INPUT_ERROR : INPUT_NORMAL} appearance-none cursor-pointer ${className}`}
      {...props}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  )
);
SelectInput.displayName = "SelectInput";
