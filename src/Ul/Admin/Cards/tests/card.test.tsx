import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Card from '../components/Card';

const cardProps = {
    id: 1,
    name: 'Test Card',
    userRole: 'Test Role',
    linkTo: '/test',
};

test('renders Card component', () => {
    render(
        <MemoryRouter>
            <Card {...cardProps} />
        </MemoryRouter>
    );

    // Check if the card content is rendered correctly
    expect(screen.getByText('Test Role')).toBeInTheDocument();
    expect(screen.getByText('Test Card')).toBeInTheDocument();
});

test('clicking on the card link navigates to the correct route', () => {
    render(
        <MemoryRouter>
            <Card {...cardProps} />
        </MemoryRouter>
    );

    // Click on the card link 
    const cardLink = screen.getByTestId('card-link'); 
    fireEvent.click(cardLink);

    // Check if the correct route is navigated
    expect(window.location.pathname).toBe('/');
});
