"use client"
import React from "react";
import Image from "next/image";
import Toggle from "./Toggle";
import conversations from "./conversations.json";
import projects from "./Projects.json";

import { Link } from "react-scroll";

import { usePathname } from "next/navigation";

const Profile = () => {
  
  const pathname = usePathname()
  const pathParts = pathname.split("/").filter(Boolean);


  return (
    <div className="m-5 font-opensans flex flex-col gap-4">
      <div className="relative h-50 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 w-full">
        <div className="pl-5 mt-5 text-white">
          <h1>Pages / {pathParts}</h1>
          <h1 className="font-bold text-xl">Profile</h1>
        </div>
        <div className="absolute inset-x-5 -bottom-10  bg-white rounded-md shadow-md">
          <div className="flex justify-between items-center px-5">
            <div className="flex  items-center gap-3">
            
              <Image src='/alec.svg' alt="alec" height={20} width={20} />
              <div>
                <h1 className="font-semibold textx">Alec Thompson</h1>
                <h1 className="text-gray-600">CEO / Co-Founder</h1>
              </div>
            </div>
            <div className="flex gap-5">
              <h1>Overview</h1>
              <h1>Teams</h1>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Platform Settings</h2>
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                ACCOUNT
              </h4>
              <div className="space-y-3">
                <Toggle label="Email me when someone follows me" />
                <Toggle label="Email me when someone answers me" />
                <Toggle
                  label="Email me when someone mentions me"
                  defaultChecked
                />
              </div>

              <h4 className="text-sm font-medium text-gray-700 mt-4 mb-2">
                APPLICATION
              </h4>
              <div className="space-y-3">
                <Toggle label="New launches and projects" defaultChecked />
                <Toggle label="Monthly product updates" />
                <Toggle label="Subscribe to newsletter" defaultChecked />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Profile Information</h2>
              <button className="text-blue-500 hover:underline text-sm">
                Edit
              </button>
            </div>
            <div className="mb-5 border-b border-b-gray-300 pb-5">
              <p className="text-sm text-gray-700 ">
                Hi, I'm Alec Thompson. Decisions: If you can't decide, the
                answer is no. If two equally difficult paths, choose the one
                more painful in the short term.
              </p>
            </div>
            <div className="text-sm space-y-4">
              <p>
                <strong>Full Name:</strong> Sarah Emily Jacob
              </p>
              <p>
                <strong>Mobile:</strong> (44) 123 1234 123
              </p>
              <p>
                <strong>Email:</strong> sarahjacob@mail.com
              </p>
              <p>
                <strong>Location:</strong> USA
              </p>
              <p className="flex gap-3">
                <strong>Social:</strong>

                 <Image src='/facebook.svg' alt="alec" height={20} width={20} />
                  <Image src='/twitter.svg' alt="alec" height={20} width={20} />
                   <Image src='/insta.svg' alt="alec" height={20} width={20} />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Conversations</h2>
            <ul className="space-y-2">
              {conversations.map((c, i) => (
                <li key={i} className="flex justify-between items-center">
                  <div className="flex gap-2 justify-center items-center">
                    
                     <Image src={c.image} alt={c.name} height={48} width={48} />
                    <div>
                      <p className="font-medium">{c.name}</p>
                      <p className="text-sm text-gray-500">{c.msg}</p>
                    </div>
                  </div>
                  <button className="text-pink-600 text-sm font-semibold">
                    REPLY
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="p-4 bg-white rounded-xl space-y-3 shadow-md"
      >
        <div>
          <h2 className="text-2xl font-bold ">Projects</h2>
          <p className="text-gray-500 ">Architects design houses</p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {projects.map((project) => (
            <div className="w-full flex flex-col justify-center">
            
              <Image src={project.image} alt={project.title} height={200} width={300} className="rounded-lg object-cover" />
              <h4 className="text-sm text-gray-500">{project.subtitle}</h4>
              <h3 className="text-lg font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex items-center justify-center gap-3">
                <button className="border-1 border-pink-500 text-pink-500 font-medium text-xs px-2 py-1 rounded-full hover:bg-pink-500 hover:text-white transition">
                  VIEW PROJECT
                </button>
                <div className="flex -space-x-2 ">
                  {project.team.map((image, i) => (
                
                    <Image src={image} key={i} height={28} width={28} className="rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="border border-gray-300 text-gray-600 rounded-md flex flex-col justify-center items-center gap-2">
          
            <Image src='/upload.svg' alt="upload" height={20} width={20} />
            <h1>Upload New Project</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
