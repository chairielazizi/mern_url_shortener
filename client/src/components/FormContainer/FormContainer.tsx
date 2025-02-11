import * as React from "react";
import axios from "axios";
import { API_URL } from "../../api/config";

interface IFormContainerProps {
  updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const [originalUrl, setOriginalUrl] = React.useState<string>("");
  const { updateReloadState } = props;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/shortUrl`, {
        originalURL: originalUrl,
      });
      setOriginalUrl("");
      updateReloadState();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-2">
      <div className="form my-8 rounded-xl bg-cover">
        <div className="w-full h-full p-20 rounded-xl backdrop-brightness-75">
          <h2 className="text-4xl text-center text-white">URL Form</h2>
          <p className="text-center text-white pb-2 text-xl font-light">
            Put your long link here to shorten it
          </p>
          <p className="text-center text-white pb-4 text-sm font-extralight">
            A tool to shorten your link built using MERN stack and Typescript;
            hosted on Render
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="relative w-full bg-white rounded-xl">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-900">
                  urlshortener.com/
                </div>
                <input
                  type="text"
                  placeholder="add your link"
                  required
                  className="block w-full p-4 ps-34 text-sm font-semibold text-gray-800 bg-white focus:bg-blue-50 border border-gray-500 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-xl"
                  value={originalUrl}
                  onChange={(e) => setOriginalUrl(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-4 text-sm font-medium text-white bg-blue-800 rounded-xl hover:bg-blue-600 cursor-pointer border border-blue-700 focus:ring-3 focus:outline-none focus:ring-blue-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
