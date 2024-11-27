
import { render, fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination'; 

describe('Pagination Component', () => {

  let onPageChangeCalled = false;
  let onPageChangeSelected = 0;

  const handlePageChange = (selectedPage: number) => {
    onPageChangeCalled = true;
    onPageChangeSelected = selectedPage;
  };

  const pageCount = 5;

  beforeEach(() => {
    onPageChangeCalled = false; 
  });

  it('calls onPageChange with the correct page number when a page is clicked', () => {
    const { getByText } = render(
      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    );

    const pageToClick = 2;
    const pageButton = getByText(pageToClick.toString());

    fireEvent.click(pageButton);

    // Assert that onPageChange was called
    expect(onPageChangeCalled).toBe(true);
  

    expect(onPageChangeSelected).toBe(pageToClick);
  });

  it('does not call onPageChange when the component is initially rendered', () => {
    render(<Pagination pageCount={pageCount} onPageChange={handlePageChange} />);

    // Assert that onPageChange was not called during component render
    expect(onPageChangeCalled).toBe(false);
  });


});
