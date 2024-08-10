import { footerLinks } from "../constants";

function Footer() {
  return (
    <footer className="text-sm font-semibold text-theme-gray md:mx-auto md:w-[75%]">
      <div className="h-[0.5px] w-full bg-theme-gray opacity-50"></div>
      <div className="flex flex-col py-4 md:flex-row md:justify-between">
        <p>Copyright &copy; 2024 Apple Inc. All rights reserved.</p>
        <ul className="flex flex-row gap-x-2">
          {footerLinks.map((link, index) => (
            <li key={index} className="flex flex-row gap-x-2">
              <a href={""}>{link}</a>
              {index !== footerLinks.length - 1 && <span>|</span>}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
