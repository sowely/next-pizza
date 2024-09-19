import {Checkbox} from "@/components/ui";

interface Props {
  className?: string;
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const FilterCheckbox: React.FC<Props> = ({
  className,
  text,
  value,
  checked,
  onCheckedChange,
  endAdornment,
}) => {
  return <div className='flex items-center space-x-2'>
    <Checkbox
      checked={checked}
      onChange={onCheckedChange}
    />

  </div>;
};
