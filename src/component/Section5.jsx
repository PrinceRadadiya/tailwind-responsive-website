import React from "react";

const Section5 = () => {
  return (
    <>
      <div className="w-full bg-white md:py-5 px-4">
        <h1 className="text-3xl md:mx-[430px]">contect us</h1>
        
          <div className="max-w-[1240px] grid md:grid-cols-2 mt-20 mx-auto gap-9 ">
            <div className="flex md:justify-end">
              <label htmlFor="username"></label>
              <input
                type="text"
                name="username"
                placeholder="username"
                id="username"
                className="bg-white border border-slate-300 rounded-md py-2 md:w-[300px] text-center hover:border-green-400"
              />
            </div>
         
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              placeholder="demo@gmail.com"
              id="email"
              className="bg-white border border-slate-300 rounded-md py-2 md:w-[300px] text-center hover:border-green-400"
            />
          </div>
        </div>
        <div className=" flex justify-center my-5">
        <label htmlFor="subject"></label>
            <input
              type="text"
              name="subject"
              placeholder="subject"
              id="text"
              className="bg-white border border-slate-300 rounded-md py-2 md:w-[636px] text-center hover:border-green-400"
            />
        </div>
        <div className="flex justify-center my-5">
          <textarea name="comment" id="." cols="30" rows="10" placeholder="comment"  className="bg-white border border-slate-300 rounded-md py-2 md:w-[636px]  hover:border-green-400"></textarea>
        </div>
        <button className="bg-[#00df9a] w-[200px] h-[40px] font-serif  rounded-md my-3 mx-[90px] md:mx-[425px] md:my-10">
              click me 
            </button>
      </div>
    </>
  );
};

export default Section5;
