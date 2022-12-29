import React from "react";

const Section2 = () => {
  return (
    <>
    <div className="w-full bg-white py-16 px-4">
    {/* md:h-[600px]  max-w-[1240] */}
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <img
                className="shadow-md w-[330px] md:w-[500px] mx-auto my-4"
                src="img/p5.jpg"
                alt="please check your internet connection and try again"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-[#00df9a] md:text-2xl  sm:text-1xl text-1xl uppercase my-2 mx-3">
                data analytics dashboard
              </p>
              <h1 className="text-3xl font-bold text-[black] m-4 uppercase ">
                data science
              </h1>
              <p className="mx-3 font-bold">
                It s easy to lie with statistics. It s hard to tell the truth
                without statistics
              </p>
              <p className="mx-3">
                Data science is the field of study that combines domain
                expertise, programming skills
                <br /> and knowledge of mathematics and statistics to extract
                meaningful insights from data.
              </p>
              <h2 className="font-bold md:mx-3">
                8 Best Data Science Courses & Certifications for 2022
              </h2>
              <ul className="md:block flex-col mx-6 my-1 list-decimal">
                <li>Data Science Specialization.</li>
                <li>Introduction to Data Science.</li>
                <li>Applied Data Science with Python Specialization.</li>
                <li>Data Science MicroMasters.</li>
                <li>Dataquest.</li>
                <li>Statistics and Data Science MicroMasters.</li>
                <li>CS109 Data Science.</li>
                <li>Python for Data Science and Machine Learning Bootcamp.</li>
              </ul>
              <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 w-[150px] h-[40px] font-serif  rounded-md my-3 mx-28 md:mx-60 md:my-10">
                More info
              </button>
            </div>
          </div>
      </div>
    </>
  );
};

export default Section2;
