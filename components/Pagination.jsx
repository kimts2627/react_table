import React from 'react';

const Pagination = ({
  pageCount,
  pageSize,
  pageIndex,
  setPageCount,
  setPageIndex,
  setPageSize,
}) => {

  return (
    <section>
      <button onClick={() => setPageIndex(0)} >
        {"<<"}
      </button>{" "}
      <button onClick={() => setPageIndex(pageIndex - 1)} >
        {"<"}
      </button>{" "}
      <button onClick={() => setPageIndex(pageIndex + 1)} >
        {">"}
      </button>{" "}
      <button onClick={() => setPageIndex(pageCount - 1)} >
        {">>"}
      </button>{" "}
      <span>
        Page{" "}
        <strong>
          {Number(pageIndex) + 1} of {pageCount}
        </strong>{" "}
      </span>
      <span>
        | Go to page:{" "}
        <input
          type="number"
          defaultValue={'hmmm....'}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            setPageIndex(page);
          }}
          style={{ width: "100px" }}
        />
      </span>{" "}
      <select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </section>
  )
}

export default Pagination;
