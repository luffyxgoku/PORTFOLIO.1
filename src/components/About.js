import React from "react";
import profileimage3 from "./picabout3";
import profileimage4 from "./picabout5.jpeg";

function About() {
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
  return (
    <div>
      <section id="about">
        <div className="lg:flex pt-16 pb-4">
          <div className="lg:flex-1">
            <div className="flex justify-center items-center sm: flex flex-wrap ml-36 mt-6">
              <img
                className="px-8 py-8"
                src={profileimage3}
                width={500}
                alt="img"
              />
              <img
                className="px-8 py-8 relative bottom-24 right-40"
                src={profileimage4}
                width={500}
                alt="img"
              />
            </div>
          </div>

          <div className="lg:flex-1 lg:flex-col px-4">
            <h1 className="text-black animate-pulse font-bold mb-4 ml-24 sm:ml-0">ABOUT</h1>
            {/*<h4 className="font-sm mt-4 mb-2">I Develope Websites</h4>*/}
            <p>
            <strong>About Me </strong>
<p>Hi, I'm Sami, a passionate and dedicated full stack web developer with over 3 years of experience in building dynamic and user-centric web applications. I specialize in both front-end and back-end development, ensuring seamless integration and performance across the entire stack.</p>

<strong>Professional Background </strong> 
<p>My journey in web development began in 2020, and since then, I've honed my skills in various technologies including HTML, CSS, JavaScript, React, Node.js, Express, and Postgresql. I enjoy tackling complex problems and transforming ideas into functional, visually appealing websites and applications.</p>

<strong>Interests and Hobbies </strong>
<p>When I'm not coding, you'll often find me with my nose in a book, exploring different genres and gaining new perspectives. I'm also an avid football enthusiast – both on the field and off. I love watching matches, analyzing games, and playing football with friends. Socializing is another passion of mine; I thrive on connecting with new people, exchanging ideas, and building meaningful relationships.</p>

<strong>My Approach </strong>
<p>In my work, I prioritize clean, maintainable code and user experience. I believe in continuous learning and staying updated with the latest industry trends to deliver the best possible solutions. Whether it's a simple website or a complex platform, I approach each project with creativity, precision, and a commitment to excellence.</p>

<strong>Let's Connect </strong>
<p>I'm always open to new opportunities and collaborations. If you're looking for a skilled web developer to bring your vision to life, feel free to reach out. Let's create something amazing together!</p>
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-0">
                <p className="font-semibold mb-0">NAME</p>
                <p>MD. SAMI ADNAN</p>
              </div>
              <div className="ml-10 sm:ml-0 p-0">
                <p className="font-semibold mb-0">EDUCATION</p>
                <p>R.V.S.C.E.T</p>
              </div>
              <div className="p-0">
                <p className="font-semibold mb-0">EMAIL</p>
                <p>kinghunz12@gmail.com</p>
              </div>
              <div className="ml-10 sm:ml-0 p-0">
                <p className="font-semibold mb-0">EMPLOYMENT</p>
                <p>Available</p>
              </div>
            </div>

            <button
              className="ml-16 sm:ml-0 font-semibold bg-sky-600 px-8 py-2 rounded-md text-white text-sm  hover:bg-black transition-transform duration-300 transform hover:scale-110"
              onClick={handleDownload}
            >
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
