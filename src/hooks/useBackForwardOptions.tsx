import {BackForwardValue, BaseFields, OptionsType} from '../types';
import {useState} from 'react';

export const useBackForwardOptions = <T extends BaseFields>({
  options,
  defaultIndex,
}: OptionsType<T>): BackForwardValue<T> => {
  const [currentIndex, setCurrentIndex] = useState<number>(
    defaultIndex !== undefined ? defaultIndex : options.length - 1,
  );

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
