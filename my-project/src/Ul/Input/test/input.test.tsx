import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../components/Input'
import { useForm, Controller } from 'react-hook-form'; // Import useForm here

function InputComponent() {
    const { control } = useForm();

    return (
        <Controller
            name="test"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <Input
                    disabled
                    label="Test Label"
                    type="text"
                    control={control}
                    defaultValue=""
                    placeholder='Enter a value'
                    {...field}
                />
            )}
        />
    );
}

test('renders the input field with a label', () => {
    render(<InputComponent />);
    const labelElement = screen.getByText('Test Label');
    const inputElement = screen.getByRole('textbox');

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
});

test('renders the input field with a placeholder', () => {
    render(<InputComponent />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveAttribute('placeholder', 'Enter a value');
});

test('allows entering text into the input field', () => {
    render(<InputComponent />);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Hello, World!' } });

    expect(inputElement).toHaveValue('Hello, World!');
});

// test('toggles password visibility when the eye icon is clicked', () => {
//     render(<InputComponent  />);
//     const inputElement = screen.getByRole('textbox');

//     // Use the data-testid to locate the eye icon
//     expect(inputElement).toHaveAttribute('type', 'password');
//     const eyeIcon = screen.getByTestId('password-toggle-icon');

//     expect(eyeIcon).toBeInTheDocument();

//     fireEvent.click(eyeIcon);

//     expect(inputElement).toHaveAttribute('type', 'text');
//     expect(screen.getByTestId('password-toggle-icon')).toContainElement(
//         screen.getByTestId('hi-eye-off-icon')
//     );

//     fireEvent.click(eyeIcon);

//     expect(inputElement).toHaveAttribute('type', 'password');
//     expect(screen.getByTestId('password-toggle-icon')).toContainElement(
//         screen.getByTestId('hi-eye-icon')
//     );
// });

test('disables the input field when disabled prop is true', () => {
    render(<InputComponent />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toBeDisabled();
});