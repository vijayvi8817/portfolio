import { useRef } from "react";
import Card from "../components/Card.jsx";
import { Globe } from "../components/globe.jsx";
import CopyEmailButton from "../components/CopyEmailButton.jsx";
import { Frameworks } from "../components/Frameworks.jsx";

const About = () => {
  const grid2Container = useRef();
  
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        
        {/* Grid 1: Intro */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt="Coding POV"
          />
          <div className="z-10">
            {/* Updated name based on resume */}
            <p className="headtext">Hi, I'm Vijay Vishwakarma</p>
            {/* Updated bio reflecting AI, automation, and full-stack focus[cite: 2, 3] */}
            <p className="subtext">
              Computer Science Engineer building end-to-end applications powered by Generative AI, Agentic automation, and robust REST APIs.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2: Floating Concept Cards */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500 font-bold text-center">
              AI &<br/>ENGINEERING
            </p>
            {/* Updated cards to reflect resume skills[cite: 2, 3] */}
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Agentic AI"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Microservices"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Workflow Automation"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="REST APIs"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Generative AI"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/python.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3: Location */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              {/* Updated location to Pune, India[cite: 2] */}
              I'm based in <span className="text-white">Pune, India</span>, and open
              to remote work worldwide.
            </p>
          </div>
          <figure className="absolute left-[35%] top-[5%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4: Contact */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            {/* Ensure this component handles your specific email (vijayvi8817@gmail.com)[cite: 2] */}
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5: Tech Stack */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            {/* Updated tech stack description based on resume[cite: 3] */}
            <p className="subtext">
              I specialize in Java, Spring Boot, Python, FastAPI, and React, alongside AI and workflow automation tools like n8n to build intelligent, scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;