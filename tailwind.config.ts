import type { Config } from "tailwindcss";
import flowbite from 'flowbite-react/tailwind';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "#4E9968",
        pale: "#ADC6B5",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#4E9968",
        pale: "#ADC6B5"
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        dm: ['var(--font-dm)'],
        cormo: ['--font-cormorant'],
        jose: ['--font-josefin']
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
};
export default config;
