import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/GlobalConstants";
const Pagination = ({ count }) => {
  const [seachparam, setSearchparams] = useSearchParams();
  const currentPage = !seachparam.get("page")
    ? 1
    : Number(seachparam.get("page"));
  const PageCount = Math.ceil(count / PAGE_SIZE);
  console.log(PageCount);
  const next = () => {
    const next = currentPage === PageCount ? currentPage : currentPage + 1;
    seachparam.set("page", next);
    setSearchparams(seachparam);
  };
  const handlePrev = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    seachparam.set("page", prev);
    setSearchparams(seachparam);
  };
  if (PageCount <= 0) return null;
  return (
    <div className="border p-5 flex justify-between items-center">
      <p>
        Showing
        <span className="font-semibold px-1">{(currentPage - 1) * PAGE_SIZE + 1}</span> to
        <span className="font-semibold px-1">
          {currentPage === PageCount ? count : currentPage * PAGE_SIZE}
        </span>
        of
        <span className="font-semibold"> {count} </span> Results
      </p>

      <p className="flex gap-4">
        <button
          onClick={handlePrev}
          disabled={seachparam.get("page") == 1}
          className="flex items-center gap-1 hover:bg-blue-600 p-2 rounded-md hover:text-white"
        >
          <GrCaretPrevious />
          Previous
        </button>
        <button
          onClick={next}
          disabled={seachparam.get("page") == PageCount}
          className="flex items-center gap-1 hover:bg-green-600 p-2 rounded-md hover:text-white disabled:bg-red-400"
        >
          Next <GrCaretNext />
        </button>
      </p>
    </div>
  );
};

export default Pagination;
