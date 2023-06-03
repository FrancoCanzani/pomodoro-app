import React from 'react';

interface TimerButtonProps {
  action: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  color: string;
  label: string;
  border: string;
}

export default function TimerButton({
  action,
  text,
  label,
  color,
  border,
}: TimerButtonProps) {
  return (
    <button
      onClick={action}
      className={`mb-10 ${color} ${border} px-3 py-2 text-xl font-bold uppercase active:translate-y-0.5`}
      aria-label={label}
    >
      {text}
    </button>
  );
}
