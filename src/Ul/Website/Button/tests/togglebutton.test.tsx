import { render, screen, fireEvent } from '@testing-library/react';
import ToggleButton from '../components/ToggleButton';


describe('ToggleButton Component', () => {
    it('should render correctly', () => {
        const isChecked = false;
        const onToggle = () => { };
        const onText = 'On';
        const offText = 'Off';
        const disabled = false;

        render(
            <ToggleButton
                isChecked={isChecked}
                onToggle={onToggle}
                onText={onText}
                offText={offText}
                disabled={disabled}
            />
        );


        const toggleInput = screen.getByRole('checkbox');

        expect(toggleInput).toBeInTheDocument();
        expect(toggleInput).not.toBeChecked();

        const offLabel = screen.getByText(offText);

        expect(offLabel).toBeInTheDocument();
    });

    it('should toggle the state when clicked', () => {
        let isChecked = false;
        const onToggle = () => {
            isChecked = !isChecked;
        };
        const onText = 'On';
        const offText = 'Off';
        const disabled = false;

        render(
            <ToggleButton
                isChecked={isChecked}
                onToggle={onToggle}
                onText={onText}
                offText={offText}
                disabled={disabled}
            />
        );

        const toggleInput = screen.getByRole('checkbox');

        fireEvent.click(toggleInput);

        expect(isChecked).toBe(true);

    });

    it('should not toggle the state when clicked if disabled', () => {
        let isChecked = false;
        const onToggle = () => {
            isChecked = !isChecked;
        };
        const onText = 'On';
        const offText = 'Off';
        const disabled = true;

        render(
            <ToggleButton
                isChecked={isChecked}
                onToggle={onToggle}
                onText={onText}
                offText={offText}
                disabled={disabled}
            />
        );

        const toggleInput = screen.getByRole('checkbox');

        fireEvent.click(toggleInput);

        expect(isChecked).toBe(false);
    });
});
