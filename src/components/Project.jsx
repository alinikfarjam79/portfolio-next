"use client";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

export default function Projects() {
  const projects = [
    {
      title: "Electronic-shop",
      description:
        "The Test Shop Project is a mock e-commerce web application built to demonstrate front-end development skills, featuring a responsive UI",
      image:
        "https://github.com/alinikfarjam79/shop-nextjs-zustand/blob/master/image1.png?raw=true",
      category: "Web",
      link: "https://github.com/alinikfarjam79/shop-nextjs-zustand",
    },
    {
      title: "AdminPanel",
      description:
        "The Test Admin Panel Project is a streamlined dashboard for managing e-commerce operations, showcasing skills in user role management, data visualization",
      image:
        "https://github.com/alinikfarjam79/AdminPanel-Next-mui/blob/master/image2.png?raw=true",
      category: "Web",
      link: "https://github.com/alinikfarjam79/AdminPanel-Next-mui",
    },
    {
      title: "Weather-app",
      description:
        "A weather app provides real-time updates and forecasts for your location.",
      image:
        "https://github.com/alinikfarjam79/weather-app/blob/master/scrennshot1.png?raw=true",
      category: "Web",
      link: "https://github.com/alinikfarjam79/weather-app",
    },
    {
      title: "crypto app",
      description: "An app shows crypto price",
      image:
        "https://github.com/alinikfarjam79/cryptoCurrency-js/blob/main/image.png?raw=true",
      category: "Web",
      link: "https://github.com/alinikfarjam79/cryptoCurrency-js",
    },
    {
      title: "Music player",
      description: "music player for listening new music ",
      image:
        "https://github.com/alinikfarjam79/musicPlayer/blob/main/image.png?raw=true",
      category: "Web",
      link: "https://github.com/alinikfarjam79/musicPlayer",
    },
    {
      title: "Parallax",
      description: "Parallax project",
      image:
        "https://github.com/alinikfarjam79/parallax/blob/main/image.png?raw=true",
      category: "Web",
      link: "https://github.com/alinikfarjam79/parallax",
    },
    {
      title: "offline-dino",
      description: "a Simple project with javaScript",
      image:
        "https://github.com/alinikfarjam79/offline-dino/blob/main/image.png?raw=true",
      category: "Web",
      link: "https://github.com/alinikfarjam79/offline-dino",
    },
    {
      title: "TodoList",
      description: "Todo list for management tasks with js and tailwind",
      image:
        "https://github.com/alinikfarjam79/todolist/blob/main/image.png?raw=true",
      category: "Web",
      link: "https://github.com/alinikfarjam79/todolist",
    },
    {
      title: "burger shop",
      description: "a project with tailwnind ",
      image:
        "https://github.com/alinikfarjam79/burger-tailwind/blob/main/image.png?raw=true",
      category: "Web",
      link: "https://github.com/alinikfarjam79/burger-tailwind",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
      <div className="w-16 h-1 bg-black mb-10 mx-auto"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start text-left hover:-translate-y-1 transition-all hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-base text-gray-600 mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium hover:underline"
            >
              View Project <BsArrowUpRight />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
