import React from 'react'


const About = () => {
  return (
  <section
        id="about"
        className="py-2 pb-24 px-[15vw] md:px-[7vw]  "
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">About</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        </div>
        <div className="border border-gray bg-white-900 backdrop-blur-md  p-8 rounded-xl">
            <p className="mt-4 text-black-400 font-bold"> Computer science undergraduate with proven expertise in full stack web development using the MERN stack. Successfully developed and deployed production-grade applications in web domains. Having experience building clean, maintainable codebases, designing scalable backends, and designing responsive user-centric interfaces.
            </p>
        </div>

        
  
     
      </section>
  )
}

export default About
