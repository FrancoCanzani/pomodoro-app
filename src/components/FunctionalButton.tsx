interface FunctionalButtonProps {
  action: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  color: string;
}

export default function FunctionalButton({
  action,
  text,
  color,
}: FunctionalButtonProps) {
  return (
    <button
      onClick={action}
      className={`m-6 rounded-md ${color} px-6 py-4 text-xl font-bold uppercase animate-once active:translate-y-0.5`}
    >
      {text}
    </button>
  );
}
