import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('Button Component', () => {
    it('should render the button with text', () => {
        const buttonText = 'Click Me';
        const { getByText } = render(
            <Button type="primary" size="medium" onClick={() => { }}>
                {buttonText}
            </Button>
        );

        const button = getByText(buttonText);
        expect(button).toBeInTheDocument();
    });

    it('should trigger the onClick function when clicked', () => {
        let onClickCalled = false;
        const onClickMock = () => {
            onClickCalled = true;
        };

        render(
            <Button type="primary" size="medium" onClick={onClickMock}>
                Click Me
            </Button>
        );

        const button = screen.getByText('Click Me');
        fireEvent.click(button);

        expect(onClickCalled).toBe(true);
    });


    it('should have a loading spinner when loading prop is true', () => {
        render(
            <Button type="primary" size="medium" loading={true}>
                Loading
            </Button>
        );

        const spinner = screen.getByTestId('spinner-mini');
        expect(spinner).toBeInTheDocument();
    });

    it('should be disabled when disabled prop is true', () => {
        render(
            <Button type="primary" size="medium" disabled={true} onClick={() => { }}>
                Disabled
            </Button>
        );

        const button = screen.getByTestId('disabled-button'); // Add a data-testid to your button
        expect(button).toBeDisabled();
    });

});
