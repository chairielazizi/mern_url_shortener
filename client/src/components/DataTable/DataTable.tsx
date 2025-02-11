import * as React from "react";
import { API_URL, UrlData } from "../../api/config";
import { Link } from "react-router";

interface IDataTableProps {
  data: UrlData[];
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
  const { data } = props;
  console.log("Data for table: ", data);
  const renderTableData = () => {
    return data.map((item) => {
      return (
        <tr
          key={item._id}
          className="border-b text-white bg-gray-700 hover:bg-white hover:text-gray-900 hover:font-semibold"
        >
          <td className="px-6 py-3 break-words">
            <Link to={item.originalURL} target="_blank">
              {item.originalURL}
            </Link>
          </td>
          <td className="px-6 py-3 break-words">
            <Link to={`${API_URL}/shortUrl/${item.shortURL}`} target="_blank">
              {item.shortURL}
            </Link>
          </td>
          <td className="px-6 py-3">{item.clicks}</td>
          <td className="px-6 py-3">action</td>
        </tr>
      );
    });
  };

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
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
