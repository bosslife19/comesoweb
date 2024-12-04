import { render, screen, fireEvent } from '@testing-library/react';
import SplitInput from '../components/SplitInput';

describe('SplitInput Component', () => {
  it('should render correctly with default values', () => {
    const onChange = () => { };

    render(<SplitInput length={6} value="" onChange={onChange} />);

    const inputElements = Array.from({ length: 6 }, (_, index) =>
      screen.getByTestId(`input-${index}`)
    );

    expect(inputElements).toHaveLength(6);


    inputElements.forEach((inputElement) => {
      expect(inputElement).toHaveValue('');
    });
  });

  it('should allow entering numbers and navigate between inputs', () => {
    let inputValue = '';
    const length = 6;

    render(
      <SplitInput
        length={length}
        value={inputValue}
        onChange={(newValue) => {
          inputValue = newValue;
        }}
      />
    );

    for (let i = 0; i < length; i++) {
      const inputElement = screen.getByTestId(`input-${i}`);
      fireEvent.change(inputElement, { target: { value: '1' } });
      fireEvent.keyDown(inputElement, { key: 'ArrowRight' });
    }
  })
});
