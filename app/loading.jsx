"use client";
import { useEffect } from "react";
import { gsap, Power4 } from "gsap";

const LoadingScreen = () => {
  useEffect(() => {
    const top = document.getElementById("loading-svg");
    anime({
      targets: top,
      fill: [
        { value: "#e5e5e5" },
        { value: "#88A2FF" },
        { value: "#252525" }, // Start color
        { value: "#BDD4FF" }, // End color
      ],
      duration: 2000, // Duration of the animation in milliseconds
      easing: "easeInOutSine", // Easing function for a smooth transition
      direction: "alternate", // Alternate between start and end colors
      loop: true, // Loop the animation
    });
  }, []);

  return (
    <div className="loading-screen bg-customblack">
      <svg
        id="loading-svg"
        width="60"
        height="60"
        viewBox="0 0 218 183"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.38553 81.0963C3.79921 77.8171 6.13501 73 10.3114 73H44.8191C46.3502 73 47.7969 73.7015 48.745 74.9037L127.614 174.904C130.201 178.183 127.865 183 123.689 183H89.1809C87.6498 183 86.2031 182.299 85.255 181.096L6.38553 81.0963Z" />
        <path d="M177.072 149.677C179.568 153.026 184.827 152.019 185.91 147.986L194.86 114.659C195.257 113.18 194.955 111.601 194.039 110.374L117.917 8.26682C115.421 4.91849 110.163 5.92499 109.08 9.95849L100.13 43.2853C99.7327 44.764 100.035 46.3431 100.95 47.5706L177.072 149.677Z" />
        <rect
          x="121.944"
          y="101"
          width="16.9128"
          height="22.4366"
          rx="8.45641"
          transform="rotate(53.1078 121.944 101)"
        />
        <rect
          x="137.703"
          y="127"
          width="11.0307"
          height="14.6333"
          rx="5.51534"
          transform="rotate(53.1078 137.703 127)"
        />
        <circle cx="90" cy="80" r="24" />{" "}
      </svg>
      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000; /* Adjust the background color as needed */
        }
      `}</style>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>

    </div>
  );
};

export default LoadingScreen;
