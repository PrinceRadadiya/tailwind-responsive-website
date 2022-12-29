import React from "react";

const Section3 = () => {

  return (
    <>
      <div className="w-full bg-black py-16 px-4">
        <div className="max-w-[1240] text-amber-50">
          <div className=" mx-auto grid md:grid-cols-2">

            <div className="my-5">
              <h1 className="my-5 mx-10 text-3xl ">
                Want tips & tricks to optimize flow?
              </h1>
              <p className="mx-10">
                sign up to newsletter and stay up to date.
              </p>
            </div>

            <div className="my-5">
              <div className="flex flex-col sm:flex-row items-center justify-between w- w-full"></div>
              <input
                className="w-[320px] h-[40px] rounded border-none text-black "
                type="Email"
                placeholder="Enter your email"
              />
              <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 w-[200px] h-[40px] 
              font-serif  rounded-md m-5 text-black">
                Notify me
              </button>
              <p className="my-5 text-1xl">
                We care bout the protection of your data. <br />
                <span className="text-[#00df9a] hover:underline cursor-pointer md:-my-4" onClick={()=>alert('I am sorry I Apologize')}>
                  Privacy Policy
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
