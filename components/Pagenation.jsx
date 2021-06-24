import React from 'react';

const Pagenation = () => {

  return (
    <section>
      <button onClick={undefined} >
        {"<<"}
      </button>{" "}
      <button onClick={undefined} >
        {"<"}
      </button>{" "}
      <button onClick={undefined} >
        {">"}
      </button>{" "}
      <button onClick={undefined} >
        {">>"}
      </button>{" "}
      <span>
        Page{" "}
        <strong>
          {'hm...'} of {'hmm..'}
        </strong>{" "}
      </span>
      <span>
        | Go to page:{" "}
        <input
          type="number"
          defaultValue={'hmmm....'}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            // gotoPage(page);
          }}
          style={{ width: "100px" }}
        />
      </span>{" "}
      <select
        // value={pageSize}
        // onChange={(e) => {
        //   setPageSize(Number(e.target.value));
        // }}
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

export default Pagenation;
