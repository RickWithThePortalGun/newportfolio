import React from "react";

const Contact = () => {
  return (
    <div className="bg-transparent mt-[200px] pb-[200px] relative  z-50 flex flex-col justify-center items-center">
      <div className="bg-gradient-conic py-10 pl-10 pr-4 rounded-3xl max-sm:rounded-none max-sm:w-full w-fit  h-full flex flex-row max-sm:flex-col gap-8">
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
          <div className="border-[1px] rounded-full px-2 py-1">
            <p className="text-white">Resume </p>
          </div>
          <div className="flex flex-col gap-4">
            <span>
              <img
                width="50"
                height="50"
                className="rounded-full"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/apple-mail.png"
                alt="apple-mail"
              />
            </span>
            <span>
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"
                alt="linkedin"
                className="rounded-full"
              />
            </span>
            <span>
              <img
                className="rounded-full"
                width="46"
                height="46"
                src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/FFFFFF/external-telegram-messenger-with-voice-over-ip-service-logo-bold-tal-revivo.png"
                alt="external-telegram-messenger-with-voice-over-ip-service-logo-bold-tal-revivo"
              />
            </span>
            <span>
              <img
                width="48"
                className="rounded-full"
                height="48"
                src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/FFFFFF/external-discord-chat-for-social-gaming-between-peers-logo-bold-tal-revivo.png"
                alt="external-discord-chat-for-social-gaming-between-peers-logo-bold-tal-revivo"
              />
            </span>
          </div>
        </div>
      </div>
      <p className="absolute bottom-0 text-grey text-[15px] mt-[200px] font-sans font-normal text-center">
      &copy;
2024 QuantumUi.dev All Rights Reserved.
      </p>

    </div>
  );
};

export default Contact;
