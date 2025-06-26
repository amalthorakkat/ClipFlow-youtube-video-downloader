import React from "react";

const Header = () => {
  return (
    <>
    <header className="bg-[#101828] text-white p-4 flex items-center justify-between">
      <h1 className=" text-4xl  ">ClipFlow</h1>
      <div>
        <select
          className="bg-white text-black rounded-[10px]"
          id="language"
          name="language"
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="hi">HI</option>
          <option value="de">DE</option>
          <option value="es">ES</option>
        </select>
      </div>
    </header>
    <div className="bg-red-500 text-white text-center">
      <h1 className="text-[12px]">Disclaimer: This is an educational project. Do not use for unauthorized downloading.</h1>
    </div>
    </>
  );
};

export default Header;
