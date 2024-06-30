import React, { useState, useEffect, useMemo } from "react";
//import "./Home.css";
import profileimage from "./newpic3.jpeg";

function Home() {
  const handleDownload = () => {
    // Path to your PDF file
    const pdfPath = "/Sami.pdf";

    // Create a new anchor element
    const link = document.createElement("a");

    // Set the href attribute to the path of the PDF file
    link.href = pdfPath;

    // Set the download attribute with the desired file name
    link.download = "Sami.pdf";

    // Append the anchor element to the document
    document.body.appendChild(link);

    // Trigger a click event on the anchor element
    link.click();

    // Remove the anchor element from the document
    document.body.removeChild(link);
  };

  const [text, setText] = useState("Java");
  // const texts = ["Java", "React.js", "Node.js", "postgreSQL"];

  // useEffect(() => {
  //   let currentIndex = 0;

  //   const interval = setInterval(() => {
  //     setText(texts[currentIndex]);
  //     currentIndex = (currentIndex + 1) % texts.length;
  //   }, 1500);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);


  const texts = useMemo(() => [
    'React.js',
    'Node.js',
    'postgreSQL'
    // Add more texts as needed
  ], []);

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setText(texts[currentIndex]);
      currentIndex = (currentIndex + 1) % texts.length;
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [texts]);


  return (
    <div>
      <section id="home">
        {/*bg-gradient-to-r from-blue-200 to-gray-400*/}
        <div className="h-screen lg:flex justify-center items-center pt-2">
          <div className="lg:flex-1 mt-16">
            <div className="pt-4 ml-16 md:ml-36 lg:ml-36">
              <h2 className="animate-pulse sm:animate-bounce mt-8 mb-0 font-semibold md:text-3xl lg:text-4xl">
                Hello, I'm
              </h2>
              <h1 className=" text-black font-semibold md:text-5xl lg:text-6xl">
                {/* <span className="text-black">MD. SAMI </span>ADNAN */}
                MD. SAMI ADNAN
              </h1>

              <h3 className="mt-4 mb-0 md:text-3xl lg:text-4xl">
                I develop websites using....
              </h3>

              <h2 className="text-sky-600 md:text-2xl lg:text-3xl mb-4">
                {text}
              </h2>
            </div>
            <div className="ml-16 sm:ml-36">
              <button
                className="ml-6 sm:ml-0 mb-2 mt-1 bg-sky-600 text-white font-semibold py-3 px-4 rounded-lg  hover:bg-black transition-transform duration-300 transform hover:scale-110"
                onClick={handleDownload}
              >
                DOWNLOAD CV
              </button>
            </div>
          </div>

          <div className="lg:flex-1 flex justify-center mt-6 sm:mt-6 md:mt-10">
            <img
              className="h-1/2 w-1/2 sm:mt-4 sm:h-1/4 sm:w-1/4 lg:h-1/2 lg:w-1/2 mb-4 rounded-xl shadow-2xl shadow-gray-950 transition-transform transform hover:scale-105 duration-400 "
              src={profileimage}
              alt="img"
            /> 
          </div>
        </div>
        <div className="pt-4 pb-4">
          <div className="flex flex-wrap justify-center m-8">
            <h1 className="text-black underline underline-offset-8 decoration-sky-950 ml-10 sm:ml-0">Welcome to my World</h1>
            <p className="mt-4 text-white">
              I am a young Full-stack Developer looking to take on the tech
              world by storm. I grew up in Jamshedpur, India. I am a young
              Full-stack Developer looking to take on the tech world by storm. I
              grew up in Jamshedpur, India. I am a young Full-stack Developer
              looking to take on the tech world by storm. I grew up in
              Jamshedpur, India.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center m-4">
            <div className="border-0 text-center w-[350px] h-[320px] pt-8 rounded-xl text-white bg-sky-950 hover:bg-black hover:rotate-6 hover:transform transition-transform duration-300">
              <h2 className="pb-3">About Me</h2>
              <p>Hi, I'm <strong>Sami</strong> ! I'm a passionate web developer with a keen interest in creating dynamic and user-friendly websites.</p>
              <p>On this page, you'll find my latest projects and resources that showcase my journey and expertise in web development.</p>
            </div>

            <div className="border-0 text-center w-[350px] h-[320px] pt-8 rounded-xl text-white bg-sky-950 hover:bg-black hover:scale-105 hover:transform transition-transform duration-300">
              <h2 className="pb-3" >Latest Project</h2>
              <p> <strong>SHOPKARO</strong> features a responsive design, user authentication, product listings, shopping cart functionality, and secure payment integration</p>
              <p>The site offers a seamless user experience with advanced search capabilities, product reviews, and personalized recommendations.</p>
            </div>

            <div className="border-0 text-center w-[350px] h-[320px] pt-8 rounded-xl text-white bg-sky-950 hover:bg-black hover:-rotate-6 hover:transform transition-transform duration-300">
              <h2 className="pb-3" >Get In Touch</h2>
              <p>Don't hesitate to get in touch – let's create something amazing together!</p>
              <p className="text-white">
              <strong>Email:</strong> kinghunz12@gmail.com
              </p>
              <p className="text-white">
              <strong>Phone:</strong> +91 6204109940
              </p>

               <p></p>         
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
