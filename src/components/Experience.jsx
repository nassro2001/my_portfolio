import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import java from "../assets/java.png";
import php from "../assets/php.png";
import sql from "../assets/sql.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import flutter from "../assets/flutter.png";
import nodejs from "../assets/nodejs.png";
import android from "../assets/androidStudio.png";
import git from "../assets/git.png";
import firebase from "../assets/firebase.png";
import express from "../assets/express.png";
import mongoDB from "../assets/mongoDB.png";
import postgress from "../assets/postgress.png";
import dart from "../assets/dart.png";
import csharp from "../assets/c#.png";
import wp from "../assets/wp.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: java,
      title: "Java",
      style: "shadow-white",
    },
    {
      id: 7,
      src: sql,
      title: "SQL",
      style: "shadow-blue-700",
    },
    {
      id: 8,
      src: php,
      title: "PHP",
      style: "shadow-blue-800",
    },
    {
      id: 9,
      src: flutter,
      title: "Flutter",
      style: "shadow-blue-300",
    },
    {
      id: 10,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 11,
      src: android,
      title: "Android Studio (Java)",
      style: "shadow-green-200",
    },
    {
      id: 12,
      src: dart,
      title: "Dart",
      style: "shadow-blue-400",
    },
    {
      id: 13,
      src: express,
      title: "Express.js",
      style: "shadow-white",
    },
    {
      id: 14,
      src: mongoDB,
      title: "MongoDB",
      style: "shadow-green-700",
    },
    {
      id: 15,
      src: postgress,
      title: "PostgressSQL",
      style: "shadow-blue-500",
    },
    {
      id: 16,
      src: wp,
      title: "WordPress",
      style: "shadow-blue-500",
    },
    {
      id: 17,
      src: git,
      title: "Git Version Control",
      style: "shadow-red-800",
    },
    {
      id: 18,
      src: csharp,
      title: "C#",
      style: "shadow-green-300",
    },
    {
      id: 19,
      src: firebase,
      title: "Firebase",
      style: "shadow-orange-600",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
