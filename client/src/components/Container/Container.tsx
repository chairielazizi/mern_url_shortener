import * as React from "react";
import FormContainer from "../FormContainer/FormContainer";
import DataTable from "../DataTable/DataTable";
import { API_URL, UrlData } from "../../api/config";
import axios from "axios";

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);
  const [reload, setReload] = React.useState<boolean>(false);

  const updateReloadState = (): void => {
    setReload(true);
  };

  const fetchTableData = async () => {
    const res = await axios.get(`${API_URL}/shortUrl`);
    console.log("Response from container:", res);
    setData(res.data);
    console.log("Data from container", res.data);
    if (Array.isArray(res.data)) {
      setData(res.data);
    } else {
      console.error("Error: Data is not an array");
    }
    setReload(false);
  };

  React.useEffect(() => {
    fetchTableData();
  }, [reload]);

  return (
    <>
      <FormContainer updateReloadState={updateReloadState} />
      <DataTable updateReloadState={updateReloadState} data={data} />
    </>
  );
};

export default Container;
