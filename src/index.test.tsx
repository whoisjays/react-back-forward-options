import {renderHook} from '@testing-library/react-hooks';
import {useBackForwardOptions} from './index';

describe('useBackForwardOptions', () => {
  it('should return onForwardClickHandler and onBackClickHandler', () => {
    const {result} = renderHook(() => useBackForwardOptions({id: 'someID'}));
    const {onForwardClickHandler, onBackClickHandler} = result.current;

    expect(onForwardClickHandler).toBeDefined();

    expect(onBackClickHandler).toBeDefined();
  });
});
