import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className=" bg-slate-900">
      <div className="container p-2 mx-auto">
        <nav className="py-5 flex">
          <a href="https://aku.airiel.space" target="_blank">
            <img src="./logo.png" alt="website logo" className="w-16 mr-5" />
          </a>
          <div className="text-4xl text-emerald-500 sm-screen">
            Airiel's URL Shortener
          </div>
        </nav>
      </div>
    </div>
  );
};

// function Header() {
//   return (
//     <div className="bg-slate-900">
//       <div className="container p-2 mx-auto">
//         <nav className="py-5">
//           <div className="">Riel's URL Shortener</div>
//         </nav>
//       </div>
//     </div>
//   );
// }

export default Header;
