import {BackForwardValue, BaseFields, OptionsType} from '../types';
import {useState} from 'react';

export const useBackForwardOptions = <T extends BaseFields>({
  options,
}: OptionsType<T>): BackForwardValue<T> => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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

  return {onForwardClickHandler, onBackClickHandler, options, currentOption};
};
