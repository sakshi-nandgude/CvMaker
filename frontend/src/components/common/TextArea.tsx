type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

function TextArea({
  label,
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="block font-medium">
        {label}
      </label>

      <textarea
        rows={5}
        className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default TextArea;