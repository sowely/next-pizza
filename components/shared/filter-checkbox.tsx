import {Checkbox} from "@/components/ui";

export interface FilterCheckboxProps {
  className?: string;
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  checked?: boolean;
  name?: string;
  onCheckedChange?: (checked: boolean) => void;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  className,
  text,
  value,
  checked,
  onCheckedChange,
  endAdornment,
  name
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(name)}-${String(value)}`}
      />
      <label htmlFor={`checkbox-${String(name)}-${String(value)}`} className='leading-none cursor-pointer flex-1' >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
