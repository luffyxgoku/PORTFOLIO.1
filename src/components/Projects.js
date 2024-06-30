import React from "react";

function Projects() {
  const projectsData = [
    {
      id: 1,
      name: "SHOPKARO",
      tech_used: "React js, Node js, JWT Auth, Stripe, Postgresql.",
      image: "https://img.freepik.com/free-photo/tools-materials-sanitary-works_93675-132625.jpg?t=st=1719573467~exp=1719577067~hmac=49bd340b52c2d63e63f39fc0c68004aba0b26cc97b7154b3ce89259ebdd8e00d&w=996",
      link: "https://www.wikipedia.org",
      github_link: "https://github.com/luffyxgoku",
      des_1:
        "Developed a comprehensive hardware and plumbing services platform using React, Node.js, Stripe, JWT authentication, and PostgreSQL.",
      des_2:
        "Integrated Stripe for seamless and secure payment transactions, allowing users to easily book and pay for services online.Designed and implemented JWT-based authentication to provide secure user access, ensuring data privacy and integrity across the platform.",
      des_3:
        "Led the back-end development with Node.js, ensuring efficient service management, secure user authentication via JWT, and reliable data storage using PostgreSQL.",
    },
    {
      id: 2,
      name: "FILMY DUNIYA",
      tech_used: "React js, Node js, Stripe, Firebase, TMDB Api.",
      image:
        "https://miro.medium.com/v2/resize:fit:1000/1*jjOITb2JFxwAHIKrET2Cuw.jpeg",
      link: "https://www.wikipedia.org",
      github_link: "https://github.com/luffyxgoku",
      des_1:
        "Developed Filmy Duniya, a Netflix-like platform for movie recommendations and streaming, using the TMDB API to fetch movie content.",
      des_2:
        "Integrated TMDB API for movie data, designed secure user authentication and data storage with Firebase, and implemented Stripe for payment processing.",
      des_3:
        "Led front-end development with React for a dynamic user interface, and back-end development with Node.js for efficient API handling and user authentication.",
      },
    {
      id: 3,
      name: "FACE FINDER",
      tech_used: "React js, Node js, Express js,  Postgresql, Clarifai Api.",
      image:
        "https://learn.g2.com/hubfs/G2CM_FI454_Learn_Article_Images_%5BFacial_recognition%5D_V1a-1.png",
      link: "https://www.wikipedia.org",
      github_link: "https://github.com/luffyxgoku",
      des_1:
        "Developed Face Finder, an application that detects faces in uploaded images and creates a border around each detected face using the Clarifai API.",
      des_2:
        "Integrated Clarifai API for face detection and designed the application architecture to handle efficient image processing. Utilized PostgreSQL for secure and scalable data storage, ensuring quick and reliable access to user data and image information.",
      des_3:
        "Developed Face Finder, an application that detects faces in uploaded images and creates a border around each detected face using the Clarifai API.",
      },
    // Add more projects
  ];

  return (
    <div className="pt-24 md:pt-10 pb-4">
      <section id="projects">
        <h1 className="animate-pulse text-center text-black font-bold py-4">
          Projects
        </h1>
        <div className="ml-6 sm:ml-0 mr-6 sm:mr-0 flex flex-wrap justify-center gap-4 ">
          {projectsData.map((project) => (
            <div
              className="w-[400px] transition-transform transform hover:scale-105"
              key={project.id}
            >
              <h3 className="text-black font-semibold text-lg">
                {project.name}
              </h3>

              <img
                className="w-[400px] h-[250px] mb-3 border-1 border-white shadow-md shadow-sky-950"
                src={project.image}
                alt={project.name}
              />
              <div className="flex flex-row">
                <button className="bg-sky-600  border-0 text-white font-medium px-4 py-2 rounded-lg mt-2 mr-2 hover:bg-black transition-transform transform hover:scale-110">
                  LiveLink
                </button>
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <img
                className="h-[40] w-[40px] mt-2 mr-2 -mb-2 hover:transform hover:scale-125 duration-300"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                />
                </a>
              </div>
              <div className="mt-3 text-black">
                <strong>TECH USED: </strong>
                <p>{project.tech_used}</p>
                <ul className="list-disc">
                  <li>{project.des_1}</li>
                  <li>{project.des_2}</li>
                  <li>{project.des_3}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
