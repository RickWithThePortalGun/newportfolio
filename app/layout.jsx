import { Montserrat } from "next/font/google";
import localFont from 'next/font/local'
import "@styles/globals.css";

const montreal = localFont({
  src: [
    {
      path: '../fonts/NeueMontreal-Light.otf',
      weight: '300'
    },
    {
      path: '../fonts/NeueMontreal-Regular.otf',
      weight: '400'
    },
    {
      path: '../fonts/NeueMontreal-Medium.otf', 
      weight: '500'
    },
    {
      path: '../fonts/NeueMontreal-Bold.otf', 
      weight: '700'
    }
  ],
  variable: '--font-montreal'
})

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "CodeByVictor",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <link rel="icon" href="favicon.ico" />
      <body className={`${montserrat.className} ${montreal.className} bg-customblack`}>{children}</body>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
    </html>
  );
}
