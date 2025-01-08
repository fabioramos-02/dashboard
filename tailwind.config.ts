import type { Config } from "tailwindcss";
import daisyui from "daisyui"; // Importando o plugin corretamente
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#004F9F",
        customLightBlue: "#0983dc", //precisa ser gradient
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #004F9F, #0D99F7)",
      },
    },
  },
  plugins: [daisyui], // Usando o plugin importado
} satisfies Config;
