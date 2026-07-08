type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;

  placeholder?: string;
  rows?: number;
  disabled?: boolean;
};

function TextArea({
  label,
  value,
  onChange,
  placeholder = "",
  rows = 5,
  disabled = false,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="block font-medium">
        {label}
      </label>

      <textarea
        rows={rows}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          rounded-lg
          border
          border-gray-300
          p-3
          outline-none
          resize-none
          focus:border-blue-500
          disabled:bg-gray-100
          disabled:cursor-not-allowed
        "
      />
    </div>
  );
}

export default TextArea;