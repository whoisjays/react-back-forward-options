import {BackForwardType} from '../types';

export const useBackForwardOptions = ({id}: BackForwardType) => {
  const onForwardClickHandler = () => {
    id;
  };
  const onBackClickHandler = () => {
    id;
  };
  return {onForwardClickHandler, onBackClickHandler};
};
