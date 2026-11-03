"use client";

import { Select } from "@base-ui/react/select";

type Option = { value: string; label: string };

export function BrandSelect({
  id,
  label,
  name,
  items,
  value,
  onValueChange,
  tone = "light",
  popupClassName = "",
}: {
  id: string;
  label: string;
  name?: string;
  items: readonly Option[];
  value: string;
  onValueChange: (value: string) => void;
  tone?: "light" | "dark";
  popupClassName?: string;
}) {
  const selected = items.find((item) => item.value === value);
  return (
    <>
      <label id={`${id}-label`} htmlFor={id}>
        {label}
      </label>
      <Select.Root
        name={name}
        items={items}
        value={value}
        onValueChange={(next) => {
          if (typeof next === "string") onValueChange(next);
        }}
        modal={false}
      >
        <Select.Trigger
          id={id}
          aria-labelledby={`${id}-label ${id}-value`}
          className={`brand-select-trigger is-${tone}`}
        >
          <Select.Value id={`${id}-value`}>{selected?.label}</Select.Value>
          <Select.Icon className="brand-select-icon">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="m6 9 6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner
            side="bottom"
            align="start"
            sideOffset={8}
            alignItemWithTrigger={false}
            className="brand-select-positioner"
          >
            <Select.Popup
              className={`brand-select-popup is-${tone} ${popupClassName}`}
            >
              <Select.List className="brand-select-list">
                {items.map((item) => (
                  <Select.Item
                    key={item.value}
                    value={item.value}
                    className="brand-select-item"
                  >
                    <Select.ItemText>{item.label}</Select.ItemText>
                    <Select.ItemIndicator>
                      <svg viewBox="0 0 20 20" aria-hidden="true">
                        <path
                          d="m4 10 4 4 8-8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.List>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>
    </>
  );
}
