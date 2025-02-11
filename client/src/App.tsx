import * as React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Header />;
      <Footer />
    </>
  );
};

export default App;
