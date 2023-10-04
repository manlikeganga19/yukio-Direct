import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import AccountBtns from "./AccountBtns";
import Logo from "../assests/yukio1.png";
import { CgMenuRight } from "react-icons/cg";

const Header = ({ setNavMobile }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const headerClassName = isSticky  ? 'sticky' : '';
  return (
    <>
      <header headerClassName = {headerClassName}
        className="py-[5px] lg:pt-[10px] bg-white"
        // data-aos="fade-down"
        // data-aos-delay="900"
        // data-aos-duration="2000"
      >
        <div className="container mx-auto flex items-center justify-between">
          <a href="#">
            <img src={Logo} alt="" className="max-w-100" />
          </a>

          <div className="hidden lg:flex gap-x-[55px]">
            <Nav />
            <AccountBtns />
          </div>
          <div
            onClick={() => setNavMobile(true)}
            className="lg:hidden cursor-pointer"
          >
            <CgMenuRight className="text-2xl" />
          </div>
        </div>
      </header>
      <hr className="border-t border-gray-800" />
    </>
  );
};
export default Header;
