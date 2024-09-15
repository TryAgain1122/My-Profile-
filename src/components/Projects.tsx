"use client";

import Image from "next/image";
import React from "react";
import logo from '../assets/logo.png';
import movieland from '../assets/movieland.png';
import reactMeals from '../assets/reactmeals.png';
import guess from '../assets/guess.png';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './customSwiper.css';
import Link from "next/link";

const myProjects = [
  {
    title: "Urban Deca Tower",
    description:
      "A hotel management system with payment integration, authentication via NextAuth, room booking and cancellation features, and an admin panel for managing users and bookings.",
    technologies: ["ReactJs", "Typescript", "Redux", "MongoDB", "Tailwind CSS", "Next"],
    href: "https://www.urban-deca-tower.site/",
    images: [logo]
  },
  {
    title: "MovieLand",
    description: "Movieland is built with React.js, and the movie listings are fetched from an API.",
    technologies: ["Next UI", "Next JS", "Tailwind CSS"],
    images: [movieland]
  },
  {
    title: "Guessing game",
    description: "A simple web-based guessing game built using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    images: [guess],
    href: "https://guess-my-number-beryl-six.vercel.app/"
  },
  {
    title: "React Meals",
    description: "Static API food ordering application built with ReactJS.",
    technologies: ["React JS", "CSS"],
    images: [reactMeals],
    href: "https://food-ordering-app-lake.vercel.app/"
  },
];

const Projects = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {myProjects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/5">
              <Swiper
                modules={[Navigation]}
                spaceBetween={8}
                slidesPerView={1}
                navigation
                loop={true}
              >
                {project.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      alt={`Project Image ${index + 1}`}
                      src={image}
                      className="rounded-lg hover:scale-[1.1] transition-all duration-300 w-full"
                      width={400} // Add width and height for better optimization
                      height={300}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-full max-w-xl lg:w-3/4 ml-0 lg:ml-10">
              {project.href ? (
                <Link href={project.href} target="_blank">
                  <h3 className="mb-2 font-semibold text-2xl hover:underline transition-all duration-300">{project.title}</h3>
                </Link>
              ) : (
                <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              )}
              <p className="mb-4 text-stone-400">{project.description}</p>
              {project.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mb-2 bg-stone-600 px-3 py-1 text-xs lg:text-sm font-medium text-stone-300 rounded-md inline-block"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
