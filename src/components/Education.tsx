"use client";

import React from "react";

const education = [
  {
    school: "AMA UNIVERSITY",
    year: "2024 - Present",
    course: "BSIT - Bachelor of science in information Technology",
    technolgies: ["react", "tyepescript"],
  },
  {
    school: "STA LUCIA HS / STI NOVALICHES",
    year: "2013 - 2019",
    course: "TechVoc - IT",
  },
  {
    school: "NEW ERA UNIVERSITY",
    year: "2005 - 2013",
  },
];

const Education = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Education</h2>
      <div>
        {education.map((educ, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">{educ.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {educ.school} - {" "}
                <span className="text-sm text-stone-500">{educ.course}</span>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
