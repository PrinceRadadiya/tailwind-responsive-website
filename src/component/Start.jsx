import React from "react";
import Typed from "react-typed";

const Start = () => {
    const measss = () => {
        alert('hello guys')
    }

  return (
    <>
    <div className="w-full bg-black mx-w-[1240px]">
      <div className="text-white h-[430px] md:h-[460px]">
        <div className="text-center justify-center mt-60 md:mt-52 flex flex-col">
          <p className="font-extralight text-[#00df9a]">
            Hello guys I am prince
          </p>
          <h1 className="md:text-5xl  text-1xl  font-medium">
            Life is a long lesson in humility.
          </h1>
          <div className="flex justify-center space-x-2 md:space-x-6">
          <p className="md:text-5xl  text-1xl font-extralight  my-1 ">
            Developer requirements
          </p>
          <Typed className="md:text-5xl text-1xl  uppercase my-1 hover:text-[#00df9a] cursor-pointer"
            strings={["font-end.", "back-end.", "full-stack."]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          </div>
          
        <button className="bg-[#00df9a] w-[150px] h-[40px] font-serif mx-auto rounded-md my-2" onClick={measss}>start</button>

        </div>
      </div>
      </div>
    </>
  );
};

export default Start;
