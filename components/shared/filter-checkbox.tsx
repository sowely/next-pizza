import {Checkbox} from "@/components/ui";

export interface FilterChecboxProps {
  className?: string;
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({
  className,
  text,
  value,
  checked,
  onCheckedChange,
  endAdornment,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(value)}`}
      />
      <label htmlFor={`checkbox-${String(value)}`} className='leading-none cursor-pointer flex-1' >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
