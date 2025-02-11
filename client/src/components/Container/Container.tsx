import * as React from "react";
import FormContainer from "../FormContainer/FormContainer";
import DataTable from "../DataTable/DataTable";

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  return (
    <>
      <FormContainer />
      <DataTable />
    </>
  );
};

export default Container;
