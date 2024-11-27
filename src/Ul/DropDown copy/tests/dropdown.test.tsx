import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from '../components/DropDown';

describe('Dropdown Component', () => {
    it('should render correctly with default text', () => {
        const options = ['Option 1', 'Option 2', 'Option 3'];

        render(<Dropdown options={options} />);

        const dropdownButton = screen.getByRole('button');

        expect(dropdownButton).toBeInTheDocument();
        expect(dropdownButton).toHaveTextContent('Select an option');

        const dropdownMenu = screen.queryByRole('menu');

        expect(dropdownMenu).not.toBeInTheDocument();
    });

    it('should open the dropdown menu when clicked', () => {
        const options = ['Option 1', 'Option 2', 'Option 3'];

        render(<Dropdown options={options} />);

        const dropdownButton = screen.getByRole('button');

        fireEvent.click(dropdownButton);

        const dropdownMenu = screen.getByRole('menu');

        expect(dropdownMenu).toBeInTheDocument();
    });

    it('should select an option when an option is clicked', () => {
        const options = ['Option 1', 'Option 2', 'Option 3'];

        render(<Dropdown options={options} />);

        const dropdownButton = screen.getByRole('button');

        fireEvent.click(dropdownButton);
        const option1Button = screen.getByText('Option 1');
        fireEvent.click(option1Button);

        expect(dropdownButton).toHaveTextContent('Option 1');

        const dropdownMenu = screen.queryByRole('menu');
        expect(dropdownMenu).not.toBeInTheDocument();
    });
});
