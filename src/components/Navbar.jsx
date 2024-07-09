import { navLists } from "../constants/index.js";
import { appleImg, bagImg, searchImg } from "../utils/index.js";

function Navbar() {
  return (
    <nav className="scrim-max-width flex w-full items-center justify-between">
      <img src={appleImg} alt="apple-logo" width={14} height={18} />
      <div className="hidden md:flex">
        <ul className="flex-center flex-row gap-10">
          {navLists.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-sm text-theme-gray hover:text-white"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-center flex-row gap-7">
        <img src={searchImg} alt="search" width={19} height={18} />
        <img src={bagImg} alt="bag" width={18} height={18} />
      </div>
    </nav>
  );
}

export default Navbar;
