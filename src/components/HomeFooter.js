import React from "react";

const HomeFooter = () => {
  return (
    <div className="py-4 border-t-2 border-sky-900">
      <div className="flex justify-center items-center">
        <div className="text-center">
          <p className="mb-1 text-black">
            <strong>Phone:</strong> +91 6204109940
          </p>
          <p className="mb-1 text-black">
            <strong>Email:</strong> kinghunz12@gmail.com
          </p>
          {/* <p className="mb-1 text-black">
            <strong>Address:</strong> H.no-14, R.no-12, Nr K.M.U.Highschool, Zakirnagar(E),Mango,
            Jamshedpur, Jharkhand, India.
          </p> */}

          <p className="mb-1 text-black">
            <strong>Country:</strong> India.
          </p>

        </div>
      </div>
      <div className="flex justify-center items-center ">
        <a
          href="https://github.com/luffyxgoku"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-[40] w-[40px] mt-2 mr-2 -mb-2 hover:transform hover:scale-125 duration-300"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/md-sami-adnan-501167225/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-[40] w-[40px] mt-2 mr-2 -mb-2 hover:transform hover:scale-125 duration-300"
            src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
            alt="Linkedln"
          />
        </a>

        <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">
          <img
            className="h-[40] w-[40px] mt-2 mr-2 -mb-2 hover:transform hover:scale-125 duration-300"
            src="https://freelogopng.com/images/all_img/1657907107gmail-icon-black.png"
            alt="Gmail"
          />
        </a>
      </div>
    </div>
  );
};

export default HomeFooter;
