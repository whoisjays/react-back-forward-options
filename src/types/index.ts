
export type BaseFields = {
  id: string;
};

export type OptionsType<T extends BaseFields> = {
  options: T[];
};

export type BackForwardValue<T extends BaseFields> = {
  onForwardClickHandler: () => void;
  onBackClickHandler: () => void;
  options: T[];
  currentOption: T | null;
};