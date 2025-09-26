import React from "react";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-[#F6F1DE] text-[#4B352A] text-center"
      style={{ fontFamily: "'Playfair Display', serif", paddingTop: "8rem" }} // more space for the navbar!
    >
      <p className="text-2xl md:text-4xl mb-4">Hi, I'm</p>


      <h1
        className="text-6xl md:text-8xl font-extrabold mb-10 select-none bg-gradient-to-r from-[#00879E] to-[#4F1C51] text-transparent bg-clip-text"
      >
        Moksha Odlamaani
      </h1>

     <a
  href="/about"
  className="mt-6 mb-12 text-[#CA7842] text-2xl font-semibold hover:underline transition duration-200 ease-in-out"
>
  About Me
</a>

    </div>
  );
};

export default Home;
