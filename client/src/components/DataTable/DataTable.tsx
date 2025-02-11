import * as React from "react";

interface IDataTableProps {}

const DataTable: React.FunctionComponent<IDataTableProps> = () => {
  return (
    <div className="container mx-auto pt-2 pb-10">
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
        <table className="w-full table-fixed text-sm text-left  text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="text-md uppercase text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 w-6/12">
                Original URL
              </th>
              <th scope="col" className="px-6 py-3 w-3/12">
                Short URL
              </th>
              <th scope="col" className="px-6 py-3">
                Clicks
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{renderTableData}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
