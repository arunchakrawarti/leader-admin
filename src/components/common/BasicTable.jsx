"use client";
import clsx from "clsx";
import Pagination from "../common/Pagination";

const getNestedValue = (obj, path) => {
  if (!path) return undefined;

  return path
    .split(".")
    .reduce((acc, key) => acc?.[key], obj);
};

const BasicTable = ({
  columns,
  data,
  actions,
  total = 100,
  pageSize = 10,
  pagination,
  wrapperClassName,
}) => {
  return (
    <div
      className={clsx(
        "w-full border border-gray-200 bg-white rounded-xl shadow-xs",
        wrapperClassName
      )}
    >
      {/* TABLE SCROLL ONLY */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[900px] w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="px-4 py-4 text-left whitespace-nowrap
                  font-montserrat font-bold text-[0.875rem]
                  tracking-[-0.009375rem] text-gray-600"
                >
                  {col.label}
                </th>
              ))}

              {actions && (
                <th
                  className="px-4 py-4 text-left whitespace-nowrap
                  font-montserrat font-bold text-[0.875rem]
                  tracking-[-0.009375rem] text-gray-600"
                >
                  Action
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
              >
                {columns.map((col, index) => {
                  const rawValue = getNestedValue(row, col.key);

                  const value = col.render
                    ? col.render(rawValue, row, rowIndex)
                    : rawValue ?? "-";

                  return (
                    <td
                      key={index}
                      className="px-4 py-4 whitespace-nowrap
                      font-inter font-normal text-[0.975rem]
                      tracking-[-0.009375rem] text-gray-900"
                    >
                      {value}
                    </td>
                  );
                })}

                {actions && (
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex gap-3">
                      {actions.map((Action, i) => (
                        <Action key={i} row={row} />
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pagination && (
        <div className="p-4 border-t border-gray-200 flex justify-end text-black bg-white">
          <Pagination
            pageSize={pageSize}
            total={total}
          />
        </div>
      )}
    </div>
  );
};

export default BasicTable;