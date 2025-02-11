import * as React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Container />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default App;
