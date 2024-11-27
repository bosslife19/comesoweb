import { render, fireEvent, screen } from '@testing-library/react';
import Search from '../components/Search';

it('renders the search input', () => {
  render(
    <Search
      placeholder="Search"
      id="search"
      name="search"
      onChange={() => alert('testing')}
    />,
  );
  const inputElement = screen.getByPlaceholderText('Search');
  expect(inputElement).toBeInTheDocument();
});

it('handles input change', () => {
  render(
    <Search
      placeholder="search"
      id="search"
      name="search"
      onChange={() => alert('testing')}
      value="test query"
    />,
  );
  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'test query' } });
  expect(inputElement).toHaveValue('test query');
});
