import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from '../components/RadioButton';

describe('RadioButton Component', () => {
    it('should render correctly', () => {
        const label = 'Option 1';
        const value = 'option1';
        const checked = false;
        const disabled = false;

        render(
            <RadioButton
                label={label}
                value={value}
                checked={checked}
                onChange={() => { }}
                disabled={disabled}
            />
        );

        const radioInput = screen.getByRole('radio');

        expect(radioInput).toBeInTheDocument();
        expect(radioInput).not.toBeChecked();

        const labelElement = screen.getByText(label);

        expect(labelElement).toBeInTheDocument();
    });

    it('should check the radio button when clicked', () => {
        const label = 'Option 1';
        const value = 'option1';
        let checked = false;
        const disabled = false;

        render(
            <RadioButton
                label={label}
                value={value}
                checked={checked}
                onChange={() => {
                    checked = !checked;
                }}
                disabled={disabled}
            />
        );

        const radioInput = screen.getByRole('radio');

        fireEvent.click(radioInput, { target: { checked: true } });

        expect(radioInput).toBeChecked();
    });

    it('should not check the radio button when clicked if disabled', () => {
        const label = 'Option 1';
        const value = 'option1';
        let checked = false;
        const disabled = true;

        render(
            <RadioButton
                label={label}
                value={value}
                checked={checked}
                onChange={() => {
                    checked = !checked;
                }}
                disabled={disabled}
            />
        );

        const radioInput = screen.getByRole('radio');

        fireEvent.click(radioInput);

        expect(radioInput).not.toBeChecked();
    });
});
