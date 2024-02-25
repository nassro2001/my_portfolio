import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          A computer science minor in Business student at the Saint Joseph
          University of Beirut with strong academic achievement. Possess strong
          learning and communication skills with fluency in French, English and
          Arabic. Keen to pursue a career in IT sector. yes.
        </p>
      </div>
    </div>
  );
};

export default About;
