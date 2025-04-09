interface SwitchProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Switch = ({ id, label, checked, onChange }: SwitchProps) => {
  const toggle = () => onChange(!checked);

  return (
    <div className="flex items-center gap-2">
      <span id={`${id}-label`}>{label}</span>
      <button
        role="switch"
        aria-checked={checked}
        aria-labelledby={`${id}-label`}
        id={id}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            toggle();
          }
        }}
        tabIndex={0}
        className={`w-10 h-6 rounded-full relative transition-colors ${
          checked ? 'bg-green-500' : 'bg-gray-300'
        } focus:outline focus:outline-2 focus:outline-blue-500`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
            checked ? 'translate-x-4' : ''
          }`}
        ></span>
      </button>
    </div>
  );
};
