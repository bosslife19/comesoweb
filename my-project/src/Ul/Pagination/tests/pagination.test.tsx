import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Pagination from '../components/Pagination';

describe('Pagination Component', () => {
  it('renders pagination correctly', () => {
    const count = 30;
    render(
      <BrowserRouter>
        <Pagination count={count} />
      </BrowserRouter>,
    );
    const countElement = screen.getByTestId('count');

    // jest assertion that element exists
    expect(countElement).toBeInTheDocument();
  });

  it('should render pagination if count props is above 10', () => {
    render(
      <BrowserRouter>
        <Pagination count={11} />
      </BrowserRouter>,
    );
    const countElement = screen.getByTestId('count');

    // jest assertion
    expect(countElement).toBeInTheDocument();
  });
});
