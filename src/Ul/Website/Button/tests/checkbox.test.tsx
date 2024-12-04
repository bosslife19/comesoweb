import { render, screen, fireEvent } from '@testing-library/react';
import CheckBox from '../components/CheckBox';

describe('CheckBox Component', () => {
    it('should render correctly', () => {
        const label = 'Test Label';
        let checked = false;
        const toggleCheckBox = () => {
            checked = !checked;
        };
        const disabled = false;

        render(
            <CheckBox
                label={label}
                checked={checked}
                onChange={toggleCheckBox}
                disabled={disabled}
            />
        );

        const checkboxInput = screen.getByRole('checkbox');

        expect(checkboxInput).toBeInTheDocument();
        expect(checkboxInput).not.toBeChecked();

        const labelElement = screen.getByText(label);

        expect(labelElement).toBeInTheDocument();
    });

    it('should toggle the checkbox state when clicked', () => {
        const label = 'Test Label';
        let checked = false;
        const toggleCheckBox = () => {
            checked = !checked;
        };
        const disabled = false;

        render(
            <CheckBox
                label={label}
                checked={checked}
                onChange={toggleCheckBox}
                disabled={disabled}
            />
        );

        const checkboxInput = screen.getByRole('checkbox');

        fireEvent.change(checkboxInput, { target: { checked: true } });

        expect(checkboxInput).toBeChecked();

        fireEvent.change(checkboxInput, { target: { checked: false } });

        expect(checkboxInput).not.toBeChecked();
    });


    it('should not toggle the checkbox state when clicked if disabled', () => {
        const label = 'Test Label';
        let checked = false;
        const toggleCheckBox = () => {
            checked = !checked;

        };
        const disabled = true;

        render(
            <CheckBox
                label={label}
                checked={checked}
                onChange={toggleCheckBox}
                disabled={disabled}
            />
        );

        const checkboxInput = screen.getByRole('checkbox');

        fireEvent.click(checkboxInput);

        expect(checkboxInput).not.toBeChecked();
    });
});
