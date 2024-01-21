import { useEffect } from "react";

const MouseFollowGradient = () => {
  useEffect(() => {
    const gradientSvg = document.getElementById("gradient-svg");

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Update SVG position based on mouse coordinates
      gradientSvg.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <svg
      id="gradient-svg"
      className="absolute rounded-[50%] top-0 right-0 z-50"
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="500"
      viewBox="0 0 905 964"
      fill="none"
    >
      <defs>
        <filter
          id="filter0_f_7_21"
          x="0.125"
          y="-218.928"
          width="1670.33"
          height="1213.01"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="4"
            result="effect1_foregroundBlur_7_21"
          />
        </filter>
        <radialGradient
          id="paint0_radial_7_21"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1063.95 387.574) rotate(88.8321) scale(598.5 598.5)"
        >
          <stop stopColor="#022DFF" stopOpacity="0.8" />
          <stop offset="0.485" stopColor="#040DFF" stopOpacity="0.62" />
          <stop offset="1" stopColor="#0500FF" stopOpacity="0.1" />
        </radialGradient>
      </defs>
      <circle cx="50%" cy="50%" r="10%" fill="url(#paint0_radial_7_21)" />
      {/* Add your SVG content here */}
    </svg>
  );
};

export default MouseFollowGradient;
