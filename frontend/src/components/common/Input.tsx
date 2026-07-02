type InputProps = {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

function Input({
  label,
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <div className="space-y-2">
      <label className="block font-medium">
        {label}
      </label>

      <input
        className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Input;