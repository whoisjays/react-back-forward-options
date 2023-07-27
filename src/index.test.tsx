import {act, renderHook} from '@testing-library/react-hooks';
import {useBackForwardOptions} from './index';

describe('useBackForwardOptions', () => {
  const options = [
    {id: '1', value: 'Option 1'},
    {id: '2', value: 'Option 2'},
    {id: '3', value: 'Option 3'},
  ];

  it('should switch to the next option when onForwardClickHandler is called', () => {
    const {result} = renderHook(() => useBackForwardOptions({options}));

    expect(result.current.currentOption).toEqual(options[options.length - 1]);

    act(() => {
      result.current.onForwardClickHandler();
    });

    expect(result.current.currentOption).toEqual(options[2]);
  });

  it('should switch to the previous option when onBackClickHandler is called', () => {
    const {result} = renderHook(() => useBackForwardOptions({options}));

    act(() => {
      result.current.onForwardClickHandler();
    });

    expect(result.current.currentOption).toEqual(options[2]);

    act(() => {
      result.current.onBackClickHandler();
    });

    expect(result.current.currentOption).toEqual(options[1]);
  });

  it('should stay on the last option when onForwardClickHandler is called on the last option', () => {
    const {result} = renderHook(() => useBackForwardOptions({options}));

    expect(result.current.currentOption).toEqual(options[2]);

    act(() => {
      result.current.onForwardClickHandler();
    });

    expect(result.current.currentOption).toEqual(options[2]);

    expect(result.current.isLastOption).toBe(true);
  });

  it('should stay on the first option when onBackClickHandler is called on the first option', () => {
    const {result} = renderHook(() => useBackForwardOptions({options}));

    expect(result.current.currentOption).toEqual(options[options.length - 1]);

    act(() => {
      result.current.onBackClickHandler();
    });

    expect(result.current.currentOption).toEqual(options[1]);

    act(() => {
      result.current.onBackClickHandler();
    });

    expect(result.current.isFirstOption).toBe(true);

    expect(result.current.currentOption).toEqual(options[0]);

    act(() => {
      result.current.onBackClickHandler();
    });

    expect(result.current.currentOption).toEqual(options[0]);
  });

  it('should initialize with the default index when provided', () => {
    const defaultIndex = 1;
    const { result } = renderHook(() =>
      useBackForwardOptions({ options, defaultIndex })
    );

    expect(result.current.currentOption).toBe(options[defaultIndex]);
  });

  it('should initialize with the last index as default when defaultIndex is not provided', () => {
    const { result } = renderHook(() => useBackForwardOptions({ options }));

    expect(result.current.currentOption).toBe(options[options.length - 1]);
  });

  it('should navigate forward and backward correctly', () => {
    const { result } = renderHook(() => useBackForwardOptions({ options }));

    // Initial index is options.length - 1
    expect(result.current.isLastOption).toBe(true);

    act(() => {
      result.current.onBackClickHandler();
    });

    expect(result.current.currentOption).toBe(options[1]);

    expect(result.current.isFirstOption).toBe(false);

    act(() => {
      result.current.onForwardClickHandler();
    });

    expect(result.current.currentOption).toBe(options[2]);

    expect(result.current.isLastOption).toBe(true);
  });
});
