import React from 'react';
import { words } from "../constant";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from '../components/AnimatedCounter';

const Hero = () => {

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Background" />
      </div>

      <div className='md:flex md:justify-between md:items-center md:pr-20 x '>
        <div className="hero-layout">
          {/* LEFT: Hero Content */}
          <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
            <div className="flex flex-col gap-7">
              <div className="hero-text">
                <h2>Hi, I am </h2>
                <h1>Harsh Sharma</h1>
                <h1>
                  I am a&nbsp;
                  <span className="slide">
                    <span className="wrapper">
                      {words.map((word, index) => (
                        <span key={index} className="flex items-center md:gap-3 gap-2 pb-2">
                          <span className='text-[#8245ec] sm:text-md'>{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
              </div>

              {/* Uncomment Button when needed */}
              {/* <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            /> */}
            </div>
          </header>

          {/* RIGHT: Profile Image */}

        </div>
        <div className="flex justify-center mt-1">
          <div className="my_photo w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]  md:mt-10 rounded-full overflow-hidden shadow-md border border-gray-300">
            <img
              src="/images/my_photo.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>



      {/* Optional: Animated Counter or other components */}
      {/* <AnimatedCounter /> */}
    </section>
  );
};

export default Hero;
