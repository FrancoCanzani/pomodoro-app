import React from 'react';

interface FunctionalButtonProps {
  action: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon: JSX.Element;
  color: string;
  label: string;
}

export default function FunctionalButton({
  action,
  icon,
  label,
}: FunctionalButtonProps) {
  return (
    <button
      onClick={action}
      className={`mx-2 my-8 rounded-md px-3 py-2 text-xl font-bold uppercase animate-once active:translate-y-0.5`}
      aria-label={label}
    >
      {icon}
    </button>
  );
}
