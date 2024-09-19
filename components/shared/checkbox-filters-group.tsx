"use client";

import React from "react";
// import { useSet } from 'react-use';

import { FilterCheckbox, FilterChecboxProps } from "./filter-checkbox";
import { Input } from "../ui/input";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  // const [selected, { add, toggle }] = useSet<string>(new Set([]));

  // const onCheckedChange = (value: string) => {
  //   toggle(value);
  // };

  // React.useEffect(() => {
  //   if (defaultValue) {
  //     defaultValue.forEach(add);
  //   }
  // }, [defaultValue?.length]);

  // React.useEffect(() => {
  //   onChange?.(Array.from(selected));
  // }, [selected]);

  const handleSearchChange = e => {
    setSearchValue(e.target.value)
  }

  const list = showAll
      ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
      : defaultItems

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            value={searchValue}
            onChange={handleSearchChange}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item) => (
          <FilterCheckbox
            key={String(item.value)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
            // onCheckedChange={() => onCheckedChange(item.value)}
            onCheckedChange={(value) => console.log(value)}
            // checked={selected.has(item.value)}
            checked={!!item.value}
          />
        ))}
      </div>

      {defaultItems.length < limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
