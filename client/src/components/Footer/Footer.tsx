import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className="bg-slate-900 text-white text-base text-center">
      Copyright &copy; Riel's URL Shortener | Airiel
    </div>
  );
};

export default Footer;
