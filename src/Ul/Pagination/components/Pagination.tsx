import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';

interface PaginationProps {
  count: number;
}

const PAGE_SIZE: number = 10;

const Pagination: React.FC<PaginationProps> = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  //   get current page
  const currentPage: number = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));

  //   get number of pages (Math.ceil will roundup any number up to 5) 10.5 => 11
  const pageCount: number = Math.ceil(count / PAGE_SIZE);

  const nextPage = () => {
    const next: number =
      currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set('page', next.toString());
    setSearchParams(searchParams);
  };

  const previousPage = () => {
    const prev: number = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set('page', prev.toString());
    setSearchParams(searchParams);
  };

  //   Hide pagination if total page is 
  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center gap-4">
      <div>
        <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> -{' '}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{' '}
        of <span data-testid="count">{count}</span>
      </div>

      <div>
        <button
          className="p-2 hover:bg-secondary hover:text-black disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-grey3 rounded"
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          <BiChevronLeft />
        </button>
        <button
          className="p-2 hover:bg-secondary hover:text-black rounded disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-grey3"
          onClick={nextPage}
          disabled={currentPage === pageCount} >
          <BiChevronRight />
        </button>
      </div>  
    </div>
  );
};

export default Pagination;
