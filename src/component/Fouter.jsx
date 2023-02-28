import React from "react";

const Fouter = () => {
  return (
    <>
      <div className="w-full bg-black max-w-[1240px] text-white py-16 px-4 h-[500px] mx-auto">
      <div className="max-w-[1000px] w-full bg-[#f7f7f7] mx-auto h-[150px] my-[-90px] rounded-md"> 
          j
      </div>


        <div className=" mx-auto grid md:grid-cols-4 text-center font-serif md:mt-[100px]">
          <div className="mt-[30px]">
            <h1 className="bold text-green-400"> get connected</h1>
            <p>Connected</p>
            <p>Dashboard</p>
            <p>Security Audits</p>
            <p>E-Commerce</p>
          </div>

          <div className="mt-[30px]">
            <h1 className="bold text-green-400">Resources</h1>
            <p>Using Data</p>
            <p>Docs</p>
            <p>Support</p>
            <p>Supported Hardware</p>
          </div>

          <div className="mt-[30px]">
            <h1 className="bold text-green-400">Company</h1>
            <p>About us</p>
            <p>Blog</p>

            <p>Coverage Map</p>
          </div>

          <div className="mt-[30px]">
            <h1 className="bold text-green-400">Social</h1>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Linkedin</p>
            <p>Github</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fouter;
