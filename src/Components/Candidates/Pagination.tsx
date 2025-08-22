import ReactPaginate from 'react-paginate';
import { useContext } from 'react';
import { CandidateContext } from '../../Provider/CandidateContext';

interface paginationProps{
    pageIndex:number;
    totalPages:number
}
const Pagination = ({pageIndex,totalPages}:paginationProps) => {
  const { filters, dispatch } = useContext(CandidateContext);

  // Handle page click
  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected + 1; // ReactPaginate starts from 0, our API starts from 1
    dispatch({
      type: 'SET_FILTERS',
      payload: {
        ...filters,
        pageIndex: newPage,
      },
    });
  };

  

  return (
    <div className="tw-pt-14 tw-flex tw-items-center tw-justify-center">
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <svg xmlns="http://www.w3.org/2000/svg" className="tw-w-7 tw-fill-[#7f56d9] hover:tw-fill-white" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={totalPages}
        previousLabel={
          <svg xmlns="http://www.w3.org/2000/svg" className="tw-w-7 tw-fill-[#7f56d9] hover:tw-fill-white" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z"/>
          </svg>
        }
        renderOnZeroPageCount={null}
        forcePage={pageIndex - 1} // Convert to 0-based index
        containerClassName="tw-flex tw-gap-3 tw-items-center"
        pageClassName="tw-grid tw-items-center tw-justify-center tw-border-[1px] tw-border-[#ddd] tw-rounded-md"
        pageLinkClassName="tw-w-8 sm:tw-w-10 sm:tw-h-10 tw-h-8 tw-text-sm max-sm:tw-text-xs tw-font-medium tw-text-untitled-ui--primary600 tw-flex tw-items-center tw-justify-center"
        activeClassName="tw-bg-untitled-ui--primary600 tw-text-white"
        activeLinkClassName="tw-text-white"
        previousLinkClassName="tw-grid tw-w-8 tw-h-8 sm:tw-w-10 sm:tw-h-10 tw-items-center tw-justify-center tw-border-[1px] tw-border-[#ddd] tw-rounded-md hover:tw-bg-untitled-ui--primary600 hover:tw-text-white"
        nextLinkClassName="tw-grid tw-w-8 tw-h-8 sm:tw-w-10 sm:tw-h-10 tw-items-center tw-justify-center tw-border-[1px] tw-border-[#ddd] tw-rounded-md hover:tw-bg-untitled-ui--primary600 hover:tw-text-white"
        disabledClassName="tw-opacity-50 tw-cursor-not-allowed"
        disabledLinkClassName="tw-opacity-50 tw-cursor-not-allowed"
        breakClassName="tw-text-untitled-ui--primary600"
      />
    </div>
  );
};

export default Pagination;