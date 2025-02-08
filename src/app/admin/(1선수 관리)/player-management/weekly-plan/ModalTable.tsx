const Table = () => {
  const headers = ["시도", "회수", "평균", "총점(hr)", "중간값"];
  const data = [
    [1, 3, 7, 90, 2],
    [2, 3, 7, 90, 2],
    [3, 2, 5, 80, 2],
  ];

  return (
    <div className="rounded-md bg-[#F5F5F5] pb-12 pt-3 px-5 ml-[7rem] mr-12 overflow-hidden">
      {/* Header Row */}
      <div className="flex font-medium text-sm bg-[#F5F5F5]">
        {headers.map((header, idx) => (
          <div
            key={idx}
            className="flex-1 text-center text-[#A1A1A1] px-4 py-3"
          >
            {header}
          </div>
        ))}
      </div>

      {/* Data Rows */}
      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex gap-2 text-sm ${rowIndex > 0 ? "my-2" : ""}`}
        >
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`flex-1 text-center px-4 py-3 ${
                cellIndex === 0 ? "" : "bg-white rounded-md"
              }`}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Table;
