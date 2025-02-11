import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className="bg-slate-900 text-white text-2xl text-center sm-screen">
      Copyright &copy; Airiel's URL Shortener | Airiel
    </div>
  );
};

export default Footer;
