import React from "react";

function Navbar() {
  const style = {
    color: "white",
  };
  return (
    <div id="navbar" className="relative mx-auto bg-bgColor p-6">
      <div className="flex justify-between">
        <h1 style={style} className=" text-2xl">
          dj.<span className="text-primaryColor">calura</span>
        </h1>

        <div className="menu space-x-5 hidden md:flex">
          <a href="#" style={style} className="p-1">
            about
          </a>
          <a href="#" style={style} className="p-1">
            skills
          </a>
          <a href="#" style={style} className="p-1">
            projects
          </a>
          <a href="#" style={style} className="p-1">
            contact
          </a>
          <a
            href="#"
            style={style}
            className="border-solid border-primaryColor border py-1 px-2 rounded"
          >
            resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
