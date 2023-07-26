import {BackForwardValue, BaseFields, OptionsType} from '../types';
import {useEffect, useState} from 'react';

export const useBackForwardOptions = <T extends BaseFields>({
  options: initialOptions,
  defaultIndex,
}: OptionsType<T>): BackForwardValue<T> => {
  const [options, setOptions] = useState<T[]>(initialOptions);

  const isValidIndex =
    defaultIndex !== undefined && defaultIndex >= 0 && defaultIndex < options.length;

  const [currentIndex, setCurrentIndex] = useState<number>(
    isValidIndex ? defaultIndex : options.length - 1,
  );

  useEffect(() => {
    setOptions(initialOptions);

    setCurrentIndex(defaultIndex !== undefined ? defaultIndex : initialOptions.length - 1);
  }, [initialOptions, defaultIndex]);

  const onForwardClickHandler = () => {
    if (currentIndex < options.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const onBackClickHandler = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentOption = options[currentIndex] || null;
  const isFirstOption = currentIndex === 0;
  const isLastOption = currentIndex === options.length - 1;

  return {
    onForwardClickHandler,
    onBackClickHandler,
    options,
    currentOption,
    isFirstOption,
    isLastOption,
  };
};
