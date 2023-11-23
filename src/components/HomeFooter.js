import React from "react";

const HomeFooter = () => {
  return (
    <div className="bg-third-gray py-4">
      <div className="flex justify-center items-center">
        <div className="text-center">
          <p className="mb-1">
            <strong>Phone:</strong> +91 8797023058
          </p>
          <p className="mb-1">
            <strong>Email:</strong> khanshadman7777@gmail.com
          </p>
          <p className="mb-1">
            <strong>Address:</strong> Cross Road Number 14, Jawaharnagar, Mango,
            Jamshedpur, Jharkhand, India.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <a
          href="https://github.com/ShadmanKhan10"
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
          href="https://linkedin.com/in/shadman-khan-a0a5221b8"
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
        <a
          href="https://linkedin.com/in/shadman-khan-a0a5221b8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-[40] w-[40px] mt-2 mr-2 -mb-2 hover:transform hover:scale-125 duration-300"
            src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3772786-3146919.png"
            alt="Leetcode"
          />
        </a>
      </div>
    </div>
  );
};

export default HomeFooter;
