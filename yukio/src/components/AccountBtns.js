import React from "react";

const AccountBtns = () => {
  return (
    <div className="flex items-center font-medium">
      <a className="hover:text-black transition" href="#">
        Login
      </a>

      {/* separator */}
      <span className="mx-6 text-black font-thin">|</span>

      <button className="btn h-[52px] text-base px-8 text-white-secondary ">Register</button>
    </div>
  );
};
export default AccountBtns;
