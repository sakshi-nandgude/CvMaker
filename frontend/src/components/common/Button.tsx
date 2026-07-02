type Props = {
  text: string;
  onClick?: () => void;
};

function Button({ text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
    >
      {text}
    </button>
  );
}

export default Button;