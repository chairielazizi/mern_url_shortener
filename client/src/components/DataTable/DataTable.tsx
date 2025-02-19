import * as React from "react";
import { API_URL, UrlData } from "../../api/config";
import { Link } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IDataTableProps {
  data: UrlData[];
  updateReloadState: () => void;
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
  const { data, updateReloadState } = props;
  console.log("Data for table: ", data);

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(`${API_URL}/shortUrl/${url}`);
      //   alert(`URL copied: ${API_URL}/shortUrl/${url}`);
      toast.success(`URL copied: ${API_URL}/shortUrl/${url}`);
    } catch (error) {
      console.error(error);
      toast.error("Error copying the selected URL");
    }
  };
  const deleteUrl = async (id: string) => {
    const res = await axios.delete(`${API_URL}/shortUrl/${id}`);
    console.log(res);
    updateReloadState();
    toast.success("Successfully deleted the URL");
  };

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
          <td className="px-6 py-3 text-xl table-action">
            <div className="flex content-center">
              <i
                onClick={() => copyToClipboard(item.shortURL)}
                className="fa fa-solid fa-copy pr-2 cursor-pointer "
              ></i>
              <i
                onClick={() => deleteUrl(item._id)}
                className="fa-solid fa-trash-can text-red-500 cursor-pointer"
              ></i>
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container mx-auto pt-2 pb-10">
      {/* <ToastContainer /> */}
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
        <table className="w-full table-fixed text-sm text-left  text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="text-md uppercase text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 w-6/12 table-ori-url">
                Original URL
              </th>
              <th scope="col" className="px-6 py-3 w-3/12 table-short-url">
                Short URL
              </th>
              <th scope="col" className="px-6 py-3 table-action">
                Clicks
              </th>
              <th scope="col" className="px-6 py-3 table-action">
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
