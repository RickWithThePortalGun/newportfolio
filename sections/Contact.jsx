import React from "react";

const Contact = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/oyeniyivictorsresume.pdf";
    link.download = "Oyeniyi Victors Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="bg-transparent mt-[200px] pb-[200px] relative flex flex-col justify-center items-center">
      <div className=" bg-customblack py-10 pl-10 pr-4 rounded-3xl max-sm:rounded-none max-sm:w-full w-fit  h-full flex flex-row max-sm:flex-col gap-8">
        <div>
          <p className="text-[30px] font-semibold text-white mb-6">
            Contact Me
          </p>
          <div className="text-[15px]">
            <p className="font-semibold text-white">For Employment I prefer:</p>
            <p className="text-white font-light items-center">
              {`• `}Product Company, SASS, Crypto Industry, AI, Healthcare and
              many more.
            </p>
            <p className="text-white font-light">
              {`• `}Frontend Developer, Web Developer, Mobile Developer
            </p>
            <p className="text-white font-light">
              {`• `}Node.js, React:Nextjs, Express, Django, React Native
            </p>
          </div>
        </div>
        <div className="flex max-sm:justify-end flex-row items-end gap-4">
          <div
            className="border-[1px] rounded-full px-2 py-1 cursor-pointer"
            onClick={handleDownload}
          >
            <p className="text-white flex flex-row items-center gap-4">
              Resume
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 14V17.5C20 20.5577 16 20.5 12 20.5C8 20.5 4 20.5577 4 17.5V14M12 15L12 3M12 15L8 11M12 15L16 11"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <a href="mailto:4businesswithvictor@gmail.com">
              <span>
                <img
                  width="50"
                  height="50"
                  className="rounded-full"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/apple-mail.png"
                  alt="apple-mail"
                />
              </span>
            </a>
            <a
              href="https://linkedin.com/in/quantumui

"
            >
              <span>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"
                  alt="linkedin"
                  className="rounded-full"
                />
              </span>
            </a>

            <span className="flex flex-col gap-2 justify-center items-center">
              <img
                width="48"
                className="rounded-full"
                height="48"
                src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/FFFFFF/external-discord-chat-for-social-gaming-between-peers-logo-bold-tal-revivo.png"
                alt="external-discord-chat-for-social-gaming-between-peers-logo-bold-tal-revivo"
              />
              <p className="text-white text-[12px]">binarymage</p>
            </span>
          </div>
        </div>
      </div>
      <p className="absolute bottom-0 text-grey text-[15px] mt-[200px] mb-10 font-sans font-normal text-center">
        &copy; 2024 QuantumUi.dev All Rights Reserved.
      </p>
    </div>
  );
};

export default Contact;
